'use client';

import { useBurgerMenuContext } from '@/context/BurgerMenuContext';

export function HeaderBurgerMenu() {
  const { isOpen, toggle } = useBurgerMenuContext();

  return (
    <div className='z-10 block select-none sm:hidden' onClick={toggle}>
      <span
        className={`z-10 block h-1 w-8 rounded-sm bg-text-light transition-all duration-500 dark:bg-text-dark ${
          isOpen
            ? 'burger-menu-span'
            : 'mb-1.5 translate-x-0 translate-y-0 rotate-0'
        }`}
      ></span>
      <span
        className={`z-10 block h-1 w-8 bg-text-light transition-all duration-500 dark:bg-text-dark ${
          isOpen ? 'scale-50 opacity-0' : 'mb-1.5 scale-100 opacity-100'
        } rounded-sm`}
      ></span>
      <span
        className={`z-10 mb-1.5 block h-1 w-8 rounded-sm bg-text-light transition-all duration-500 dark:bg-text-dark ${
          isOpen
            ? 'burger-menu-span--negative'
            : 'translate-x-0 translate-y-0 rotate-0'
        }`}
      ></span>
    </div>
  );
}
