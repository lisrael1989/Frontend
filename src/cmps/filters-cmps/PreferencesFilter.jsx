import { useEffect, useState } from 'react';
import { utilService } from '../../services/util.service';

export function PreferencesFilter({ onSetFilterBy, clearFilterBtn }) {
  const [selectedPreference, setSelectedPreference] = useState(null);

  useEffect(() => {
    if (clearFilterBtn) {
      setSelectedPreference(null);
      onSetFilterBy({});
    }
  }, [clearFilterBtn]);

  function handlePreferencesChange(preference) {
    console.log('preference', preference);
    if (selectedPreference === preference) {
      setSelectedPreference(null);
      onSetFilterBy({ [preference]: false });
    } else {
      setSelectedPreference(preference);
      onSetFilterBy({ [preference]: true });
    }
  }

  return (
    <section className="preferences-filter-container flex">
      <button
        className={`preferences-btns ${
          selectedPreference === 'freeShipping' ? 'selected' : ''
        }`}
        onClick={() => handlePreferencesChange('freeShipping')}
      >
        Free delivery
      </button>
      <button
        className={`preferences-btns ${
          selectedPreference === 'new' ? 'selected' : ''
        }`}
        onClick={() => handlePreferencesChange('new')}
      >
        New
      </button>
      <button
        className={`preferences-btns ${
          selectedPreference === 'kosher' ? 'selected' : ''
        }`}
        onClick={() => handlePreferencesChange('kosher')}
      >
        Kosher
      </button>
    </section>
  );
}
