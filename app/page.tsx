import React from 'react'
import {
  BannerPromotion,
  CatagorySection,
  ProductSaleGood,
  ProductForYou
} from '../components/page/Home'
import { FatchProductServerComponent } from '@/hooks/fatchProduct';



export default async function Home() {

  const { products } = await FatchProductServerComponent();

  console.log("🚀 ~ Home ~ products:", products)
  return (
    <div className='flex flex-col gap-6 sm:container'>
      <div className='lg:px-4'>
        <BannerPromotion bannerSlides={dataBannerMock} />
      </div>
      <CatagorySection />
      <ProductSaleGood initialProducts={products} />
      <ProductForYou dataProduct={mockProductData} />
    </div>
  )
}


const dataBannerMock = [
  'https://www.shutterstock.com/image-vector/brush-sale-banner-promotion-ribbon-260nw-1182942766.jpg',
  'https://adsterra.com/blog/wp-content/uploads/2021/06/how-banners-make-you-money.png',
  'https://adsterra.com/blog/wp-content/uploads/2021/06/how-banners-make-you-money.png',

]


const mockProductData = [
  {
    image: 'https://via.placeholder.com/150',
    ProductName: 'เสื้อเชิ้ตผู้ชายคอปก',
    price: '499 บาท',
    rating: 5
  },
  {
    image: 'https://via.placeholder.com/150',
    ProductName: 'รองเท้าผู้หญิงส้นสูง',
    price: '1,199 บาท',
    rating: 3.5
  },
  {
    image: 'https://via.placeholder.com/150',
    ProductName: 'นาฬิกาข้อมือผู้ชาย',
    price: '2,499 บาท',
    rating: 4
  },
  {
    image: 'https://via.placeholder.com/150',
    ProductName: 'หูฟังไร้สายแบบ In-Ear',
    price: '799 บาท',
    rating: 5
  },
  {
    image: 'https://via.placeholder.com/150',
    ProductName: 'หูฟังไร้สายแบบ In-Ear',
    price: '799 บาท',
    rating: 5
  }, {
    image: 'https://via.placeholder.com/150',
    ProductName: 'หูฟังไร้สายแบบ In-Ear',
    price: '799 บาท',
    rating: 5
  }, {
    image: 'https://via.placeholder.com/150',
    ProductName: 'หูฟังไร้สายแบบ In-Ear',
    price: '799 บาท',
    rating: 5
  }, {
    image: 'https://via.placeholder.com/150',
    ProductName: 'หูฟังไร้สายแบบ In-Ear',
    price: '799 บาท',
    rating: 5
  }, {
    image: 'https://via.placeholder.com/150',
    ProductName: 'หูฟังไร้สายแบบ In-Ear',
    price: '799 บาท',
    rating: 5
  }, {
    image: 'https://via.placeholder.com/150',
    ProductName: 'หูฟังไร้สายแบบ In-Ear',
    price: '799 บาท',
    rating: 5
  }, {
    image: 'https://via.placeholder.com/150',
    ProductName: 'หูฟังไร้สายแบบ In-Ear',
    price: '799 บาท',
    rating: 5
  },
  {
    image: 'https://via.placeholder.com/150',
    ProductName: 'เสื้อเชิ้ตผู้ชายคอปก',
    price: '499 บาท',
    rating: 5
  },
  {
    image: 'https://via.placeholder.com/150',
    ProductName: 'รองเท้าผู้หญิงส้นสูง',
    price: '1,199 บาท',
    rating: 3.5
  },
  {
    image: 'https://via.placeholder.com/150',
    ProductName: 'นาฬิกาข้อมือผู้ชาย',
    price: '2,499 บาท',
    rating: 4
  },
  {
    image: 'https://via.placeholder.com/150',
    ProductName: 'หูฟังไร้สายแบบ In-Ear',
    price: '799 บาท',
    rating: 5
  },
  {
    image: 'https://via.placeholder.com/150',
    ProductName: 'หูฟังไร้สายแบบ In-Ear',
    price: '799 บาท',
    rating: 5
  }, {
    image: 'https://via.placeholder.com/150',
    ProductName: 'หูฟังไร้สายแบบ In-Ear',
    price: '799 บาท',
    rating: 5
  }, {
    image: 'https://via.placeholder.com/150',
    ProductName: 'หูฟังไร้สายแบบ In-Ear',
    price: '799 บาท',
    rating: 5
  }, {
    image: 'https://via.placeholder.com/150',
    ProductName: 'หูฟังไร้สายแบบ In-Ear',
    price: '799 บาท',
    rating: 5
  }, {
    image: 'https://via.placeholder.com/150',
    ProductName: 'หูฟังไร้สายแบบ In-Ear',
    price: '799 บาท',
    rating: 5
  }, {
    image: 'https://via.placeholder.com/150',
    ProductName: 'หูฟังไร้สายแบบ In-Ear',
    price: '799 บาท',
    rating: 5
  }, {
    image: 'https://via.placeholder.com/150',
    ProductName: 'หูฟังไร้สายแบบ In-Ear',
    price: '799 บาท',
    rating: 5
  },
  {
    image: 'https://via.placeholder.com/150',
    ProductName: 'เสื้อเชิ้ตผู้ชายคอปก',
    price: '499 บาท',
    rating: 5
  },
  {
    image: 'https://via.placeholder.com/150',
    ProductName: 'รองเท้าผู้หญิงส้นสูง',
    price: '1,199 บาท',
    rating: 3.5
  },
  {
    image: 'https://via.placeholder.com/150',
    ProductName: 'นาฬิกาข้อมือผู้ชาย',
    price: '2,499 บาท',
    rating: 4
  },
  {
    image: 'https://via.placeholder.com/150',
    ProductName: 'หูฟังไร้สายแบบ In-Ear',
    price: '799 บาท',
    rating: 5
  },
  {
    image: 'https://via.placeholder.com/150',
    ProductName: 'หูฟังไร้สายแบบ In-Ear',
    price: '799 บาท',
    rating: 5
  }, {
    image: 'https://via.placeholder.com/150',
    ProductName: 'หูฟังไร้สายแบบ In-Ear',
    price: '799 บาท',
    rating: 5
  }, {
    image: 'https://via.placeholder.com/150',
    ProductName: 'หูฟังไร้สายแบบ In-Ear',
    price: '799 บาท',
    rating: 5
  }, {
    image: 'https://via.placeholder.com/150',
    ProductName: 'หูฟังไร้สายแบบ In-Ear',
    price: '799 บาท',
    rating: 5
  }, {
    image: 'https://via.placeholder.com/150',
    ProductName: 'หูฟังไร้สายแบบ In-Ear',
    price: '799 บาท',
    rating: 5
  }, {
    image: 'https://via.placeholder.com/150',
    ProductName: 'หูฟังไร้สายแบบ In-Ear',
    price: '799 บาท',
    rating: 5
  }, {
    image: 'https://via.placeholder.com/150',
    ProductName: 'หูฟังไร้สายแบบ In-Ear',
    price: '799 บาท',
    rating: 5
  },

];
