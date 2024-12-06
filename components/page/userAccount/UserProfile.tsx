"use client";

import React from "react";
import { RadioGroup, Radio, Input } from "@nextui-org/react";

function UserProfile() {
  return (
    <div className="bg-card-background border-2 border-border rounded-lg p-4 text-foreground">
      {/* Head */}
      <div className="border-b-4 border-border p-4">
        <h2 className="text-text-primary text-xl font-bold">ข้อมูลของฉัน</h2>
        <p className="text-text-secondary">จัดการข้อมูลส่วนตัวของคุณ</p>
      </div>
      {/* Form */}
      <div className="pt-6">
        <div>
          <div className="flex pb-8 items-center">
            <span className="mr-4 w-32 flex justify-end text-text-secondary">
              <p>ชื่อผู้ใช้</p>
            </span>
            <div>
              <Input
                label="ชื่อผู้ใช้"
                type="text"
                className="text-text-primary bg-background"
              />
            </div>
          </div>
          <div className="flex pb-8 items-center">
            <span className="mr-4 w-32 flex justify-end text-text-secondary">
              <p>ชื่อ</p>
            </span>
            <div>
              <Input
                label="ชื่อ"
                type="text"
                className="text-text-primary bg-background"
              />
            </div>
          </div>
          <div className="flex pb-8 items-center">
            <span className="mr-4 w-32 flex justify-end text-text-secondary">
              <p>อีเมล</p>
            </span>
            <div>
              <p className="text-text-primary">User@example.com</p>
            </div>
          </div>
          <div className="flex pb-8 items-center">
            <span className="mr-4 flex justify-end whitespace-nowrap text-text-secondary">
              <p>หมายเลขโทรศัพท์</p>
            </span>
            <div>
              <p className="text-text-primary">0123456</p>
            </div>
          </div>
          <div className="flex pb-8 items-center">
            <span className="mr-4 w-32 flex justify-end text-text-secondary">
              <p>เพศ</p>
            </span>
            <div>
              <RadioGroup orientation="horizontal" className="text-text-primary">
                <Radio value="ชาย" className="text-text-primary">
                  ชาย
                </Radio>
                <Radio value="หญิง" className="text-text-primary">
                  หญิง
                </Radio>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
