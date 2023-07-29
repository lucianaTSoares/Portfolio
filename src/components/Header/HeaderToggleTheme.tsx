import { TbMoonOff, TbMoon } from 'react-icons/tb';
import { useTheme } from '@/hooks/useTheme';
import { useScroll } from '@/hooks/useScroll';

interface HeaderToggleThemeProps {
  darkIconsSize?: number;
  lightIconsSize?: number;
  appearsInBurgerMenu?: boolean;
}

export function HeaderToggleTheme({
  darkIconsSize = 22,
  lightIconsSize = 22,
  appearsInBurgerMenu,
}: HeaderToggleThemeProps) {
  const { theme, setTheme } = useTheme();
  const { pageWasScrolled } = useScroll(10);

  return (
    <button
      className={`bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 hover:dark:bg-zinc-700
      ${pageWasScrolled ? 'bg-opacity-30 hover:bg-opacity-60' : ''}
      ${appearsInBurgerMenu ? 'block sm:hidden' : 'hidden sm:block'}
      rounded-full p-2 transition`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <TbMoonOff size={darkIconsSize} />
      ) : (
        <TbMoon
          size={lightIconsSize}
          className={`${pageWasScrolled ? 'text-light' : ''}`}
        />
      )}
    </button>
  );
}
