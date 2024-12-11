'use server'
import dbConnect from "@/lib/dbConnect";
import Product from "@/models/Product";
import Shop from '@/models/Shop'
import { Types } from "mongoose";

export interface IProduct {
  _id: string;
  productName: string;
  price: number;
  rating: number;
  stock: number;
  category: string;
  image: string[];
  storeId:string;
  colorProduct?: {
    title: string;
    options: { name: string; image: string }[];
  };
  sizeProduct?: {
    title: string;
    options: { name: string; size: string }[];
  };
}

export async function getProductData(productId: string): Promise<IProduct | null> {
  try {
    await dbConnect();

    const product = await Product.findById(productId).lean<IProduct | null>();

    if (!product) {
      return null;
    }

    return {
      ...product,
      _id: product._id.toString(), 
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export async function getShop(shopId:string) {
  try {
    await dbConnect();

    const shop = await Shop.findById(shopId);
    if (!shop) {
        return null
    }

    return shop
  }catch (error:any) {
      console.error("Error fetching Shop:", error);
    return null;
}
} 
