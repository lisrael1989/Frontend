import { useState } from "react"

export function CategoryFilter({ onSetFilterBy }) {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [showAllCategory, setShowAllCategory] = useState(false)
    const categories = [
        { name: 'Asian', url: 'public/img/category-images/asianFusion.png' },
        { name: 'BBQ', url: 'public/img/category-images/meatGrill.png' },
        { name: 'Pizza', url: 'public/img/category-images/pizza.png' },
        { name: 'Burgers', url: 'public/img/category-images/burgers.png' },
        { name: 'Sushi', url: 'public/img/category-images/japaneseSushi.png' },
        { name: 'Salads', url: 'public/img/category-images/salads.png' },
        { name: 'Coffee House', url: 'public/img/category-images/coffeeHouse.png' },
        { name: 'Home Made', url: 'public/img/category-images/homeMade.png' },
        { name: 'Pasta', url: 'public/img/category-images/pasta.png' },
        { name: 'Fish', url: 'public/img/category-images/fish.png' },
        { name: 'Humus', url: 'public/img/category-images/humus.png' },
        { name: 'Gelato', url: 'public/img/category-images/gelato.png' },
        { name: 'Wraps', url: 'public/img/category-images/sandwichesWraps.png' },
        { name: 'Store', url: 'public/img/category-images/convenienceStore.png' },
        { name: 'Patisserie', url: 'public/img/category-images/patisserie.png' },
        { name: 'Juice', url: 'public/img/category-images/SmoothiesAndShakes.png' },
        { name: 'Mexican', url: 'public/img/category-images/mexican.png' },
        { name: 'Indian', url: 'public/img/category-images/indian.png' },
        { name: 'Falafel', url: 'public/img/category-images/falafel.png' },
        { name: 'Seafood', url: 'public/img/category-images/seafood.png' },
        { name: 'Poke', url: 'public/img/category-images/poke.png' },
        { name: 'Soup', url: 'public/img/category-images/soup.png' },
        { name: 'Pastries', url: 'public/img/category-images/bakery.png' },
        { name: 'Bar', url: 'public/img/category-images/bar.png' },
        { name: 'Home cooks', url: 'public/img/category-images/homecooked.png' },
        { name: 'Fresh fish', url: 'public/img/category-images/freshfish.png' },
        { name: 'Liquid store', url: 'public/img/category-images/alcoholic.png' },
        { name: 'Cheese shop', url: 'public/img/category-images/cheeseshop.png' },
        { name: 'Fruits & Veg', url: 'public/img/category-images/fruitsAndVeg.png' },
        { name: 'Fruit trays', url: 'public/img/category-images/fruitplatters.png' },
        { name: 'Delicatessen', url: 'public/img/category-images/delicatessen.png' },
        { name: 'Sweets', url: 'public/img/category-images/sweetsAndTreats.png' },
        { name: 'Butcher', url: 'public/img/category-images/butcher.png' },
    ]


    function handleCategoryClick(cat) {
        if (selectedCategory === cat) {
            setSelectedCategory(null)
            onSetFilterBy({ category: '' })
        } else {
            setSelectedCategory(cat)
            onSetFilterBy({ category: cat })
        }
    }
    const initialCategory = 9


    function handleToggleShowAll() {
        setShowAllCategory(!showAllCategory)
    }

    return (
        <section className="category-filter-container">

            <section className={!showAllCategory ? "category-filter" : "category-filter closed"}>
                <ul className="category-list" >
                    {categories.map((cat, index) => (
                        <li key={cat.name}
                            onClick={() => handleCategoryClick(cat.name)}
                            className={`${selectedCategory && selectedCategory !== cat.name ? 'faded' : ''} ${selectedCategory === cat.name ? 'selected' : ''} ${index >= initialCategory && !showAllCategory ? 'hidden' : ''}`}
                        >
                            <div className="cat-img-container">
                                <img src={cat.url} alt={cat.name} />
                            </div>
                            <p>{cat.name}</p>
                        </li>
                    ))}
                </ul>

            </section>

            <button className="show-more-btn" onClick={handleToggleShowAll}>
                {showAllCategory ? (
                    <svg id="arrow-up" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
                ) : (
                    <svg id="arrow-down" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                )}
            </button>
        </section>

    )
}