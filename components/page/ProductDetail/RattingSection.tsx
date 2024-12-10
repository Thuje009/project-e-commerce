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
    imgComment: string;
  }[];
};

const RattingSection: React.FC<Props> = ({ dataRatindProduct }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [mounted, setMounted] = useState(false);

  // ใช้ useEffect เพื่อโหลดหน้าจาก localStorage หลังจาก mount
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

  // ฟังก์ชันเปลี่ยนหน้า
  const paginate = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // ถ้ายังไม่ mount ให้ return null เพื่อหลีกเลี่ยง hydration error
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

          {review.imgComment && (
            <div className="mt-2">
              <img
                src={review.imgComment}
                alt="Comment Image"
                className="w-24 h-24 object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      ))}

      {/* ส่วนของ Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default RattingSection;
