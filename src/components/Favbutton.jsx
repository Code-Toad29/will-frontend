import React from 'react';
import { FaHeart } from 'react-icons/fa';

const FavButton = () => {
  return (
    <FaHeart 
      size={23} 
      className='bg-red-500 cursor-pointer drop-shadow-sm' 
    />
  );
}

export default FavButton;
