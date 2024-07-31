import { RestPreview } from './RestPreview.jsx';

export function RestList({ rests }) {
  return (
    <ul className="rest-list">
      {rests.map((rest) => (
        <RestPreview rest={rest} key={rest.id} />
      ))}
    </ul>
  )
}
