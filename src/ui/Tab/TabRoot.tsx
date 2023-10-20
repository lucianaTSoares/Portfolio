import React from 'react';

interface TabRootProps {
  children: React.ReactNode;
}

export function TabRoot({ children }: TabRootProps) {
  return (
    <div className='flex w-full flex-col justify-center gap-5 lg:flex-row lg:gap-16'>
      {children}
    </div>
  );
}
