import { useEffect } from 'react';
import { RestList } from '../cmps/RestList.jsx';
import { useSelector } from 'react-redux';
import { loadRests } from '../store/rest.actions';
import { SideFilter } from '../cmps/filters-cmps/SideFilter.jsx';
import { Carousel } from '../cmps/Carousel.jsx';
import { useNavigate } from 'react-router';

export function EatIndex() {
  const navigate = useNavigate()
  const rests = useSelector((storeState) => storeState.restModule.rests);
  const filterBy = useSelector((storeState) => storeState.restModule.filterBy);
  const sortBy = useSelector((storeState) => storeState.restModule.sortBy);
  useEffect(() => {
    loadRests(filterBy, sortBy);
  }, [filterBy, sortBy]);

  function onSelectRest(restId) {
    navigate(`/rest/${restId}`)
  }

  if (!rests) return <div className="loader"></div>;
  return (
    <>
      <section className="eat-index">
        <SideFilter />
        <div className="right-container">
          <Carousel />
          <RestList rests={rests} onSelectRest={onSelectRest} />
        </div>
      </section>
    </>
  );
}
