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
        'fixed right-0 top-0 -z-10 mt-0 flex h-screen w-full flex-col items-center justify-center gap-7 bg-white' +
          ' transition-all duration-0 dark:bg-black max-[638px]:duration-300 md:relative md:right-auto md:z-0' +
          ' md:mt-auto md:h-0 md:w-full md:flex-row md:gap-8 md:transition-none',
        isOpen
          ? 'left-0 opacity-100 md:static'
          : 'left-full opacity-0 md:static md:opacity-100'
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
