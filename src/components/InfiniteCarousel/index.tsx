import { techList } from '@/data/techList';
import { ToolTip } from '@/components/Tooltip';
import Image from 'next/image';

export function InfiniteCarousel() {
  return (
    <div className='logos w-full' data-aos='zoom-in'>
      <div className='logos-slide'>
        {techList.map((tech) => {
          const { name, icon: Icon, svgPath, color } = tech;
          return (
            <div
              className='mr-20 inline-block transition-all hover:scale-125'
              key={tech.name}
            >
              <ToolTip tooltip={name}>
                {Icon ? (
                  <Icon
                    className='svg-size text-zinc-700 dark:text-text-dark'
                    color={color}
                  />
                ) : (
                  <Image src={svgPath!} alt={name} className='svg-size m-0' />
                )}
              </ToolTip>
            </div>
          );
        })}
      </div>
      <div className='logos-slide'>
        {techList.map((tech) => {
          const { name, icon: Icon, svgPath, color } = tech;
          return (
            <div
              className='mr-20 inline-block transition-all hover:scale-125'
              key={tech.name}
            >
              <ToolTip tooltip={name}>
                {Icon ? (
                  <Icon
                    className='svg-size text-zinc-700 dark:text-text-dark'
                    color={color}
                  />
                ) : (
                  <Image src={svgPath!} alt={name} className='svg-size m-0' />
                )}
              </ToolTip>
            </div>
          );
        })}
      </div>
    </div>
  );
}
