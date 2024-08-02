import { useState } from "react"

export function CategoryFilter({ onSetFilterBy }) {
    const [selectedCategory, setSelectedCategory] = useState(null)

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


    return (
        <section className="category-filter">
            <ul className="category-list">
                {categories.map((cat) => (
                    <li key={cat.name}
                        onClick={() => handleCategoryClick(cat.name)}
                        className={`${selectedCategory && selectedCategory !== cat.name ? 'faded' : ''} 
                        ${selectedCategory === cat.name ? 'selected' : ''}`}>
                        <img src={cat.url} alt={cat.name} />
                        <p>{cat.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}