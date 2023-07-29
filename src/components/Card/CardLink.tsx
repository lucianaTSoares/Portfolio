import { AnchorHTMLAttributes, ElementType } from 'react';

interface CardLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  href: string;
  icon?: ElementType;
}

export function CardLink({ text, href, icon: Icon, ...rest }: CardLinkProps) {
  return (
    <a
      className='flex w-fit flex-row items-center gap-2'
      target='_blank'
      rel='noreferrer'
      href={href}
      {...rest}
    >
      {Icon && <Icon />}
      <span>{text}</span>
    </a>
  );
}
