import React from 'react';
import ViewProductSection from '@/components/page/ProductDetail/ViewProductSection';

type Props = {
  params: {
    id: string;
  };
}

const ViweProduct: React.FC<Props> = ({ params }) => {
  const { id } = params;
  return (
    <section>
      <div>
        <ViewProductSection ImageProduct={mockImageProduct} />
      </div>
    </section>
  );
};

export default ViweProduct;

const mockImageProduct = [
  'https://via.placeholder.com/150/FF0000/FFFFFF?text=Image1',
  'https://via.placeholder.com/150/00FF00/FFFFFF?text=Image2',
  'https://via.placeholder.com/150/0000FF/FFFFFF?text=Image3',
  'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Image4',
];
