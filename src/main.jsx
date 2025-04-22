import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; 
import RouterCustom from './RouterCustom'; // Component định tuyến tùy chỉnh
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import './index.css'; 
import { AuthProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
      <BrowserRouter>
          <ToastContainer />
          <RouterCustom />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);