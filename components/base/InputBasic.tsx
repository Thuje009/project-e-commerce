"use client"
import React, { forwardRef } from 'react';

interface InputBasicProps extends React.InputHTMLAttributes<HTMLInputElement> {
  full?: boolean;
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
