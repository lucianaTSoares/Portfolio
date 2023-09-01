interface CardContentProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function CardContent({ children, ...rest }: CardContentProps) {
  return (
    <p className='mb-5' {...rest}>
      {children}
    </p>
  );
}
