'use client'
import React from 'react';

interface InputBasicProps {
  icon?: React.ReactNode;
  name?: string;
  type?: string;
  full?: boolean;
  placeholder?: string
}

const InputBasic: React.FC<InputBasicProps> = ({ icon, name, type = 'text', full = false, placeholder = 'Enter Text' }) => {
  return (
    <div className={`relative ${full ? 'w-full' : 'w-auto'}`}>
      {icon && <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">{icon}</span>}
      <input
        className="py-2 px-4 border rounded-lg w-full outline-none"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputBasic;
