import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterCustom from './RouterCustom';
import './App.css';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <BrowserRouter>
    <RouterCustom />
  </BrowserRouter>
);
