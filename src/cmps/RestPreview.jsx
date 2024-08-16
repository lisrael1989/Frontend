export function RestPreview({ rest, onSelectRest }) {
  return (
    <section className="rest-card" onClick={() => onSelectRest(rest.id)}>
      <img className="rest-img" src={rest.image} alt="" />
      <div className="rest-info">
        <h1 className="rest-name">{rest.name}</h1>
        <p className="rest-category">
          {rest.category.map((cat) => cat + ', ')}
        </p>

        <div className="rest-info-bottom flex">
          <p className="rest-rating">⭐{rest.rating} </p>
          {rest.shipping.freeShipping ? (
            <p className="rest-delivery">Free delivery</p>
          ) : (
            <p className="rest-delivery-cost">
              Delivery: {rest.shipping.shippingCost} ₪{' '}
            </p>
          )}
          <p className="min-delivery-price">Min: {rest.shipping.minOrder} ₪ </p>
        </div>
      </div>
    </section>
  );
}
