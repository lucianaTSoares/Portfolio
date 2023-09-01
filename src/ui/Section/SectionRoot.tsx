import { twMerge } from 'tailwind-merge';

interface SectionRootProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  centralized?: boolean;
}

export function SectionRoot({
  children,
  centralized = false,
  ...rest
}: SectionRootProps) {
  return (
    <section
      {...rest}
      id={rest.id}
      className={twMerge(
        'global-container flex min-h-screen items-center ',
        centralized && 'justify-center',
        rest.className
      )}
    >
      {children}
    </section>
  );
}
