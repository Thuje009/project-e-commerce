// app/api/products/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Product from '@/models/Product';
import { Types } from 'mongoose';

// ดึงสินค้าตาม ID (GET)
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    // ตรวจสอบ ID ว่าถูกต้อง
    if (!Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { message: 'รหัสสินค้าไม่ถูกต้อง' },
        { status: 400 }
      );
    }

    // ค้นหาสินค้าตาม ID
    const product = await Product.findById(params.id);

    if (!product) {
      return NextResponse.json(
        { message: 'ไม่พบสินค้า' },
        { status: 404 }
      );
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'เกิดข้อผิดพลาดในการค้นหาสินค้า', error },
      { status: 500 }
    );
  }
}

// อัปเดตสินค้า (PUT)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    // ตรวจสอบ ID ว่าถูกต้อง
    if (!Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { message: 'รหัสสินค้าไม่ถูกต้อง' },
        { status: 400 }
      );
    }

    // รับข้อมูลจาก request body
    const body = await request.json();

    // อัปเดตสินค้า
    const updatedProduct = await Product.findByIdAndUpdate(
      params.id,
      body,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return NextResponse.json(
        { message: 'ไม่พบสินค้าที่ต้องการอัปเดต' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'เกิดข้อผิดพลาดในการอัปเดตสินค้า', error },
      { status: 400 }
    );
  }
}

// ลบสินค้า (DELETE)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    // ตรวจสอบ ID ว่าถูกต้อง
    if (!Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { message: 'รหัสสินค้าไม่ถูกต้อง' },
        { status: 400 }
      );
    }

    // ลบสินค้า
    const deletedProduct = await Product.findByIdAndDelete(params.id);

    if (!deletedProduct) {
      return NextResponse.json(
        { message: 'ไม่พบสินค้าที่ต้องการลบ' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'ลบสินค้าสำเร็จ' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'เกิดข้อผิดพลาดในการลบสินค้า', error },
      { status: 500 }
    );
  }
}