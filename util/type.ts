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
export interface IProduct extends Document {
  image: string[];
  ProductName: string;
  price: string;
  rating: number;
  category: string;
  stock: number;
  _id?: string; 
}