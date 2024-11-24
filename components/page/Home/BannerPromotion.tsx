'use client'
import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Props = {
  bannerSlides: string[]
}

const BannerPromotion: React.FC<Props> = ({ bannerSlides }) => {
  // สร้างอาร์เรย์ที่มี slides ซ้ำกัน 3 ชุด เพื่อให้วนต่อเนื่อง
  const extendedSlides = [...bannerSlides, ...bannerSlides, ...bannerSlides]
  const [currentIndex, setCurrentIndex] = useState(bannerSlides.length) // เริ่มต้นที่ชุดกลาง

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const next = prev + 1
        // ถ้าถึงจุดสิ้นสุดของชุดที่ 2 ให้กระโดดกลับไปเริ่มต้นชุดที่ 2
        if (next >= bannerSlides.length * 2) {
          return bannerSlides.length
        }
        return next
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [bannerSlides.length])

  useEffect(() => {
    if (currentIndex < bannerSlides.length) {
      setTimeout(() => {
        setCurrentIndex(prev => prev + bannerSlides.length)
      }, 0)
    } else if (currentIndex >= bannerSlides.length * 2) {
      setTimeout(() => {
        setCurrentIndex(prev => prev - bannerSlides.length)
      }, 0)
    }
  }, [currentIndex, bannerSlides.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index + bannerSlides.length) // ไปที่ชุดกลางเสมอ
  }

  const goToPrevious = () => {
    setCurrentIndex(prev => prev - 1)
  }

  const goToNext = () => {
    setCurrentIndex(prev => prev + 1)
  }

  const actualIndex = currentIndex % bannerSlides.length

  return (
    <div className="relative h-[300px] overflow-hidden group lg:">
      {/* Slides Container */}
      <div
        className="flex w-full h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {extendedSlides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 ">
            <img
              src={slide}
              alt={`Slide ${(index % bannerSlides.length) + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${actualIndex === index ? 'bg-buttonPrimaryHover' : 'bg-white/50'
              }`}
          />
        ))}
      </div>
    </div>
  )
}

export default BannerPromotion