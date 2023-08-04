import { useBurgerMenuContext } from '@/context/BurgerMenuContext';
import { Header } from '.';

interface HeaderItemsProps {
  menuItems: {
    label: string;
    path: string;
  }[];
  iconColor: string;
}

export function HeaderItems({ menuItems, iconColor }: HeaderItemsProps) {
  const { isOpen } = useBurgerMenuContext();

  return (
    <ul
      className={`absolute right-0 top-0 mt-0 flex h-screen w-full flex-col items-center justify-center bg-light transition-all duration-0 dark:bg-black max-[638px]:duration-300 sm:relative sm:right-auto sm:mt-auto sm:h-0 sm:w-full sm:flex-row sm:gap-8
sm:transition-none ${
        isOpen ? 'opacity-100' : '-z-10 opacity-0 sm:opacity-100'
      }`}
    >
      {menuItems.map((item) => (
        <li id='item' key={item.label}>
          <a
            className={`font-semibold dark:text-light ${iconColor}`}
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
