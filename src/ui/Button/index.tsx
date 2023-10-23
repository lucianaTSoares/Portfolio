import { twMerge } from 'tailwind-merge';
import { CgSpinner } from 'react-icons/cg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  animateOnHover?: boolean;
}

export function Button({
  children,
  loading,
  animateOnHover,
  ...rest
}: ButtonProps) {
  const { className, ...restProps } = rest;
  return (
    <button
      className={twMerge(
        'flex items-center justify-center rounded-md bg-tertiary px-3 py-3 text-white disabled:bg-opacity-80 dark:bg-primary dark:disabled:bg-opacity-80',
        animateOnHover && 'hover:bg-opacity-80 dark:hover:bg-opacity-80',
        className
      )}
      {...restProps}
    >
      {loading ? <CgSpinner size={28} className='animate-spin' /> : children}
    </button>
  );
}
