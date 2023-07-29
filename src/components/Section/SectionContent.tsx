import { ReactNode } from 'react';

interface SectionContentProps {
  children: ReactNode;
}

export function SectionContent({ children }: SectionContentProps) {
  return <div>{children}</div>;
}
