"use client";

import React, { useEffect, useState } from "react";
import { RadioGroup, Radio, Input } from "@nextui-org/react";
import { fetchUser } from '@/hook/fatchUser';
import { TUser } from "@/util/type";

function UserProfile() {
  const [user, setUser] = useState<TUser>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await fetchUser();
        setUser(userData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

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
                label="User name"
                value={user?.userName}
                type="text"
                className="text-text-primary bg-background"
              />
            </div>
          </div>
          <div className="flex pb-8 items-center">
            <span className="mr-4 w-32 flex justify-end text-text-secondary">
              <p>ชื่อ-นามสกุล</p>
            </span>
            <div className="flex gap-4">
              <Input
                label="ชื่อ"
                value={user?.firstName}
                type="text"
                className="text-text-primary bg-background"
              />
              <Input
                label= "นามสกุล"
                value={user?.lastName}
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
              <p className="text-text-primary">{user?.email}</p>
            </div>
          </div>
          <div className="flex pb-8 items-center">
            <span className="mr-4 flex justify-end whitespace-nowrap text-text-secondary">
              <p>หมายเลขโทรศัพท์</p>
            </span>
            <div>
              <p className="text-text-primary">{user?.phoneNumber || 'ไม่ระบุ'}</p>
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
