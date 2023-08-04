import { HTMLAttributes } from 'react';

interface CardTagsProps extends HTMLAttributes<HTMLUListElement> {
  tags: string[];
}

export function CardTags({ tags, ...rest }: CardTagsProps) {
  return (
    <ul className='flex flex-wrap gap-2.5' {...rest}>
      {tags.map((tag) => (
        <li
          id={`item-${tag}`}
          key={tag}
          className='whitespace-nowrap rounded-[20px] bg-translucent !px-4 !py-1.5 text-sm font-semibold leading-[unset] text-primary'
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
