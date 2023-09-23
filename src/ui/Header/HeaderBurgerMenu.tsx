import { useBurgerMenuContext } from '@/context/burgerMenuContext';
import { twMerge } from 'tailwind-merge';

export function HeaderBurgerMenu() {
  const { isOpen, toggle } = useBurgerMenuContext();

  const spanClassName = (classNames: string[], isMenuOpen: boolean) => {
    return twMerge(
      'z-10 block h-1 w-8 rounded-sm bg-text-light transition-all duration-500 dark:bg-text-dark',
      ...classNames,
      !isMenuOpen &&
        'mb-1.5 translate-x-0 translate-y-0 rotate-0 scale-100 opacity-1'
    );
  };

  return (
    <div
      className='z-10 block cursor-pointer select-none md:hidden'
      onClick={toggle}
    >
      <span className={spanClassName(['burger-menu-span'], isOpen)}></span>
      <span className={spanClassName(['scale-50 opacity-0'], isOpen)}></span>
      <span
        className={spanClassName(['burger-menu-span--negative'], isOpen)}
      ></span>
    </div>
  );
}
