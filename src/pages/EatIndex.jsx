import { useEffect, useState } from 'react';
import { RestList } from '../cmps/RestList.jsx';
import { useSelector } from 'react-redux';
import { loadRests } from '../store/rest.actions';

export function EatIndex() {
  const rests = useSelector((storeState) => storeState.restModule.rests);

  useEffect(() => {
    loadRests();
  }, []);

  if (!rests) return <div className="loader"></div>;
  return (
    <>
      <RestList rests={rests} />
    </>
  );
}
