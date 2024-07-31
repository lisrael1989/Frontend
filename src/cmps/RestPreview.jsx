import { useState } from 'react';
import { Link } from 'react-router-dom';
import { utilService } from '../services/util.service';

// import { updaterest } from '../store/rest.actions';
import { useSelector } from 'react-redux';

export function RestPreview({ rest }) {
  console.log(rest.name);
  return (
    <section className="rest-card">
      <h1>{rest.name}</h1>
      <h1>hello</h1>
    </section>
  );
}
