import { useEffect, useState } from 'react';
import { utilService } from '../../services/util.service';

export function PreferencesFilter({ onSetFilterBy, clearFilterBtn }) {
  const [selectedPreferences, setSelectedPreferences] = useState({
    freeShipping: false,
    new: false,
    kosher: false,
  });

  useEffect(() => {
    if (clearFilterBtn) {
      setSelectedPreferences({
        freeShipping: false,
        new: false,
        kosher: false,
      });
      onSetFilterBy({});
    }
  }, [clearFilterBtn, onSetFilterBy]);

  function handlePreferencesChange(preference) {
    const updatedPreferences = {
      ...selectedPreferences,
      [preference]: !selectedPreferences[preference],
    };
    setSelectedPreferences(updatedPreferences);
    onSetFilterBy(updatedPreferences);
  }

  return (
    <>
      <h1>Preferences</h1>
      <section className="preferences-filter-container flex">
        <button
          className={`preferences-btns ${
            selectedPreferences.freeShipping ? 'selected' : ''
          }`}
          onClick={() => handlePreferencesChange('freeShipping')}
        >
          Free delivery
        </button>
        <button
          className={`preferences-btns ${
            selectedPreferences.new ? 'selected' : ''
          }`}
          onClick={() => handlePreferencesChange('new')}
        >
          New
        </button>
        <button
          className={`preferences-btns ${
            selectedPreferences.kosher ? 'selected' : ''
          }`}
          onClick={() => handlePreferencesChange('kosher')}
        >
          Kosher
        </button>
      </section>
    </>
  );
}
