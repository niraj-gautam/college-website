import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow ${className}`}>
      {children}
    </div>
  );
};

export default Card;
