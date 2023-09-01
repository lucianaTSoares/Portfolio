interface CardActionProps {
  children: React.ReactNode;
}

export function CardActions({ children }: CardActionProps) {
  return <div className='mt-5 flex flex-col gap-3'>{children}</div>;
}
