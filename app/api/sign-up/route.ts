import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import User from '@/models/User';
import dbConnect from '@/lib/dbConnect';

export async function POST(req: NextRequest) {
  try {
    const { email, password, firstName, lastName, userName } = await req.json();

    // ตรวจสอบว่าได้รับข้อมูลครบถ้วนหรือไม่
    if (!email || !password || !firstName || !lastName || !userName) {
      return NextResponse.json({ error: "กรุณากรอกข้อมูลให้ครบทุกฟิลด์" }, { status: 400 });
    }

    await dbConnect();

    // ตรวจสอบว่าอีเมลมีผู้ใช้งานแล้วหรือไม่
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "อีเมลนี้มีผู้ใช้งานแล้ว" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      userName, 
    });


    await newUser.save();


    const userData = {
      id: newUser._id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      userName: newUser.userName, 
    };

    return NextResponse.json({ message: "สมัครสมาชิกสำเร็จ", user: userData }, { status: 201 });
    
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการสมัครสมาชิก:", error);
    return NextResponse.json({ error: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์" }, { status: 500 });
  }
}
