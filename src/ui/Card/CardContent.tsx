interface CardContentProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function CardContent({ children, ...rest }: CardContentProps) {
  return (
    <div className='mb-5 w-full' {...rest}>
      {children}
    </div>
  );
}
