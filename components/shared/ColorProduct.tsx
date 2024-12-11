'use client'
import React, { useEffect, useState } from 'react'
import { useAtom } from 'jotai';
import { selectedImageAtom } from "@/components/shared/ImageDetail";


type Props = {
  title: string
  dataColor: {
    name: string
    image: string
  }[]
}

const ColorProduct: React.FC<Props> = ({ dataColor, title }) => {
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [selectedImage, setSelectedImage] = useAtom(selectedImageAtom);

  // useEffect(() => {
  //   if (dataColor.length > 0) {
  //     setSelectedColor(dataColor[0].name)
  //     setSelectedImage(dataColor[0].image);
  //   }
  // }, [dataColor, setSelectedImage])

  const handleSelectColor = (name: string, image: string) => {
    setSelectedColor(name)
    setSelectedImage(image);
  }

  return (
    <div>
      <div className="flex gap-4">
        <span className="font-bold">{title}</span>
        <div className='flex flex-col'>
          {dataColor?.length && (
            <div className="flex  gap-2 ">
              <span className="text-gray-500">Selected: </span>
              <span className="font-semibold text-blue-500">{selectedColor || 'None'}</span>
            </div>
          )}
          <div className={`flex flex-wrap gap-4 mt-4  ${dataColor.length > 36 ? 'h-40' : 'h-fit'} overflow-hidden overflow-y-auto`}>
            {dataColor.map((item, index) => (
              <div
                key={index}
                className={`border h-fit rounded cursor-pointer ${selectedColor === item.name ? 'border-blue-500' : 'border-gray-300'
                  }`}
                onClick={() => handleSelectColor(item.name, item.image)}
              >
                <img src={item.image} alt={item.name} className="w-9 h-9 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorProduct
