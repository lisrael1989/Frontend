import { useState } from "react";

export function AboutRest({ rest }) {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setModalOpen(true)}> About the restaurant</button>
        </div>

    )
}