import { useSelector } from "react-redux"
import { CategoryFilter } from "./CategoryFilter"
import { setFilterBy } from "../../store/rest.actions"

export function SideFilter() {
    const filterBy = useSelector(storeState => storeState.restModule.filterBy)


    function onSetFilterBy(filterBy) {
        setFilterBy(filterBy)

    }
    // function clearFilter() {
    //     onSetFilterBy({ category: '' })
    // }

    return (
        <aside className="side-filter-container">
            <div className="filter-header">
                <p className="filter-title">Filter</p>
                <button className="clear-filter-btn" onClick={() => clearFilter()}>Clear</button>
            </div>
            <CategoryFilter
                onSetFilterBy={onSetFilterBy}
            />
            <div>hi</div>
        </aside>
    )
}