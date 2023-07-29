import { HTMLAttributes } from 'react';

interface CardContentProps extends HTMLAttributes<HTMLParagraphElement> {
  content: string;
}

export function CardContent({ content, ...rest }: CardContentProps) {
  return (
    <p className='mb-5' {...rest}>
      {content}
    </p>
  );
}
