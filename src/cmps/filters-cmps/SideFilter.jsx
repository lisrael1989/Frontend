import { useSelector } from "react-redux"
import { CategoryFilter } from "./CategoryFilter"
import { setFilterBy } from "../../store/rest.actions"

export function SideFilter() {

    const filterBy = useSelector(storeState => storeState.restModule.filterBy)



    function onSetFilterBy(filterBy) {
        setFilterBy(filterBy)

    }


    return (

        <CategoryFilter onSetFilterBy={onSetFilterBy} filterBy={filterBy} />

    )
}