import { useEffect, useState } from "react";

export function AboutRest({ rest }) {

    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (modalOpen) {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }

        return () => document.body.classList.remove('no-scroll')
    }, [modalOpen])

    return (
        <div className="about-rest-container">
            <div>
                <button onClick={() => setModalOpen(true)}> About the restaurant</button>
            </div>

            {modalOpen &&
                <div className="backdrop" onClick={() => setModalOpen(false)}>
                    <div className="modal">
                        <div>
                            <img src={rest.logo} alt="logo" />
                            <div className="rest-information">
                                <div className="rest-name-exit">
                                    <h1>{rest.name}</h1>
                                    <button className="close-btn" onClick={() => setModalOpen(false)}>X</button>
                                </div>
                                <div className="rest-address-container">
                                    <p className="rest-address">{rest.address.city} {rest.address.street}</p>
                                    <p className="rest-phone">03-689689</p>

                                </div>
                            </div>
                        </div>
                        <div className="rest-hours">
                            <h1>Delivery hours</h1>
                            <div>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <p className="day">Sunday </p>
                                    <p className="hours">11:00 - 22:45</p></div>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <p className="day">Monday </p>
                                    <p className="hours">11:00 - 22:45</p></div>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <p className="day">Tuesday </p>
                                    <p className="hours">11:00 - 22:45</p></div>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <p className="day">Wednesday</p>
                                    <p className="hours">11:00 - 22:45</p></div>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <p className="day">Friday </p>
                                    <p className="hours">12:00-22:45</p></div>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <p className="day">Saturday</p>
                                    <p className="hours">12:00-22:45</p></div>
                            </div>
                        </div >
                    </div >


                </div >}
        </div >
    )
}