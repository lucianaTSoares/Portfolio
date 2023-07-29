import { HTMLAttributes } from 'react';

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  title: string;
  bold?: boolean;
}

export function CardTitle({ title, bold, ...rest }: CardTitleProps) {
  return (
    <h3 className={``} {...rest}>
      {title}
    </h3>
  );
}
