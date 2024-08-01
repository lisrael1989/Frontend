import { useSelector } from "react-redux";
import { LocationFilter } from "./LocationFilter";
import { TextFilter } from "./TextFilter";

export function HeaderFilter() {



    return (
        <section className="header-filter" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <LocationFilter />
            <TextFilter />
        </section>
    )
}