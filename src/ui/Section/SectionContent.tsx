import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionContentProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SectionContent({ children, ...rest }: SectionContentProps) {
  return <div className={twMerge('w-full', rest.className)}>{children}</div>;
}
