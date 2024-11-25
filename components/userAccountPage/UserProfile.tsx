"use client";

import React from "react";
import { RadioGroup, Radio, Input } from "@nextui-org/react";

function UserProfile() {
  return (
    <div className="bg-cardBackground border-2 p-4">
      {/* Head */}
      <div className="border-b-4 p-4">
        <h2>ข้อมูลของฉัน</h2>
        <p>จัดกาารข้อมูลส่วนตัวของคุณ</p>
      </div>
      {/* Form */}
      <div className="pt-6">
        <div>
          <div className="flex pb-8">
            <span className="mr-4 w-32 flex justify-end">
              <p>ชื่อผู้ใช้</p>
            </span>
            <div>
              <Input label="ชื่อผู้ใช้" type="text"  />
            </div>
          </div>
          <div className="flex pb-8">
            <span className="mr-4 w-32 flex justify-end">
              <p>ชื่อ</p>
            </span>
            <div>
              <Input label="ชื่อ" type="text"  />
            </div>
          </div>
          <div className="flex pb-8">
            <span className="mr-4 w-32 flex justify-end">
              <p>อีเมล</p>
            </span>
            <div>
              <p>User@example.com</p>
            </div>
          </div>
          <div className="flex pb-8">
            <span className="mr-4  flex justify-end whitespace-nowrap">
              <p>หมายเลขโทรศัพท์</p>
            </span>
            <div>
              <p>0123456</p>
            </div>
          </div>
          <div className="flex pb-8">
            <span className="mr-4 w-32 flex justify-end">
              <p>เพศ</p>
            </span>
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
