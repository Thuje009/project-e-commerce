'use client'
import React, { useState } from 'react';

type Props = {
  imageProduct: string[];
  oClick?: () => void;
};

const ImageDetail: React.FC<Props> = ({ imageProduct, oClick }) => {
  const [selectedImage, setSelectedImage] = useState<string>(imageProduct[0]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="flex flex-col">

      <div className="mb-4">
        <img src={selectedImage} alt="Selected" className="w-full h-auto" />
      </div>


      <div className="flex space-x-2">
        {imageProduct.map((item, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(item)}
            className="cursor-pointer"
          >
            <img src={item} alt={`Thumbnail ${index}`} className="w-20 h-20 object-cover border rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageDetail;
