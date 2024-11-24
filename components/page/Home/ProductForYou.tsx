'use client'
import React, { useState } from 'react'
import CardSale from '@/components/shared/CardSale'
import Title from '@/components/shared/Title'
import { ChevronDown } from 'lucide-react'

type Props = {
  dataProduct: {
    image: string;
    ProductName: string;
    price: string;
    rating?: number;
  }[]
}

const ProductForYou: React.FC<Props> = ({ dataProduct }) => {
  const itemsPerPage = 20;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);

  const showLoadMore = visibleItems < dataProduct.length;

  const handleLoadMore = () => {
    setVisibleItems(prev => Math.min(prev + itemsPerPage, dataProduct.length));
  };

  return (
    <div className='flex flex-col gap-5'>
      <div className="flex justify-between items-center">
        <Title title='สินค้าสำหรับคุณ' />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {dataProduct.slice(0, visibleItems).map((item, index) => (
          <CardSale
            ProductName={item?.ProductName}
            image={item?.image}
            price={item?.price}
            rating={item?.rating}
            key={index}
          />
        ))}
      </div>

      {/* Load More Button */}
      {showLoadMore && (
        <div className="flex justify-center mt-3">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2.5 bg-cardBackground text-textPrimary border-2 border-buttonPrimary rounded-full
             hover:bg-gradient-to-t from-[var(--button-primary)] hover:text-foreground transition-all duration-300
             font-medium text-sm flex items-center gap-2"
          >
            โหลดเพิ่มเติม
            <ChevronDown />
          </button>

        </div>
      )}
    </div>
  )
}

export default ProductForYou