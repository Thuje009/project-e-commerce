import dbConnect from "@/lib/dbConnect";
import Categories from "@/models/Categories";
import { Types } from "mongoose";

interface Category {
  _id: Types.ObjectId | string;
  [key: string]: any;
}

export async function getCategory() {
  try {
    await dbConnect();

    const category = await Categories.find().lean() as Category[];

    if (!category || category.length === 0) {
      return null; 
    }

    const formattedCategory = category.map((item) => ({
      ...item,
      _id: item._id instanceof Types.ObjectId 
        ? item._id.toString() 
        : String(item._id)
    }));

    return formattedCategory;
  } catch (error: any) {
    console.error("Error fetching categories:", error);
    return null; 
  }
}
