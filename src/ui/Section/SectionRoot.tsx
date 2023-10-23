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
  const { className, ...restWithoutClassName } = rest;

  return (
    <section
      id={rest.id}
      className='scroll-mt-16 md:scroll-mt-8'
      {...restWithoutClassName}
    >
      <div
        data-aos='fade-up'
        className={twMerge(
          'global-container flex items-center py-10 md:py-20',
          centralized && 'justify-center',
          className
        )}
      >
        {children}
      </div>
    </section>
  );
}
