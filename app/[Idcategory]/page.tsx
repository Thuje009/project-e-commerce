import React from 'react';
import CardSale from '@/components/shared/CardSale';
import { IProduct } from '@/util/type';
import { getProductForCategory } from '../server/getProductDetail.action';
import Title from '@/components/shared/Title';
import Link from 'next/link';

const ProductCategory = async ({ params }: { params: { Idcategory: string } }) => {
  try {
    const products: IProduct[] | null = await getProductForCategory(params.Idcategory);

    if (!products || products.length === 0) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <Title title="No Products Found" />
            <p className="mt-4 text-gray-600">
              There are currently no products in this category.
            </p>
            <div className="mt-6">
              <a
                href="/"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Return to Home
              </a>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className='sm:container mx-auto px-4 py-8'>
        <Title title={products[0]?.categoryName || 'Category Products'} />

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6'>
          {products.map((product) => (
            <Link key={product._id} href={`/view-product/${product._id}`}>
              <CardSale
                key={product._id}
                ProductName={product.productName}
                image={product.image}
                price={product.price}
                rating={product.rating}
              />
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <div className="bg-red-100 p-8 rounded-lg shadow-md">
          <Title title="Error" />
          <p className="mt-4 text-red-600">
            An error occurred while fetching products. Please try again later.
          </p>
          <div className="mt-6">
            <a
              href="/"
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductCategory;