import { useEffect, useState } from "react"
import { categoryPath } from "../../services/category.path.images"

export function CategoryFilter({ onSetFilterBy, clearFilterBtn }) {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [showAllCategory, setShowAllCategory] = useState(false)
    const categories = categoryPath

    useEffect(() => {
        if (clearFilterBtn) {
            setSelectedCategory(null)
            onSetFilterBy({ category: '' })
        }
    }, [clearFilterBtn])

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
                            className={`${selectedCategory && selectedCategory !== cat.name ? 'faded' : ''} ${selectedCategory === cat.name ? 'selected' : ''} ${index >= initialCategory && !showAllCategory ? 'hidden' : ''}`}>
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