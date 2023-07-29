import { ReactNode } from 'react';

interface SectionRootProps {
  children: ReactNode;
  centralized?: boolean;
  id?: string;
  test?: string;
}

export function SectionRoot({ children, centralized, id }: SectionRootProps) {
  return (
    <section
      id={id}
      className={`global-container flex h-screen items-center lg:snap-start lg:snap-always ${
        centralized ? 'justify-center' : 'block'
      }`}
    >
      {children}
    </section>
  );
}
