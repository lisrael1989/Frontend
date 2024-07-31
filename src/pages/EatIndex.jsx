import { useEffect } from "react"
import { useSelector } from "react-redux"
import { loadRests } from "../store/rest.actions"

export function EatIndex() {

    const rests = useSelector(state => state.restModule.rests)
    useEffect(() => {
        loadRests()
    }, [])
    console.log(rests)
    return (
        <div>

        </div>
    )
}