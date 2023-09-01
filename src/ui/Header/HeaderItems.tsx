import { useBurgerMenuContext } from '@/context/burgerMenuContext';
import { twMerge } from 'tailwind-merge';

interface HeaderItemsProps {
  menuItems: {
    label: string;
    path: string;
  }[];
}

export function HeaderItems({ menuItems }: HeaderItemsProps) {
  const { isOpen, toggle } = useBurgerMenuContext();

  return (
    <ul
      className={twMerge(
        'absolute right-0 top-0 -z-10 mt-0 flex h-screen w-full flex-col items-center justify-center gap-7 bg-light transition-all duration-0 dark:bg-black max-[638px]:duration-300 sm:relative sm:right-auto sm:z-0 sm:mt-auto sm:h-0 sm:w-full sm:flex-row sm:gap-8 sm:transition-none',
        isOpen ? 'opacity-100' : 'opacity-0 sm:opacity-100'
      )}
    >
      {menuItems.map((item) => (
        <li id={`navItem-${item.label}`} key={item.label} onClick={toggle}>
          <a
            className={`cursor-pointer font-semibold`}
            href={item.path}
            target='_self'
            rel='noreferrer'
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
