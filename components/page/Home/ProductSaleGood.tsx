'use client'
import React from 'react'
import CardSale from '@/components/shared/CardSale'
import Title from '@/components/shared/Title'
import { ChevronRight } from 'lucide-react'

type Props = {
  dataProduct: {
    image: string;
    ProductName: string;
    price: string;
    rating?: number;
  }[]
  onClick?: () => void
}

const ProductSaleGood: React.FC<Props> = ({ dataProduct, onClick }) => {
  return (
    <div className='flex flex-col gap-5'>
      <div className="flex justify-between items-center">
        <Title title='สินค้าขายดี / สินค้าแนะนำ' />
        <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
          <span>ดูเพิ่มเติม</span>
          <ChevronRight size={16} />
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {dataProduct.slice(0, 5).map((item, index) => (
          <CardSale
            ProductName={item?.ProductName}
            image={item?.image}
            price={item?.price}
            rating={item?.rating}
            key={index}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductSaleGood