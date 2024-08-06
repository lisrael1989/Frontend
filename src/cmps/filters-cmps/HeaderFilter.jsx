import { LocationFilter } from './LocationFilter';
import { TextFilter } from './TextFilter';

export function HeaderFilter() {
  return (
    <section className="header-filter main-container ">
      <div className="flex" style={{ gap: '20px' }}>
        <LocationFilter />
        <TextFilter />
      </div>
    </section>
  );
}
