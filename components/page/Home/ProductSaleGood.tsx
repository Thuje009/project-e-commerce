// components/ProductSaleGood.tsx
'use client'
import React, { useEffect, useState } from 'react'
import CardSale from '@/components/shared/CardSale'
import Title from '@/components/shared/Title'
import { ChevronRight } from 'lucide-react'
import { IProduct } from '@/util/type'
import { useRouter } from 'next/navigation'

type Props = {
  initialProducts: IProduct[] | null
}

const ProductSaleGood: React.FC<Props> = ({ initialProducts }) => {

  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter()
  useEffect(() => {

    if (initialProducts) {
      setProducts(initialProducts);
      setIsLoading(false);
    }
  }, [initialProducts]);


  const handleNext = (id: any) => {
    router.push(`/view-product/${id}`)
  }

  if (isLoading) {
    return (
      <div className='flex flex-col gap-5'>
        <div className="flex justify-between items-center">
          <Title title='สินค้าขายดี / สินค้าแนะนำ' />
        </div>
        <div className="text-center text-gray-500">
          กำลังโหลดสินค้า...
        </div>
      </div>
    );
  }


  if (!products || products.length === 0) {
    return (
      <div className='flex flex-col gap-5'>
        <div className="flex justify-between items-center">
          <Title title='สินค้าขายดี / สินค้าแนะนำ' />
        </div>
        <div className="text-center text-gray-500">
          ไม่มีสินค้าในขณะนี้
        </div>
      </div>
    );
  }

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
        {products.splice(0, 5).map((item, index) => (
          <CardSale
            ProductName={item?.ProductName || 'ไม่ระบุชื่อสินค้า'}
            image={item?.image ? [item.image[0]] : []}
            price={item?.price || '0'}
            rating={item?.rating || 0}
            key={item?._id || index}
            onClick={() => handleNext(item?._id)}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductSaleGood