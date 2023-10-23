import { socialMediaList } from '@/components/SocialMedia/socialMediaList';
import { ToolTip } from '@/components/Tooltip';
import { twMerge } from 'tailwind-merge';

interface SocialMediaProps {
  className?: string;
}

export function SocialMedia({ className }: SocialMediaProps) {
  return (
    <ul
      className={twMerge(
        'flex flex-row items-center justify-center gap-7',
        className
      )}
    >
      {socialMediaList.map((item) => (
        <>
          <li data-tooltip-target={item.name} key={item.name}>
            <ToolTip tooltip={item.name}>
              <a href={item.path} target='_blank'>
                {item.icon}
              </a>
            </ToolTip>
          </li>
        </>
      ))}
    </ul>
  );
}
