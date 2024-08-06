import { useEffect } from 'react';
import { RestList } from '../cmps/RestList.jsx';
import { useSelector } from 'react-redux';
import { loadRests } from '../store/rest.actions';
import { SideFilter } from '../cmps/filters-cmps/SideFilter.jsx';
import { Carousel } from '../cmps/Carousel.jsx';

export function EatIndex() {
  const rests = useSelector((storeState) => storeState.restModule.rests);
  const filterBy = useSelector((storeState) => storeState.restModule.filterBy);
  const sortBy = useSelector((storeState) => storeState.restModule.sortBy);
  useEffect(() => {
    loadRests(filterBy, sortBy);
  }, [filterBy, sortBy]);

  if (!rests) return <div className="loader"></div>;
  return (
    <>
      <section className="eat-index">
        <SideFilter />
        <div className="right-container">
          <Carousel />
          <RestList rests={rests} />
        </div>
      </section>
    </>
  );
}
