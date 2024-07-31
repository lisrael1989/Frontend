import { useEffect, useState } from 'react';
import { RestList } from '../cmps/RestList.jsx';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { loadRests } from '../store/rest.actions';

export function EatIndex() {
  const rests = useSelector((storeState) => storeState.restModule.rests);

  return <div></div>;
}
