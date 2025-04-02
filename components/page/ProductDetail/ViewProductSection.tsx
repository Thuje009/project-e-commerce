import React from 'react'
import ImageDetail from '@/components/shared/ImageDetail'

type Props = {
  ImageProduct: string[]
}

const ViewProductSection: React.FC<Props> = ({ ImageProduct }) => {
  return (
    <section>
      <div className=''>
        <ImageDetail imageProduct={ImageProduct} />
      </div>
    </section>
  )
}

export default ViewProductSection