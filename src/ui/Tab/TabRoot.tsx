import React from 'react';

interface TabRootProps {
  children: React.ReactNode;
}

export function TabRoot({ children }: TabRootProps) {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-12 lg:flex-row lg:gap-24'>
      {children}
    </div>
  );
}
