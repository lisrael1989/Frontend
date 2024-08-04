
export function SortFilter({ onSetSortBy }) {

    function setSortClick(sortBy) {

        onSetSortBy({ sortBy: sortBy })
    }


    return (
        <section className="sort-filter-container">
            <button onClick={() => setSortClick("discounts")}>Discounts</button>
            <button onClick={() => setSortClick("distance")}>Distance</button>
            <button onClick={() => setSortClick("rating")}>Rating</button>
            <button onClick={() => setSortClick("min")}>Min</button>
            <button onClick={() => setSortClick("deliveryFee")}>Delivery fee</button>
            <button onClick={() => setSortClick("deliveryTime")}>Delivery time</button>
        </section>
    )
}