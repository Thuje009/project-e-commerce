import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  full?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  full = false,
  onClick,
  className = '',
  type
}) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 text-white rounded-lg font-semibold transition-all duration-300
        bg-gradient-to-b from-[var(--button-primary)] to-[var(--button-primary-hover)]
        ${full ? 'w-full' : 'w-auto'} 
        hover:brightness-110 active:scale-95 
        ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
