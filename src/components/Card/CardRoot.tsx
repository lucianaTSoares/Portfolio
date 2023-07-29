import { HTMLAttributes, ReactNode } from 'react';

interface CardRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  animateOnHover?: boolean;
}

export function CardRoot({ children, animateOnHover, ...rest }: CardRootProps) {
  return (
    <div
      {...rest}
      className={`flex flex-col justify-between rounded-md border border-solid border-transparent bg-card-light p-8 dark:bg-card-dark ${
        animateOnHover
          ? 'transition duration-400 ease-linear hover:border-primary hover:bg-translucent'
          : ''
      }`}
    >
      {children}
    </div>
  );
}
