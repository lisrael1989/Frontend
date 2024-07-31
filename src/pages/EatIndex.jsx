import { useEffect, useState } from 'react';
import { RestList } from '../cmps/RestList.jsx';
import { useSelector } from 'react-redux';
export function EatIndex() {
  const rests = useSelector((storeState) => storeState.restModule.rests);

  if (!rests) return <div className="loader"></div>;
  return (
    <>
      <RestList rests={rests} />;<h1>test</h1>
    </>
  );
}
