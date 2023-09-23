interface HeaderNavProps {
  children: React.ReactNode;
}

export function HeaderNav({ children }: HeaderNavProps) {
  return (
    <nav className='global-container flex w-full items-center justify-between'>
      <a
        href='#'
        className={`inline-grid select-none text-[23px] font-semibold leading-6`}
      >
        Lu{' '}
        <span
          id='header-logo'
          className={`font-mono font-bold text-tertiary dark:text-primary`}
        >
          &#10100;dev&#95;&#10101;
        </span>
      </a>
      {children}
    </nav>
  );
}
