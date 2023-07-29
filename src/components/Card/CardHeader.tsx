import { HTMLAttributes, ReactNode } from 'react';

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function CardHeader({ children, ...rest }: CardHeaderProps) {
  return (
    <div className='mb-5 flex justify-between' {...rest}>
      {children}
    </div>
  );
}
