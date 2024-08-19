import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { DishFilter } from "../cmps/filters-cmps/DishFilter"
import { OrderList } from "../cmps/OrderList"
import { AboutRest } from "../cmps/AboutRest"


export function RestDetails() {
    const rests = useSelector((storeState) => storeState.restModule.rests)
    const param = useParams()
    const rest = rests.find((rest) => rest.id === param.restId)
    const [dishFilter, setDishFilter] = useState("")

    useEffect(() => {
        setDishFilter("")
    }, [param.restId])




    if (!rest) {
        return <div>Restaurant not found</div>;
    }

    const filteredMenu = Object.keys(rest.menu).reduce((acc, category) => {
        const filteredDishes = rest.menu[category].filter((dish) =>
            dish.name.toLowerCase().includes(dishFilter) ||
            dish.description.toLowerCase().includes(dishFilter)
        );
        if (filteredDishes.length) {
            acc[category] = filteredDishes;
        }
        return acc;
    }, {});


    return (
        <section className="rest-details full main-container">

            <div className="rest-img full" style={{ backgroundImage: `url(${rest.image})` }}>
                <img className="rest-logo" src={rest.logo} alt="rest image" />

                <div className="diagonal-bg"></div>
            </div>

            <div className="rest-info-container main-container full">
                <div className="rest-info">
                    <h1 className="rest-name-title">{rest.name}</h1>

                    <div className="rest-rating-info">
                        <div className="rest-rating-container">
                            <span className="rating">⭐{rest.rating}</span>
                            <span>({rest.reviews.length})</span>
                        </div>
                        <a className="reviews-link" href="#Reviews">Reviews</a>
                    </div>

                    <div className="rest-category-info">
                        <span>{rest.category.join(', ')}</span>
                    </div>

                    <div className="rest-shipping-info">
                        <span>Delivery fee {rest.shipping.freeShipping ? 'Free' : '$' + rest.shipping.shippingCost} ▪</span>
                        <span> Minimum ${rest.shipping.minOrder}</span>
                    </div>
                    <AboutRest rest={rest} />
                </div>
            </div>

            <nav className="menu-category-nav-container main-container full">
                <div className="menu-category-layout">
                    <div className="menu-category-nav">
                        {Object.keys(rest.menu).map((category, idx) => (
                            <div className="menu-category-link" key={idx}>
                                <a href={`#${category.replace(/\s+/g, '-')}`}>{category}</a>
                            </div>
                        ))}
                    </div>
                    <div className="search-meal">
                        <DishFilter setDishFilter={setDishFilter} rest={rest} />
                    </div>
                </div>

            </nav>

            <div className="menus-container main-container full">
                <div className="menus-layout">
                    <div className="menus-info-container">
                        {Object.keys(filteredMenu).map((category, idx) => (
                            <div key={idx} className="menu-category" id={category.replace(/\s+/g, "-")}>
                                <h3>{category}</h3>
                                <ul>
                                    {filteredMenu[category].map((dish, idx) => (
                                        <li key={idx}>
                                            <div className="dish-info">
                                                <span className="dish-name">{dish.name}</span>
                                                <span className="dish-description">{dish.description.slice(0, 50)}...</span>
                                                <span className="dish-price">${dish.price.toFixed(2)}</span>
                                            </div>
                                            <div className="dish-img" style={{ backgroundImage: `url(${dish.image})` }}></div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="order-container">
                        <OrderList rest={rest} />
                    </div>
                </div>
            </div>

            <section className="reviews-container main-container full" id="Reviews">
                <div className="review-title">
                    <span className="stars-span">{"⭐".repeat(Math.round(rest.reviews.reduce((acc, review) => acc + review.rating, 0) / rest.reviews.length))}</span>
                    <span className="review-count-span">({rest.reviews.length})</span>
                </div>
                <div className="reviews-divider">
                    {rest.reviews.map((review, idx) => (
                        <div key={idx} className="review">
                            <div>
                                <span>{(() => {
                                    const [firstName, lastName] = review.userName.split(" ")
                                    return `${firstName} ${lastName.charAt(0)}.`
                                })()}</span>
                                <span className="stars-span">{"⭐".repeat(review.rating)}</span>
                            </div>
                            <span>{review.date}</span>
                            <p>{review.content}</p>
                        </div>
                    ))}

                </div>


            </section>

        </section>
    )
}