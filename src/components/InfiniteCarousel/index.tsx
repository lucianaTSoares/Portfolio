import { techList } from '../../data/techList';
import { ToolTip } from '../Tooltip';

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
                  className='text-zinc-700 dark:text-text-dark'
                  size={50}
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
                  className='text-zinc-700 dark:text-text-dark'
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
