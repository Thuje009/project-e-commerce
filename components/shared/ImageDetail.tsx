'use client';
import React, { useRef, useCallback, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { atom, useAtom } from 'jotai';

export const selectedImageAtom = atom<string | null>(null);

type Props = {
  imageProduct: string[];
  oClick?: () => void;
};

const ImageDetail: React.FC<Props> = ({ imageProduct, oClick }) => {
  const [selectedImage, setSelectedImage] = useAtom(selectedImageAtom);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const [startIndex, setStartIndex] = useState(0);
  const thumbnailsToShow = 4;

  const mainImageRef = useRef<HTMLDivElement>(null);

  if (!selectedImage) {
    setSelectedImage(imageProduct[0]);
  }

  const handleImageClick = useCallback((image: string) => {
    setSelectedImage(image);
  }, [setSelectedImage]);

  const handleThumbnailPrevious = useCallback(() => {
    setStartIndex(prev => Math.max(0, prev - thumbnailsToShow));
  }, []);

  const handleThumbnailNext = useCallback(() => {
    setStartIndex(prev =>
      Math.min(prev + thumbnailsToShow, imageProduct.length - thumbnailsToShow)
    );
  }, [imageProduct.length]);

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!mainImageRef.current) return;

    const rect = mainImageRef.current.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
    setIsHovering(true);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 relative">
      {/* Main Image Container */}
      <div className="flex flex-col items-center space-y-4 p-4">
        <div
          ref={mainImageRef}
          className="relative w-full flex items-center justify-center border-2 border-gray-200 rounded-lg overflow-hidden cursor-zoom-in"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img
            src={selectedImage!}
            alt="Selected Product"
            className="w-full h-full object-cover"
          />

          {isHovering && (
            <div
              className="absolute border-2 border-blue-500 rounded-full pointer-events-none"
              style={{
                width: '100px',
                height: '100px',
                top: `${mousePosition.y - 50}px`,
                left: `${mousePosition.x - 50}px`,
                background: 'rgba(0,0,0,0.1)',
              }}
            />
          )}
        </div>

        {/* Thumbnail Slider */}
        <div className="flex items-center space-x-4">
          <button
            onClick={handleThumbnailPrevious}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50 w-8 h-8"
            disabled={startIndex === 0}
          >
            <ChevronLeft className="text-gray-600" />
          </button>

          <div className="flex gap-2">
            {imageProduct.slice(startIndex, startIndex + thumbnailsToShow).map((item, index) => (
              <div
                key={startIndex + index}
                onClick={() => handleImageClick(item)}
                className={`
                  cursor-pointer 
                  w-16 h-16 
                  border-2 
                  rounded-lg 
                  overflow-hidden 
                  transition-all 
                  ${selectedImage === item
                    ? 'border-blue-500 scale-105'
                    : 'border-gray-300 hover:border-gray-500'}
                `}
              >
                <img
                  src={item}
                  alt={`Thumbnail ${startIndex + index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <button
            onClick={handleThumbnailNext}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50 w-8 h-8"
            disabled={startIndex + thumbnailsToShow >= imageProduct.length}
          >
            <ChevronRight className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Magnified Image Container */}
      {isHovering && (
        <div className="absolute top-0 left-96 w-[700px] h-[500px] border-2 border-gray-200 rounded-lg overflow-hidden z-40">
          <div
            className="w-full h-full relative"
            style={{
              backgroundImage: `url(${selectedImage})`,
              backgroundSize: '240%',
              backgroundPosition: `${(mousePosition.x / 320) * 100}% ${(mousePosition.y / 320) * 100}%`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageDetail;
