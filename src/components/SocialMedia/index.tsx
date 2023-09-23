import { socialMediaList } from '@/components/SocialMedia/socialMediaList';
import { ToolTip } from '@/components/Tooltip';

export function SocialMedia() {
  return (
    <ul className='mt-14 flex flex-row items-center justify-center gap-7'>
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
