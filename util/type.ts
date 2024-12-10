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


