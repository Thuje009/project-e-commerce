'use client'
import React, { useEffect, useState } from 'react';
import Rating from '@/components/shared/Rating';
import Title from '@/components/shared/Title';
import Pagination from '@/components/shared/Pagination';

type Props = {
  dataRatindProduct: {
    userName: string;
    imgUser: string;
    rating: number;
    date: string;
    nameProduct: string;
    comment: string;
    imgComment: string[]; // ปรับให้รองรับ array
  }[];
};

const RattingSection: React.FC<Props> = ({ dataRatindProduct }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      setCurrentPage(parseInt(savedPage, 10));
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('currentPage', currentPage.toString());
    }
  }, [currentPage, mounted]);

  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = dataRatindProduct.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(dataRatindProduct.length / itemsPerPage);

  const paginate = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  if (!mounted) return null;

  return (
    <div className="border p-4 shadow-sm flex flex-col gap-4">
      <Title title="คะแนนของสินค้า" />

      {currentItems.map((review, index) => (
        <div key={index} className="mb-4 border-b-1 pb-4">
          <div className="flex items-center gap-3">
            <img
              src={review.imgUser}
              alt={review.userName}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="font-semibold">{review.userName}</div>
              <div className="text-sm text-gray-500">{review.date}</div>
            </div>
          </div>

          <div className="my-2">
            <span className="font-bold">{review.nameProduct}</span>
          </div>

          <div className="flex items-center">
            <Rating rating={review.rating} />
          </div>

          <div className="mt-2">{review.comment}</div>

          {review.imgComment && review.imgComment.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {review.imgComment.map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={img}
                  alt={`Comment Image ${imgIndex + 1}`}
                  className="w-20 h-20 object-cover rounded-lg"
                />
              ))}
            </div>
          )}
        </div>
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default RattingSection;
