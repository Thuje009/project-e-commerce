'use client';
import { darkLayout } from '@nextui-org/react';
import React, { useState } from 'react';

type Props = {
  title: string;
  dataText: {
    name?: string;
    size: string;
  }[];
};

const SizeProduct: React.FC<Props> = ({ dataText, title }) => {
  const [selectedSize, setSelectedSize] = useState<string>(`${dataText[0]?.size}`);

  const handleSelectSize = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className="flex gap-4 p-4">
      {/* Title */}
      <h2 className="text-lg font-bold">{title}</h2>
      <div className='flex flex-col'>
        <div className="">
          <span className="text-gray-600">Selected Size: </span>
          <span className="text-blue-500 font-semibold">{selectedSize || 'None'}</span>
        </div>
        <div className="flex gap-2 flex-wrap mt-4">
          {dataText.map((item, index) => (
            <button
              key={index}
              onClick={() => handleSelectSize(item.size)}
              className={`px-4 py-2 border rounded cursor-pointer 
              ${selectedSize === item.size ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-gray-600 border-gray-300'}`}
            >
              {item.size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SizeProduct;
