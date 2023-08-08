import { IconType } from 'react-icons/lib';

interface CardLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  icon?: IconType;
}

export function CardLink({ text, icon: Icon, ...rest }: CardLinkProps) {
  return (
    <a
      className='flex w-fit flex-row items-center gap-2'
      target='_blank'
      rel='noreferrer'
      href={rest.href}
      {...rest}
    >
      {Icon && <Icon size={20} />}
      <span>{text}</span>
    </a>
  );
}
