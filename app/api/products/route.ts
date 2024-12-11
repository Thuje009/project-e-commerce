// app/api/products/route.ts
import dbConnect from '@/lib/dbConnect';
import Product from '@/models/Product';
import { NextRequest, NextResponse } from 'next/server';

// ดึงข้อมูลทั้งหมด (GET)
export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    // ดึงพารามิเตอร์สำหรับ pagination
    const searchParams = request.nextUrl.searchParams;
    const page = Number(searchParams.get('page') || 1);
    const limit = Number(searchParams.get('limit') || 10);
    const skip = (page - 1) * limit;

    // ค้นหาข้อมูล
    const products = await Product.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 }); // เรียงจากใหม่ไปเก่า

    // นับจำนวนสินค้าทั้งหมด
    const total = await Product.countDocuments();

    return NextResponse.json({
      products,
      totalPages: Math.ceil(total / limit),
      currentPage: page
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'เกิดข้อผิดพลาดในการดึงข้อมูล', error },
      { status: 500 }
    );
  }
}

// เพิ่มสินค้าใหม่ (POST)
export async function POST(request: NextRequest) {
  try {
    await dbConnect(); // เชื่อมต่อกับฐานข้อมูล

    // รับข้อมูลจาก request body
    const body = await request.json();
    console.log(body.image);

const images = Array.isArray(body.image) ? body.image.filter((img: string) => img.trim() !== "") : [];


    // สร้างสินค้าใหม่
    const product = new Product({
      productName: body.productName,
      image: images,
      price: body.price,
      rating: body.rating,
      category: body.category,
      stock: body.stock,
      storeId: body.storeId,
      colorProduct: body.colorProduct,
      sizeProduct: body.sizeProduct
    });

    // บันทึกข้อมูลสินค้าใหม่
    const newProduct = await product.save();

    // ส่งข้อมูลสินค้าที่สร้างแล้วกลับ
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'เกิดข้อผิดพลาดในการสร้างสินค้า', error },
      { status: 400 }
    );
  }
}