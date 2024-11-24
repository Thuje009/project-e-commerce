"use client";

import React from "react";
import { RadioGroup, Radio, Input } from "@nextui-org/react";

function UserProfile() {
  return (
    <div className="bg-cardBackground border-2">
      {/* Head */}
      <div className="border-b-4">
        <h2>ข้อมูลของฉัน</h2>
        <p>จัดกาารข้อมูลส่วนตัวของคุณ</p>
      </div>
      {/* Form */}
      <div>
        <div>
          <div className="flex">
            <span className="mr-4">ชื่อผู้ใช้</span>
            <div>
              <Input label="ชื่อผู้ใช้" type="text" placeholder="ชื่อผู้ใช้" />
            </div>
          </div>
          <div className="flex">
            <span className="mr-4 ">
              <p>ชื่อ</p>
            </span>
            <div>
              <Input label="ชื่อ" type="text" placeholder="ชื่อ" />
            </div>
          </div>
          <div>
            <span>อีเมล</span>
            <div>
              <p>User@example.com</p>
            </div>
          </div>
          <div>
            <span>หมายเลขโทรศัพท์</span>
            <div>
              <p>0123456</p>
            </div>
          </div>
          <div>
            <span>เพศ</span>
            <div>
              <RadioGroup orientation="horizontal">
                <Radio value="ชาย">ชาย</Radio>
                <Radio value="หญิง">หญิง</Radio>
              </RadioGroup>
            </div>
          </div>
        </div>
        {/* Profile Image */}
        <div></div>
      </div>
    </div>
  );
}

export default UserProfile;
