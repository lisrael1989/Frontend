import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"

export function RestDetails() {
    const rests = useSelector((storeState) => storeState.restModule.rests)
    const param = useParams()

    const rest = rests.find((rest) => rest.id === param.restId)
    useEffect(() => {


    }, [param.restId])





    if (!rest) {
        return <div>Restaurant not found</div>;
    }






    return (
        <section className="rest-details">
            <img src={rest.image} alt="rest image" />
            <h1>{rest.name}</h1>
            <div>
                <span>⭐</span><span>{rest.rating}</span> <span>({rest.reviews.length})</span> <span><a href="#Reviews">Reviews</a></span>
            </div>
            <div>
                <span>{rest.category.join(', ')}</span>
            </div>
            <div>
                <span>Delivery fee {rest.shipping.freeShipping ? 'Free' : '$' + rest.shipping.shippingCost} ▪</span>
                <span> Minimum ${rest.shipping.minOrder}</span>
            </div>
            <nav className="menu-category-nav-container">{Object.keys(rest.menu).map((category, idx) => (
                <div className="menu-category-nav" key={idx}>
                    <a href={`#${category.replace(/\s+/g, '-')}`}>{category}</a>
                </div>
            ))}</nav>
            <div className="menu-section">
                {Object.keys(rest.menu).map((category, idx) => (
                    <div key={idx} className="menu-category" id={category.replace(/\s+/g, '-')}>
                        <h3>{category}</h3>
                        <ul>
                            {rest.menu[category].map((dish, idx) => (
                                <li key={idx}>
                                    {dish.name} - {dish.price}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <section className="reviews-container" id="Reviews">
                <h4> {"⭐".repeat(Math.round(rest.reviews.reduce((acc, review) => acc + review.rating, 0) / rest.reviews.length))}</h4>
                <h4>({rest.reviews.length})</h4>
                {rest.reviews.map((review, idx) => (
                    <div key={idx} className="review">
                        <h3>{review.name}</h3>
                        <span>{review.date}</span>
                        <span>{"⭐".repeat(review.rating)}</span>
                        <p>{review.content}</p>
                    </div>
                ))}

            </section>
        </section>
    )
}