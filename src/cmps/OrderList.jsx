import { useNavigate } from "react-router"

export function OrderList({ rest, dish }) {
    const navigate = useNavigate()

    function onProceedToCheckOut() {
        navigate('/payment')
    }

    return (
        <div className="order-list-container">
            <div className="order-section1">
                <div className="order-eta">
                    <h1>The delivery ETA:</h1>
                    <div>
                        <img src={"/Img/icons-images/delivery.webp"} alt="delivery-icon" />
                        <div>
                            <h2>45-55 min</h2>
                            <p>Delivery {rest.shipping.freeShipping ? 'Free' : '$' + rest.shipping.shippingCost}</p>
                        </div>
                    </div>
                </div>
                <div className="order-schedule">
                    <h1>Schedule</h1>
                </div>
            </div>

            <div className="order-section2">
                {!dish ?
                    <button className="order-btn-disable">Proceed to payment</button>
                    :
                    <button className="order-btn" onClick={() => onProceedToCheckOut()}>Proceed to payment</button>
                }
                {!dish ?
                    <p>Your cart is empty</p>
                    :
                    <p>{dish.name}</p>
                }
            </div>
            <div className="order-section3">
            </div>


        </div>
    )

}