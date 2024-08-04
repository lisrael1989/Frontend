import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { setFilterBy } from '../../store/rest.actions.js';
import { utilService } from '../../services/util.service.js';

export function TextFilter() {
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
      className="text-filter main-filter"
      type="text"
      value={localFilterBy.txt || ''}
      onChange={handleChange}
      name="txt"
      placeholder="Dishes, restaurants or"
    />
  );
}
