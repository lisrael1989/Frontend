import { useSelector } from 'react-redux';
import { LocationFilter } from './LocationFilter';
import { TextFilter } from './TextFilter';

export function HeaderFilter() {
  return (
    <section className="header-filter" style={{ display: 'flex', gap: '20px' }}>
      <LocationFilter />
      <TextFilter />
    </section>
  );
}
