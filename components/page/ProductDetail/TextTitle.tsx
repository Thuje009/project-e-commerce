'use client';
import React, { useState } from 'react';
import Rating from '@/components/shared/Rating';
import Button from '@/components/base/Button';
import ColorProduct from '@/components/shared/ColorProduct';
import SizeProduct from '@/components/shared/SizeProduct';
import { TColorProduct, TSizeProduct, TTitleProduct } from '@/util/type';
import { Minus, Plus } from 'lucide-react';

type Props = {
  titleProduct: TTitleProduct;
  colorProduct: TColorProduct;
  sizeProduct: TSizeProduct;
  onClick?: () => void;
};

const TextTitle: React.FC<Props> = ({ titleProduct, onClick, colorProduct, sizeProduct }) => {
  const [isCount, setIsCount] = useState<number>(1);

  const maxLimit = titleProduct?.limitPoduct ?? 10;

  const handleDecrement = () => {
    if (isCount > 1) setIsCount((prev) => prev - 1);
  };

  const handleIncrement = () => {
    if (isCount < maxLimit) setIsCount((prev) => prev + 1);
  };

  return (
    <div className="p-4 space-y-4">
      {/* Product Title */}
      <h2 className="text-lg font-bold">{titleProduct?.nameProduc}</h2>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <Rating rating={titleProduct?.rating} />
      </div>

      {/* Price */}
      <p className="text-xl text-red-500">฿ {titleProduct?.price}</p>

      {/* Quantity Selector */}
      <div className="flex items-center gap-2">
        <span className="font-medium">Quantity:</span>
        <button
          onClick={handleDecrement}
          className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
          disabled={isCount <= 1}
        >
          <Minus />
        </button>
        <span className="px-4">{isCount}</span>
        <button
          onClick={handleIncrement}
          className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
          disabled={isCount >= maxLimit}
        >
          <Plus />
        </button>
      </div>

      {/* Color Selection */}
      {colorProduct?.title && (
        <div>
          <ColorProduct dataColor={colorProduct?.colorProduct} title={colorProduct?.title} />
        </div>
      )}
      {/* Size Selection */}
      <div>
        <SizeProduct title={sizeProduct?.title} dataText={sizeProduct?.sizeProduct} />
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <Button
          onClick={() => console.log('ซื้อเลย')}
          className="bg-black text-white px-4 py-2 rounded"
        >
          ซื้อเลย
        </Button>
        <Button
          onClick={() => console.log('เพิ่มในตะกร้า')}>
          เพิ่มในตะกร้า
        </Button>
      </div>
    </div>
  );
};

export default TextTitle;
