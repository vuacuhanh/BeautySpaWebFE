import React, { useState } from 'react';
import './style.css';

const QuanlityService = ({ initialValue = 1, min = 1, max = 10, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialValue);

  const handleDecrease = () => {
    if (quantity > min) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      if (onQuantityChange) onQuantityChange(newQuantity);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      if (onQuantityChange) onQuantityChange(newQuantity);
    }
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || min;
    if (value >= min && value <= max) {
      setQuantity(value);
      if (onQuantityChange) onQuantityChange(value);
    }
  };

  return (
    <div className="quantity-service">
      <button 
        className="quantity-btn decrease" 
        onClick={handleDecrease}
        disabled={quantity <= min}
      >
        -
      </button>
      
      <input
        type="number"
        className="quantity-input"
        value={quantity}
        min={min}
        max={max}
        onChange={handleChange}
      />
      
      <button 
        className="quantity-btn increase" 
        onClick={handleIncrease}
        disabled={quantity >= max}
      >
        +
      </button>
    </div>
  );
};

export default QuanlityService;