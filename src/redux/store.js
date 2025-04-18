import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlide.js'; 

const store = configureStore({
  reducer: {
    auth: authReducer, 
  },
});

export default store;