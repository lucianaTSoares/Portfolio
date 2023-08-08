interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
  bold?: boolean;
}

export function CardTitle({ title, bold, ...rest }: CardTitleProps) {
  return <h3 {...rest}>{title}</h3>;
}
