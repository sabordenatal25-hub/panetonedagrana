import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = "w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xl font-bold rounded-full transition-transform hover:scale-105 focus:outline-none focus:ring-4 shadow-lg active:scale-95";
  
  const variants = {
    primary: "bg-christmas-green text-white hover:bg-green-800 focus:ring-green-300 border-b-4 border-green-900",
    secondary: "bg-christmas-red text-white hover:bg-red-900 focus:ring-red-300 border-b-4 border-red-900",
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="ml-2 w-6 h-6" />
    </button>
  );
};