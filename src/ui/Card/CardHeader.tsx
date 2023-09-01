interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardHeader({ children, ...rest }: CardHeaderProps) {
  return (
    <div className='mb-5 flex justify-between' {...rest}>
      {children}
    </div>
  );
}
