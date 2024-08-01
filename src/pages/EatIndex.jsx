import { useEffect } from 'react';
import { RestList } from '../cmps/RestList.jsx';
import { useSelector } from 'react-redux';
import { loadRests } from '../store/rest.actions';

export function EatIndex() {
    const rests = useSelector(storeState => storeState.restModule.rests)
    const filterBy = useSelector(storeState => storeState.restModule.filterBy)
    useEffect(() => {
        loadRests(filterBy)
    }, [filterBy])

    if (!rests) return <div className="loader"></div>
    return (
        <>
            <RestList rests={rests} />
        </>
    );
}
