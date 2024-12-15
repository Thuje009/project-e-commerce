'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  image: string;
  catagoryName: string;
  categoryId: string
};

const Category: React.FC<Props> = ({ catagoryName, image, categoryId }) => {

  const router = useRouter()

  const handleClick = (categoryId: any) => {
    router.push(`/${categoryId}`)
  }

  return (
    <div className="flex flex-col items-center space-y-1 bg-white p-2 rounded-lg shadow-xs shadow-sm hover:shadow-md"
      onClick={() => handleClick(categoryId)}
    >
      <img src={image} alt={catagoryName} className="w-14 h-14 object-cover rounded-md" />
      <h1 className="text-xs font-medium text-gray-700">{catagoryName}</h1>
    </div>
  );
};

export default Category;
