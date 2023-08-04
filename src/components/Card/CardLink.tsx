import { AnchorHTMLAttributes, ElementType } from 'react';
import { IconType } from 'react-icons/lib';

interface CardLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  href: string;
  icon?: IconType;
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
      {Icon && <Icon size={20} />}
      <span>{text}</span>
    </a>
  );
}
