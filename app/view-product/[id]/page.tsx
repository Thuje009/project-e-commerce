import React from 'react';
import { TextTitle, ShopSection, ShopSame, RattingSection, MarkdownProduct, ViewProductSection } from '@/components/page/ProductDetail';
import { TColorProduct, TSizeProduct, TTitleProduct } from '@/util/type';
import { ProductForYou } from '@/components/page/Home';

type Props = {
  params: {
    id: string;
  };
}

const ViewProduct: React.FC<Props> = ({ params }) => {
  const { id } = params;

  return (
    <div className="flex flex-col py-8 sm:container gap-4">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 p-4 shadow-sm border">
        <ViewProductSection ImageProduct={mockImageProduct} />
        <TextTitle
          titleProduct={MockTitle}
          colorProduct={MockcolorProduct}
          sizeProduct={MocksizeProduct}
        />
      </div>
      <ShopSection imgShop={dataShop?.imgShop} nameShop={dataShop?.nameShop} />
      <MarkdownProduct content={MockMuckDown} />
      <div className='grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4'>
        <RattingSection dataRatindProduct={MockRatingPro} />
        <ShopSame dataProduct={mockProductData} />
      </div>
      <ProductForYou dataProduct={mockProductData} />
    </div>
  );
};

export default ViewProduct;


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


const MockRatingPro = [
  {
    userName: "grizzlybear_1",
    imgUser: "https://via.placeholder.com/150",
    rating: 4,
    date: "2023-04-02 08:31",
    nameProduct: "ปากกิลูกลื่น",
    comment: "สินค้าดี ส่งมาถูกหวัน ไว้จะมาซื้อใหม่ครับ",
    imgComment: "https://via.placeholder.com/150"
  },
  {
    userName: "user2",
    imgUser: "https://via.placeholder.com/150",
    rating: 5,
    date: "2023-04-03 09:15",
    nameProduct: "สมาร์ทโฟนรุ่นใหม่",
    comment: "ผลิตภัณฑ์ดีเยี่ยมมาก คุ้มค่า",
    imgComment: "https://via.placeholder.com/150"
  },
  {
    userName: "grizzlybear_1",
    imgUser: "https://via.placeholder.com/150",
    rating: 2,
    date: "2023-04-02 08:31",
    nameProduct: "ปากกิลูกลื่น",
    comment: "สินค้าดี ส่งมาถูกหวัน ไว้จะมาซื้อใหม่ครับ",
    imgComment: "https://via.placeholder.com/150"
  },
  {
    userName: "grizzlybear_1",
    imgUser: "https://via.placeholder.com/150",
    rating: 1,
    date: "2023-04-02 08:31",
    nameProduct: "ปากกิลูกลื่น",
    comment: "สินค้าดี ส่งมาถูกหวัน ไว้จะมาซื้อใหม่ครับ",
    imgComment: "https://via.placeholder.com/150"
  },
  {
    userName: "grizzlybear_1",
    imgUser: "https://via.placeholder.com/150",
    rating: 3,
    date: "2023-04-02 08:31",
    nameProduct: "ปากกิลูกลื่น",
    comment: "สินค้าดี ส่งมาถูกหวัน ไว้จะมาซื้อใหม่ครับ",
    imgComment: "https://via.placeholder.com/150"
  },
  {
    userName: "grizzlybear_5",
    imgUser: "https://via.placeholder.com/150",
    rating: 5,
    date: "2023-04-02 08:31",
    nameProduct: "ปากกิลูกลื่น",
    comment: "สินค้าดี ส่งมาถูกหวัน ไว้จะมาซื้อใหม่ครับ",
    imgComment: "https://via.placeholder.com/150"
  },
  {
    userName: "user6",
    imgUser: "https://via.placeholder.com/150",
    rating: 5,
    date: "2023-04-03 09:15",
    nameProduct: "สมาร์ทโฟนรุ่นใหม่",
    comment: "ผลิตภัณฑ์ดีเยี่ยมมาก คุ้มค่า",
    imgComment: "https://via.placeholder.com/150"
  },
  {
    userName: "grizzlybear_7",
    imgUser: "https://via.placeholder.com/150",
    rating: 2,
    date: "2023-04-02 08:31",
    nameProduct: "ปากกิลูกลื่น",
    comment: "สินค้าดี ส่งมาถูกหวัน ไว้จะมาซื้อใหม่ครับ",
    imgComment: "https://via.placeholder.com/150"
  },
  {
    userName: "grizzlybear_8",
    imgUser: "https://via.placeholder.com/150",
    rating: 1,
    date: "2023-04-02 08:31",
    nameProduct: "ปากกิลูกลื่น",
    comment: "สินค้าดี ส่งมาถูกหวัน ไว้จะมาซื้อใหม่ครับ",
    imgComment: "https://via.placeholder.com/150"
  },
  {
    userName: "grizzlybear_9",
    imgUser: "https://via.placeholder.com/150",
    rating: 3,
    date: "2023-04-02 08:31",
    nameProduct: "ปากกิลูกลื่น",
    comment: "สินค้าดี ส่งมาถูกหวัน ไว้จะมาซื้อใหม่ครับ",
    imgComment: "https://via.placeholder.com/150"
  },
];


