import { twMerge } from 'tailwind-merge';

interface CardRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animateOnHover?: boolean;
}

export function CardRoot({ children, animateOnHover, ...rest }: CardRootProps) {
  const { className, ...restWithoutClassName } = rest;
  return (
    <div
      className={twMerge(
        'flex h-full flex-col justify-between rounded-md border border-solid border-zinc-200 bg-card-light p-8 shadow-card transition duration-300 ease-linear dark:border-zinc-800 dark:bg-card-dark',
        animateOnHover &&
          'hover:border-tertiary hover:bg-translucent-light dark:hover:border-primary dark:hover:bg-translucent-dark',
        className
      )}
      {...restWithoutClassName}
    >
      {children}
    </div>
  );
}
