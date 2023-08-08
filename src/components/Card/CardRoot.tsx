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
        'flex h-full flex-col justify-between rounded-md border border-solid border-transparent bg-card-light p-8 shadow-card dark:bg-card-dark',
        animateOnHover &&
          'transition duration-400 ease-linear hover:border-primary hover:bg-translucent dark:hover:bg-translucent'
      )}
    >
      {children}
    </div>
  );
}