const MockMuckDown = `

## คลัง **6439**

## สินค้า **Eroro(เอโรโร่)**

## ประเทศต้นกำเนิดสินค้า **อื่นๆ**

## วัสดุ **หนัง**

## เพศ **ชาย**

## ระยะเวลาการรับประกัน **อื่นๆ**

## ส่งจาก **จังหวัดกรุงเทพมหานคร**

**รายละเอียดสินค้า**

- ☑ เข็มขัดหนังพียู (ระบบหัวล็อคอัตโนมัติ)
- ☑ ขนาด(สายเข็มขัด) 110 cm-120 cm.
- ☑ สไตล์เรียบหรู ดูสมาร์ท ปรับบุคลิกภาพให้ดูดี
- ☑ สายสีเดียวกันหมดนะคะ แตกต่างกันแค่หัวเข็มขัดค่ะ
- ☑ กว้าง 3.45 เซนติเมตร
- ☑ มอก. 2346-2550


`
const dataShop = {
  imgShop: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaaHJGH6LgsB73WPtJ_VlpQF8rYMaVZJl1KQ&s',
  nameShop: 'มาดูของ'
}
const mockImageProduct = [
  'https://via.placeholder.com/150/FF0000/FFFFFF?text=Image1',
  'https://via.placeholder.com/150/00FF00/FFFFFF?text=Image2',
  'https://via.placeholder.com/150/0000FF/FFFFFF?text=Image3',
  'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Image4',
  'https://via.placeholder.com/150/FF0000/FFFFFF?text=Image5',
  'https://via.placeholder.com/150/00FF00/FFFFFF?text=Image6',
  'https://via.placeholder.com/150/0000FF/FFFFFF?text=Image7',
  'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Image8',
];
const MockcolorProduct: TColorProduct = {
  title: 'color',
  colorProduct: [
    {
      name: 'สีเเดง',
      image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Image1'
    },
    {
      name: 'สีเขียว',
      image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Image2'
    },
    {
      name: 'สีน้ำเงิน',
      image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Image3'
    },
    {
      name: 'สีดำ',
      image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Image4'
    },
  ]
}
const MocksizeProduct: TSizeProduct = {
  title: 'size',
  sizeProduct: [
    {
      name: '',
      size: 'S'
    },
    {
      name: '',
      size: 'm'
    },
    {
      name: '',
      size: 'l'
    },
    {
      name: '',
      size: 'xl'
    },
  ]
}
const MockTitle: TTitleProduct = {
  nameProduc: 'เสื้อยืดผู้หญิง คอกลมแขนสั้น สีทึบ แฟชั่นเสื้อยืดผญสวยๆคอกลมสไตล์อเมริกันเสื้อยืดวินเทจ ผู้หญิง สีขาวเสื้อยืดแฟชั่น Clothing Lady Women Tshirt',
  price: 300,
  rating: 4,
}


