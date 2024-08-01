import { useEffect } from 'react';
import { RestList } from '../cmps/RestList.jsx';
import { useSelector } from 'react-redux';
import { loadRests } from '../store/rest.actions';
import { SideFilter } from '../cmps/filters-cmps/SideFilter.jsx';

export function EatIndex() {
    const rests = useSelector(storeState => storeState.restModule.rests)
    const filterBy = useSelector(storeState => storeState.restModule.filterBy)
    useEffect(() => {
        loadRests(filterBy)
    }, [filterBy])

    if (!rests) return <div className="loader"></div>
    return (
        <section className="eat-index flex">
            <SideFilter />
            <RestList rests={rests} />
        </section>
    );
}
