import React from 'react';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const Link = ({ to, children, className = '' }: LinkProps) => {
  return (
    <a 
      href={to}
      className={`inline-flex items-center px-4 py-2 rounded-md transition-colors ${className}`}
    >
      {children}
    </a>
  );
};
