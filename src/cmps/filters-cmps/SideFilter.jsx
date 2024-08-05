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
    const [openSort, setOpenSort] = useState(false)
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
        if (filterBy.category || filterBy.freeShipping || filterBy.kosher || filterBy.new || sortBy.sortBy) {
            return 'clear-filter-btn on'
        }
        return 'clear-filter-btn'
    }

    function handleToggleOpenSort() {
        setOpenSort(!openSort)
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
            <div className="preferences-filter-container">
                <p>Preferences</p>
                <PreferencesFilter
                    onSetFilterBy={onSetFilterBy}
                    clearFilterBtn={clearFilterBtn}
                />
            </div>
            <div className="sort-container">
                <div className="sort-header">
                    <p>Sort list by</p>
                    <button className="open-sort-btn" onClick={handleToggleOpenSort}>
                        {openSort ? (
                            <svg id="arrow-up" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
                        ) : (
                            <svg id="arrow-down" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        )}
                    </button>
                </div>
                <div className={openSort ? "open-sort-cmp on" : "open-sort-cmp"}>
                    < SortFilter onSetSortBy={onSetSortBy} sortBy={sortBy} clearFilterBtn={clearFilterBtn} />
                </div>
            </div>
        </aside>
    );
}
