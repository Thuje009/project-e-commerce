import React from 'react';
import Category from '@/components/shared/Category';
import { CategoryItem } from '@/config/gategory';
import Title from '@/components/shared/Title';

const CatagorySection = () => {
  return (
    <section className="p-4 flex flex-col gap-5">
      <Title title='หมวดหมู่' />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-7">
        {CategoryItem.map((item: any, index: number) => (
          <Category catagoryName={item.name} image={item.image} key={index} />
        ))}
      </div>
    </section>
  );
};

export default CatagorySection;
