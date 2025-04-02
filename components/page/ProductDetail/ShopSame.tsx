import Button from '@/components/base/Button'
import CardSale from '@/components/shared/CardSale'
import Title from '@/components/shared/Title'
import React from 'react'


type Props = {
  dataProduct: {
    image: string
    ProductName: string
    price: string
    rating: number
  }[]
  onClick?: () => void
}

const ShopSame: React.FC<Props> = ({ dataProduct, onClick }) => {
  return (
    <div className='flex flex-col gap-4 border p-4 shadow-sm'>
      <Title title={'สินค้าร้านเดียวกัน'} />
      <div className='flex flex-col gap-4 mt-4'>
        {dataProduct.splice(0, 4).map((product, index) => (
          <CardSale
            image={product?.image}
            ProductName={product?.ProductName}
            price={product?.price}
            rating={product?.rating}
            key={index}
          />
        ))}
      </div>

      <div>
        <Button full={true}>
          ดูเพิ่มเติม
        </Button>
      </div>
    </div>
  )
}

export default ShopSame