import { useScroll } from '@/hooks/useScroll';
import { useTheme } from '@/hooks/useTheme';
import { TbMoon, TbMoonOff } from 'react-icons/tb';
import { twMerge } from 'tailwind-merge';

interface HeaderToggleThemeProps {
  darkIconsSize?: number;
  lightIconsSize?: number;
}

export function HeaderToggleTheme({
  darkIconsSize = 22,
  lightIconsSize = 22,
}: HeaderToggleThemeProps) {
  const { darkTheme, setIsDarkTheme } = useTheme();
  const { pageWasScrolled } = useScroll(10);

  return (
    <button
      className={twMerge(
        'rounded-full bg-zinc-200 p-2 transition hover:bg-zinc-400 dark:bg-zinc-800 dark:hover:bg-zinc-700',
        pageWasScrolled && 'hover:bg-opacity-60'
      )}
      onClick={() => setIsDarkTheme((prev) => !prev)}
    >
      {darkTheme ? (
        <TbMoonOff size={darkIconsSize} />
      ) : (
        <TbMoon size={lightIconsSize} />
      )}
    </button>
  );
}
