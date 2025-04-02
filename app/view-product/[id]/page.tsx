import React from 'react';
import { TextTitle, ShopSection, ShopSame, RattingSection, MarkdownProduct, ViewProductSection } from '@/components/page/ProductDetail';
import { ProductForYou } from '@/components/page/Home';
import { getProductData, getProducts } from '@/app/server/getProductDetail.action';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props) {
  try {
    const product = await getProductData(params.id);

    if (!product) {
      return {
        title: 'Product Not Found',
        description: 'The requested product could not be found'
      };
    }

    return {
      title: product.productName,
      description: product.detailProduct.slice(0, 160)
    };
  } catch (error) {
    return {
      title: 'Product Not Found',
      description: 'Error loading product details'
    };
  }
}

export default async function ViewProduct({ params }: Props) {

  const product = await getProductData(params.id);
  const productForyou = await getProducts();
  if (!product || !productForyou) {
    notFound();
  }

  // Pack data titleProduct
  const packdata = {
    nameProduc: product.productName,
    price: product.price,
    rating: product.rating,
    limitPoduct: product.stock
  };

  // Pack data colorProduct
  const packdataColor = {
    title: product.colorProduct?.title || '',
    colorProduct: product.colorProduct?.options || []
  };

  // Pack data sizeProduct
  const packdataSize = {
    title: product.sizeProduct?.title || '',
    sizeProduct: product.sizeProduct?.options || [],
  };

  return (
    <div className="flex flex-col py-8 sm:container gap-4">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 p-4 shadow-sm border">
        <ViewProductSection ImageProduct={product.image} />
        <TextTitle
          titleProduct={packdata}
          colorProduct={packdataColor}
          sizeProduct={packdataSize}
        />
      </div>
      <ShopSection
        imgShop={product.shop?.imgShop || ''}
        nameShop={product.shop?.nameShop || ''}
      />
      <MarkdownProduct content={product.detailProduct} />
      <div className='grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4'>
        <RattingSection dataRatindProduct={product.reviews} />
        <ShopSame dataProduct={mockProductData} />
      </div>
      <ProductForYou dataProduct={productForyou} />
    </div>
  );
}


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





