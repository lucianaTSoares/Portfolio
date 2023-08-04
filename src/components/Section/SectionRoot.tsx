import { ReactNode } from 'react';

interface SectionRootProps {
  children: ReactNode;
  centralized?: boolean;
  id?: string;
  paddingTop?: boolean;
}

export function SectionRoot({
  children,
  centralized,
  id,
  paddingTop = false,
}: SectionRootProps) {
  return (
    <section
      id={id}
      className={`global-container flex min-h-screen items-center ${
        centralized ? 'justify-center' : 'block'
      } ${paddingTop ? '!pt-[50rem]' : 'pt-0'}`}
    >
      {children}
    </section>
  );
}
