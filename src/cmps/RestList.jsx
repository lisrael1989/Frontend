import { RestPreview } from './RestPreview.jsx';

export function RestList({ rests, onSelectRest }) {

  return (
    <ul className="rest-list">
      {rests.map((rest) => (
        <RestPreview rest={rest} key={rest.id} onSelectRest={onSelectRest} />
      ))}
    </ul>
  )
}
