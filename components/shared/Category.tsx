import React from 'react';

type Props = {
  image: string;
  catagoryName: string;
};

const Category: React.FC<Props> = ({ catagoryName, image }) => {
  return (
    <div className="flex flex-col items-center space-y-1 bg-white p-2 rounded-lg shadow-xs shadow-sm hover:shadow-md">
      <img src={image} alt={catagoryName} className="w-14 h-14 object-cover rounded-md" />
      <h1 className="text-xs font-medium text-gray-700">{catagoryName}</h1>
    </div>
  );
};

export default Category;
