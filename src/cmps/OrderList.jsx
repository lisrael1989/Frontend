export function OrderList({ rest }) {




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
                <button className="order-btn">Proceed to payment</button>
                <p>Your cart is empty</p>
            </div>
            <div className="order-section3">
            </div>


        </div>
    )

}