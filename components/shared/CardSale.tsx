'use client'
import React from 'react';
import { Star, StarHalf } from 'lucide-react';

type Props = {
  image: string;
  ProductName: string;
  price: string;
  rating?: number;
};

const CardSale: React.FC<Props> = ({ image, ProductName, price, rating = 0 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-200 max-w-sm w-full mx-auto flex flex-col justify-between ">
      <img src={image} alt={ProductName} className="w-full h-52 object-cover rounded-t-md" />
      <div className='py-4'>
        <div className="flex-grow p-2">
          <h2 className="text-xl font-semibold text-gray-800">{ProductName}</h2>
          <p className="text-lg font-bold text-gray-600 mt-2">{price}</p>
        </div>
        {rating > 0 && (
          <div className="flex items-center justify-start  border-gray-200 p-2">
            {[...Array(fullStars)].map((_, index) => (
              <Star
                key={`full-${index}`}
                size={20}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}

            {hasHalfStar && (
              <StarHalf
                size={20}
                className="text-yellow-400"
              />
            )}

            {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
              <Star
                key={`empty-${index}`}
                size={20}
                className="text-gray-300"
              />
            ))}

            <span className="ml-2 text-sm text-gray-600">
              {rating.toFixed(1)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardSale;
