"use client";

import React from "react";
import { RadioGroup, Radio } from "@nextui-org/react";

function UserProfile() {
  return (
    <>
      <div className="border-b-4">
        <h2>ข้อมูลของฉัน</h2>
        <p>จัดกาารข้อมูลส่วนตัวของคุณ</p>
      </div>
      <div>
        <span>ชื่อผู้ใช้</span>
        <div>
          <input type="text" placeholder="ชื่อผู้ใช้" />
        </div>
      </div>
      <div>
        <span>ชื่อ</span>
        <div>
          <input type="text" placeholder="ชื่อผู้ใช้" />
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
          <RadioGroup
            label="Select your favorite city"
            orientation="horizontal"
          >
            <Radio value="buenos-aires">Buenos Aires</Radio>
            <Radio value="sydney">Sydney</Radio>
            <Radio value="san-francisco">San Francisco</Radio>
            <Radio value="london">London</Radio>
            <Radio value="tokyo">Tokyo</Radio>
          </RadioGroup>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
