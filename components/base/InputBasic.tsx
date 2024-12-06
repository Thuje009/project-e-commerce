"use client";
import React, { forwardRef } from "react";
import { FieldValues, UseFormRegisterReturn } from "react-hook-form";

interface InputBasicProps extends React.InputHTMLAttributes<HTMLInputElement> {
  full?: boolean;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  error?: string; // รับข้อความ error
}

const InputBasic = forwardRef<HTMLInputElement, InputBasicProps>(
  ({ full, error, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <input
          ref={ref}
          className={`${full ? "w-full" : ""} px-4 py-2 border rounded-lg focus:outline-none ${error ? "border-red-500" : "border-gray-300"
            }`}
          {...props} // ใช้ props ตามปกติ
        />
        {/* แสดงข้อความ error ใต้ input */}
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

InputBasic.displayName = "InputBasic";

export default InputBasic;
