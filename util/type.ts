export interface TUser {
  id: string;
  firstName: string;
  userName: string;
  lastName: string;
  email: string;
  profilePicture: string;
  role: string;
  createdAt: string; 
  updatedAt: string; 
  phoneNumber:string;  
}

export type TColorProduct = {
  title: string
  colorProduct: {
    name: string
    image: string
  }[] 
}

export type TSizeProduct = {
  title: string
  sizeProduct: {
    name?: string
    size: string
  }[]
}

export type TTitleProduct = { 
  nameProduc: string
  price: number
  rating: number
  limitPoduct?: number | 0
}
export interface IProduct {
   _id: string;
   productName: string;
   detailProduct: string;
   price: number;
   rating: number;
   stock: number;
   category: string;
   categoryName:string;
   image: string[];
   storeId: {
     [x: string]: string;
     _id: string;
     shopName: string;
     location: string;
     imgShop: string;
     description: string;
   };
   colorProduct?: {
     title: string;
     options: { name: string; image: string }[];
   };
   sizeProduct?: {
     title: string;
     options: { name: string; size: string }[];
   }; 
}

export interface IReview {

   _id: string;
   productId: string;
   userId?: {
     _id: string;
     userName: string;
     email: string;
     profilePicture: string;
   } | null;
   rating: number;
   comment: string;
   date:string
  nameProduct?: string;
   createdAt: Date; 
   imgComment?: string[];
}

export interface IShop {
   _id: string;
   nameShop: string;
   location: string;
   description: string;
   imgShop: string;
}

export interface ICategory {
   [x: string]: any;
   catagoryName:string
   image:string
   categoryId:string
}
