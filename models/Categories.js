const mongoose = require("mongoose");

const CategoriesSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true, // รูปภาพของหมวดหมู่เป็นสิ่งจำเป็น
  },
  name: {
    type: String,
    required: true, // ชื่อหมวดหมู่เป็นสิ่งจำเป็น
    unique: true, // ป้องกันการซ้ำของชื่อหมวดหมู่
    trim: true, // ตัดช่องว่างด้านหน้าและด้านหลัง
  },
  description: {
    type: String,
    default: "", 
    trim: true,
  },
}, { timestamps: true }); 

// เพิ่ม Index เพื่อให้ค้นหาหมวดหมู่ได้เร็วขึ้น
CategoriesSchema.index({ name: 1 });

const Category = mongoose.models.Categories || mongoose.model("Categories", CategoriesSchema);

module.exports = Category;
