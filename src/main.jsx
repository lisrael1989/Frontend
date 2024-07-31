import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/main.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);
