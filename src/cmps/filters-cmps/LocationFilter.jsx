import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { setFilterBy } from '../../store/rest.actions.js';
import { utilService } from '../../services/util.service.js';

export function LocationFilter() {
  const filterBy = useSelector((storeState) => storeState.restModule.filterBy);
  const [localFilterBy, setLocalFilterBy] = useState({ ...filterBy });

  const debouncedSetFilterBy = useRef(
    utilService.debounce((filter) => setFilterBy(filter), 300)
  ).current;

  function handleChange({ target }) {
    let { value, name: field, type } = target;
    const newValue = type === 'number' ? +value : value;

    const updatedFilterBy = { ...filterBy, [field]: newValue };
    setLocalFilterBy(updatedFilterBy);
    debouncedSetFilterBy(updatedFilterBy);
  }
  return (
    <input
      type="text"
      value={localFilterBy.loc || ''}
      onChange={handleChange}
      name="loc"
      placeholder="Put Your Address here"
    />
  );
}
