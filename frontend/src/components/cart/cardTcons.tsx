

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

interface CartIconProps {
  data: any; // Replace 'any' with the appropriate type of your data
}

const CartIcon: React.FC<CartIconProps> = ({ data }) => {
  const handleCartClick = async () => {
    try {
      await axios.post('https://koshi-exception-023-1.onrender.com/cart', data);
      alert('Added to cart!');
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <div onClick={handleCartClick}>
      <FontAwesomeIcon icon={faCartPlus} />
    </div>
  );
};

export default CartIcon;
