export function PreferencesFilter({ onSetFilterBy }) {

    function handlePreferencesChange({ target }) {
        onSetFilterBy(true)
    }

    return (
        <section className="preferences-filter-container">
            <button onClick={() => handlePreferencesChange()}>Free delivery</button>

        </section>
    )
}