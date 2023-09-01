import { twMerge } from 'tailwind-merge';

interface CardRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animateOnHover?: boolean;
}

export function CardRoot({ children, animateOnHover, ...rest }: CardRootProps) {
  return (
    <div
      {...rest}
      className={twMerge(
        'flex h-full flex-col justify-between rounded-md border border-solid border-transparent bg-card-light p-8 shadow-card transition duration-300 ease-linear dark:bg-card-dark',
        animateOnHover &&
          'hover:border-secondary hover:bg-translucent-light dark:hover:border-primary dark:hover:bg-translucent-dark'
      )}
    >
      {children}
    </div>
  );
}
