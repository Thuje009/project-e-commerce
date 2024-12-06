'use client'
import React from 'react';
import { FieldValues, UseFormRegisterReturn } from 'react-hook-form';

interface InputBasicProps {
  icon?: React.ReactNode;
  name?: string;
  type?: string;
  full?: boolean;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  error?: string;
}

const InputBasic: React.FC<InputBasicProps> = ({
  icon,
  name,
  type = 'text',
  full = false,
  placeholder = 'Enter Text',
  register,
  error
}) => {
  return (
    <div className={`relative ${full ? 'w-full' : 'w-auto'}`}>
      {icon && <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">{icon}</span>}
      <input
        className={`py-2 px-4 border rounded-lg w-full outline-none ${error ? 'border-red-500' : 'border-gray-300'}`}
        type={type}
        placeholder={placeholder}
        {...register}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputBasic;
