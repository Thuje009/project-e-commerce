'use client'
import React from 'react';
import Rating from './Rating';

type Props = {
  image: string;
  ProductName: string;
  price: string;
  rating?: number;
  onClick?: () => void
};

const CardSale: React.FC<Props> = ({ image, ProductName, price, rating = 0, onClick }) => {

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-200 max-w-sm w-full mx-auto flex flex-col justify-between " onClick={onClick}>
      <img src={image} alt={ProductName} className="w-full h-52 object-cover rounded-t-md" />
      <div className='py-4'>
        <div className="flex-grow p-2">
          <h2 className="text-xl font-semibold text-gray-800">{ProductName}</h2>
          <p className="text-lg font-bold text-gray-600 mt-2">{price}</p>
        </div>
        <Rating rating={rating} />
      </div>
    </div>
  );
};

export default CardSale;
