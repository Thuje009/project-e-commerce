const mongoose = require("mongoose");

// สร้าง Schema สำหรับ Shop
const shopSchema = new mongoose.Schema({
  imgShop: {
    type: String,
    required: true, // รูปของร้านค้า
  },
  nameShop: {
    type: String,
    required: true, // ชื่อร้านค้า
  },
  description: {
    type: String,
    required: false, // คำอธิบายร้าน (ไม่จำเป็น)
  },
  location: {
    type: String,
    required: false, // ที่ตั้งร้าน (ไม่จำเป็น)
  },
  createdAt: {
    type: Date,
    default: Date.now, // วันที่สร้างร้าน
  },
  updatedAt: {
    type: Date,
    default: Date.now, // วันที่อัปเดตร้านล่าสุด
  },
});

// สร้าง Model จาก Schema
const Shop = mongoose.models.Shop || mongoose.model("Shop", shopSchema);

module.exports = Shop;
