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
        <>
            {/* <button className="clear-filter-btn" onClick={() => clearFilter()}>Clear</button> */}
            <CategoryFilter
                onSetFilterBy={onSetFilterBy}
            />
        </>
    )
}