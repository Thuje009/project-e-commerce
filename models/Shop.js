const mongoose = require("mongoose");

// สร้าง Schema สำหรับ Shop
const shopSchema = new mongoose.Schema({
  imgShop: {
    type: String,
    required: true, 
  },
  nameShop: {
    type: String,
    required: true, 
  },
  description: {
    type: String,
    required: false, 
  },
  location: {
    type: String,
    required: false, 
  },
  createdAt: {
    type: Date,
    default: Date.now, 
  },
  updatedAt: {
    type: Date,
    default: Date.now, 
  },
});

// สร้าง Model จาก Schema
const Shop = mongoose.models.Shop || mongoose.model("Shop", shopSchema);

module.exports = Shop;
