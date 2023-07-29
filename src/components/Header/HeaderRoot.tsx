import { ReactNode } from 'react';
import { useScroll } from '@/hooks/useScroll';

interface HeaderRootProps {
  children: ReactNode;
}

export function HeaderRoot({ children }: HeaderRootProps) {
  const { pageWasScrolled } = useScroll(10);

  return (
    <header
      className={`fixed z-50 h-24 w-screen ${
        pageWasScrolled
          ? 'bg-primary !shadow-header-light dark:!shadow-header-dark'
          : 'shadow-none'
      }  flex items-center bg-light transition-all duration-200 ease-linear dark:bg-dark`}
    >
      {children}
    </header>
  );
}
