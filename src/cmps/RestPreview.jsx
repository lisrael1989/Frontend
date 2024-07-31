import { useState } from 'react';
import { Link } from 'react-router-dom';
import { utilService } from '../services/util.service';

// import { updaterest } from '../store/rest.actions';
import { useSelector } from 'react-redux';

export function RestPreview({ rest }) {
  return (
    <section className="rest-card">
      <img src={rest.image} alt="" />
      <h1>{rest.name}</h1>
      <p>{rest.category}</p>
      <p>⭐{rest.rating} </p>
      <p>Delivery cost: {rest.shipping.shippingCost} nis </p>
      <p>Min: {rest.shipping.minOrder} nis </p>
    </section>
  );
}
