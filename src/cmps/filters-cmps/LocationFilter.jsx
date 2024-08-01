import { useSelector } from "react-redux"

export function LocationFilter() {
    const filterBy = useSelector(storeState => storeState.restModule.filterBy)

    return (
        <div>here LocationFilter</div>
    )
}