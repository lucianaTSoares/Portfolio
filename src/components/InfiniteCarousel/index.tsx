import { techList } from '@/data/techList';
import { ToolTip } from '@/components/Tooltip';

export function InfiniteCarousel() {
  return (
    <div className='logos w-full' data-aos='zoom-in'>
      <div className='logos-slide'>
        {techList.map((tech) => {
          const { name, icon: Icon, color } = tech;
          return (
            <div
              className='mr-20 inline-block transition-all hover:scale-125'
              key={tech.name}
            >
              <ToolTip tooltip={name}>
                <Icon
                  className='svg-size text-zinc-700 dark:text-text-dark'
                  color={color}
                />
              </ToolTip>
            </div>
          );
        })}
      </div>
      <div className='logos-slide'>
        {techList.map((tech) => {
          const { name, icon: Icon, color } = tech;
          return (
            <div
              className='mr-20 inline-block transition-all hover:scale-125'
              key={tech.name}
            >
              <ToolTip tooltip={name}>
                <Icon
                  className='svg-size text-zinc-700 dark:text-text-dark'
                  size={50}
                  color={color}
                />
              </ToolTip>
            </div>
          );
        })}
      </div>
    </div>
  );
}
