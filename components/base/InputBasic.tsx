"use client"
import React, { forwardRef } from 'react';
import { FieldValues, UseFormRegisterReturn } from 'react-hook-form';

interface InputBasicProps extends React.InputHTMLAttributes<HTMLInputElement> {
  full?: boolean;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  error?: string;
}

const InputBasic = forwardRef<HTMLInputElement, InputBasicProps>(
  ({ full, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`${
          full ? 'w-full' : ''
        } px-4 py-2 border rounded-lg focus:outline-none`}
        {...props}
      />
    );
  }
);

InputBasic.displayName = 'InputBasic';

export default InputBasic;
