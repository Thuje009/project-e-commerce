import { Star, StarHalf } from 'lucide-react';
import React from 'react'

const Rating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  return (
    <div>  {rating > 0 && (
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
    )}</div>
  )
}

export default Rating