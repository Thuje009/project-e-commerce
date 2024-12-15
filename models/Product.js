const mongoose = require("mongoose");
const { type } = require("os");

// สร้าง Schema สำหรับ Product
const productSchema = new mongoose.Schema({
  image: [
    {type:String}
  ],
  
  productName: {
    type: String,
    required: true, 
  },
  price: {
    type: Number,
    required: true, 
  },
  detailProduct:{
    type: String,
    require: true
  },
  rating: {
    type: Number,
    required: true,
    min: 0, 
    max: 5, 
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories",
    required: true, 
  },
  stock: {
    type: Number,
    required: true,
    min: 0, 
  },
  storeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop", 
    required: true, 
  },
  colorProduct: {
    title: { type: String },
    options: [  
      {
        name: String,
        image: String,
      }
    ],
    // default: [], 
  },
  sizeProduct: {
    title: { type: String },
    options: [
      {
        name: String,
        size: String,
      }
    ],
    // default: [], 
  },
}, { timestamps: true });

// Virtual field สำหรับ reviews
productSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "productId",
});

// เปิดใช้งาน virtual fields
productSchema.set("toObject", { virtuals: true });
productSchema.set("toJSON", { virtuals: true });

// สร้าง Model ของ Product
const Product = mongoose.models.Product || mongoose.model("Product", productSchema);


module.exports = Product;

