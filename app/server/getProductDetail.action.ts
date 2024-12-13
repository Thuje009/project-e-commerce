import dbConnect from "@/lib/dbConnect";
import Product from "@/models/Product";
import Shop from "@/models/Shop";
import Review from "@/models/Reviews";
import mongoose from "mongoose";
import { IProduct, IReview, IShop } from "@/util/type";

mongoose.models.Shop || mongoose.model('Shop', Shop.schema);

export async function getProducts () {
  try {

    await dbConnect()

 const product:IProduct[] = await Product.find().lean().select('productName price rating image');
if (!product) return null;

const formattedProduct = product.map(items => ({
    ...items,
    _id: items._id.toString(),
}));

return formattedProduct;

  } catch (error:any) {
     console.error("Error fetching getProducts:", error.message);
     return null;
  }
  
}


export async function getProductData(productId: string): Promise<(IProduct & { reviews: IReview[]; shop: IShop | null }) | null> {
  try {
 
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return null; 
    }

    const objectIdProductId = new mongoose.Types.ObjectId(productId);
    
    await dbConnect();

    const product = await Product.findById(objectIdProductId)
      .populate({
        path: "storeId",
        model: "Shop",
        select: "nameShop location imgShop description",
      })
      .lean<IProduct | null>();
    
    if (!product) {
      return null;
    }
    
    const reviews = await Review.find({ productId: objectIdProductId })
      .populate({
        path: "userId",
        select: "userName email profilePicture",
      })
      .lean<IReview[]>();
    
    const mappedReviews = reviews.map((review) => ({
      ...review,
      _id: review._id.toString(),
      productId: review.productId.toString(),
      userId: review.userId
        ? {
            _id: review.userId._id?.toString() || '',
            email: review.userId.email || '',
            userName: review.userId.userName || '',
            profilePicture: review.userId.profilePicture || '',
          }
        : null,
    }));

    return {
      ...product,
      _id: product._id.toString(),
      reviews: mappedReviews,
      shop: product.storeId
        ? {
            _id: product.storeId._id.toString(),
            nameShop: product.storeId.nameShop,
            location: product.storeId.location,
            imgShop: product.storeId.imgShop,
            description: product.storeId.description,
          }
        : null,
      sizeProduct: product.sizeProduct
        ? {
            title: product.sizeProduct.title || '',
            options: product.sizeProduct.options.map((option: any) => ({
              name: option.name || '',
              size: option.size || '',
              _id: option._id?.toString() || option.id?.toString() || '', 
            })),
          }
        : undefined,
    };
  } catch (error: any) {
    console.error("Error fetching getProductData:", error.message);
    return null;
   } 
}