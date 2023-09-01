import { useScroll } from '@/hooks/useScroll';
import { twMerge } from 'tailwind-merge';

interface HeaderRootProps {
  children: React.ReactNode;
}

export function HeaderRoot({ children }: HeaderRootProps) {
  const { pageWasScrolled } = useScroll(10);

  return (
    <header
      className={twMerge(
        'fixed z-50 flex h-24 w-screen items-center bg-light shadow-none transition-all duration-300 ease-linear dark:bg-dark',
        pageWasScrolled && '!shadow-header-light dark:shadow-header-dark'
      )}
    >
      {children}
    </header>
  );
}
