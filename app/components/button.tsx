import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const baseStyle = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center cursor-pointer";
  
  const variants = {
    primary: "bg-[#F27200] text-white hover:bg-[#FF881A] shadow-md",
    secondary: "bg-[#8A1C21] text-white hover:bg-[#A32227] shadow-md",
    outline: "border-2 border-[#F27200] text-[#F27200] hover:bg-[#F27200] hover:text-white"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
