import { useEffect, useState } from "react"

export function SortFilter({ onSetSortBy, clearFilterBtn, sortBy }) {
    const [selectedSort, setSelectedSort] = useState(sortBy.sortBy || "null")
    useEffect(() => {
        if (clearFilterBtn) {
            onSetSortBy({ sortBy: "" })
            setSelectedSort("")
        }
    }, [clearFilterBtn])
    function setSortClick(sortBy) {
        setSelectedSort(sortBy)
        onSetSortBy({ sortBy: sortBy })
    }

    return (
        <section className="sort-filter-container">
            <button className={selectedSort === "discounts" ? "active" : ""} onClick={() => setSortClick("discounts")}>Discounts</button>
            <button className={selectedSort === "distance" ? "active" : ""} onClick={() => setSortClick("distance")}>Distance</button>
            <button className={selectedSort === "rating" ? "active" : ""} onClick={() => setSortClick("rating")}>Rating</button>
            <button className={selectedSort === "min" ? "active" : ""} onClick={() => setSortClick("min")}>Min</button>
            <button className={selectedSort === "deliveryFee" ? "active" : ""} onClick={() => setSortClick("deliveryFee")}>Delivery fee</button>
            <button className={selectedSort === "deliveryTime" ? "active" : ""} onClick={() => setSortClick("deliveryTime")}>Delivery time</button>
        </section>
    )
}