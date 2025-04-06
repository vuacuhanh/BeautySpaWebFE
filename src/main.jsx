import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterCustom from './RouterCustom';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <React.StrictMode>
    <BrowserRouter>
      <RouterCustom />
    </BrowserRouter>
  </React.StrictMode>
);
