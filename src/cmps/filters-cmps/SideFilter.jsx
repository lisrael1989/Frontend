import { useSelector } from 'react-redux';
import { CategoryFilter } from './CategoryFilter';
import { setFilterBy } from '../../store/rest.actions';
import { PreferencesFilter } from './PreferencesFilter';
import { useEffect, useState } from 'react';

export function SideFilter() {
  const filterBy = useSelector((storeState) => storeState.restModule.filterBy);
  const [clearFilterBtn, setClearFilterBtn] = useState(false);

  useEffect(() => {
    setClearFilterBtn(false);
  }, [clearFilterBtn]);

  function onSetFilterBy(filterBy) {
    setFilterBy(filterBy);
  }
  function clearSideFilter(cl) {
    setClearFilterBtn(!cl);
  }

  return (
    <aside className="side-filter-container">
      <div className="filter-header">
        <p className="filter-title">Filter</p>
        <button
          className={
            !filterBy.category ? 'clear-filter-btn' : 'clear-filter-btn on'
          }
          onClick={() => clearSideFilter(clearFilterBtn)}
        >
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
    </aside>
  );
}
