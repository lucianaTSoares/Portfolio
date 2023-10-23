interface CardContentProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function CardContent({ children, ...rest }: CardContentProps) {
  return (
    <div className='w-full' {...rest}>
      {children}
    </div>
  );
}
