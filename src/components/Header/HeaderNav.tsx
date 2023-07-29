import { ReactNode } from 'react';

interface HeaderNavProps {
  children: ReactNode;
  logoColors: {
    anchor: string;
    span: string;
  };
}

export function HeaderNav({ children, logoColors }: HeaderNavProps) {
  return (
    <nav className='global-container flex w-screen items-center justify-between'>
      <a
        href='#'
        className={`inline-grid select-none text-[23px] font-semibold leading-6 dark:text-light ${logoColors.anchor}`}
      >
        Lu{' '}
        <span
          id='header-logo'
          className={`font-mono font-bold dark:text-primary ${logoColors.span}`}
        >
          &#10100;dev&#95;&#10101;
        </span>
      </a>
      {children}
    </nav>
  );
}
