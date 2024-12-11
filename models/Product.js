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
  rating: {
    type: Number,
    required: true,
    min: 0, // ตั้งค่าต่ำสุด
    max: 5, // ตั้งค่าสูงสุด
  },
  category: {
    type: String,
    required: true, // กำหนดให้ต้องมีข้อมูล
  },
  stock: {
    type: Number,
    required: true,
    min: 0, // ตั้งค่าต่ำสุด
  },
  storeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop", // เชื่อมโยงกับ Store model
    required: true, // กำหนดให้ต้องมีข้อมูล
  },
  colorProduct: {
    title: { type: String },
    options: [  
      {
        name: String,
        image: String,
      }
    ],
    default: [], // ค่าเริ่มต้นเป็น array ว่าง
  },
  sizeProduct: {
    title: { type: String },
    options: [
      {
        name: String,
        size: String,
      }
    ],
    default: [], // ค่าเริ่มต้นเป็น array ว่าง
  },
}, { timestamps: true });

// สร้าง Model ของ Product
const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

module.exports = Product;
