import { useSelector } from "react-redux"
import { CategoryFilter } from "./CategoryFilter"
import { setFilterBy, setSortBy } from "../../store/rest.actions"
import { PreferencesFilter } from "./PreferencesFilter"
import { useEffect, useState } from "react"
import { SortFilter } from "./SortFilter"

export function SideFilter() {
    const filterBy = useSelector(storeState => storeState.restModule.filterBy)
    const sortBy = useSelector(storeState => storeState.restModule.sortBy)
    const [clearFilterBtn, setClearFilterBtn] = useState(false)

    useEffect(() => {
        setClearFilterBtn(false);
    }, [clearFilterBtn]);

    function onSetFilterBy(filterBy) {
        setFilterBy(filterBy)
    }

    function onSetSortBy(sortBy) {
        setSortBy(sortBy)
    }
    function clearSideFilter(cl) {
        setClearFilterBtn(!cl)
    }

    function haveFilterOrSort() {
        if (filterBy.category || filterBy.Preferences || sortBy.sortBy) {
            return 'clear-filter-btn on'
        }
        return 'clear-filter-btn'
    }
    return (
        <aside className="side-filter-container">
            <div className="filter-header">
                <p className="filter-title">Filter</p>
                <button
                    className={haveFilterOrSort()}
                    onClick={() => clearSideFilter(clearFilterBtn)}>
                    Clear
                </button>
            </div>
            <CategoryFilter
                onSetFilterBy={onSetFilterBy}
                clearFilterBtn={clearFilterBtn}
                clearSideFilter={clearSideFilter}
            />
            <PreferencesFilter
                onSetFilterBy={onSetFilterBy}
                clearFilterBtn={clearFilterBtn}
            />
            <SortFilter onSetSortBy={onSetSortBy} clearFilterBtn={clearFilterBtn} />
        </aside>
    );
}
