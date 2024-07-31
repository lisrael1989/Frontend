
export function RestPreview({ rest }) {
  return (
    <section className="rest-card">
      <img src={rest.image} alt="" />
      <h1>{rest.name}</h1>
      <p>{rest.category.map((cat) => cat + ', ')}</p>
      <p>⭐{rest.rating} </p>
      {rest.shipping.freeShipping ? <p>Free delivery</p> : <p>Delivery cost: {rest.shipping.shippingCost} ₪ </p>}
      <p>Min: {rest.shipping.minOrder} ₪ </p>
    </section>
  );
}
