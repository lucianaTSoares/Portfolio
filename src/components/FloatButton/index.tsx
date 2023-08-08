'use client';

import { useScroll } from '@/hooks/useScroll';
import { TiArrowUpThick } from 'react-icons/ti';
import { twMerge } from 'tailwind-merge';

export function FloatButton() {
  const { pageWasScrolled } = useScroll(700);

  return (
    <button
      id='floatButton'
      className={twMerge(
        'group fixed bottom-8 right-8 hidden select-none items-center overflow-hidden rounded-md border-2 p-1 font-bold',
        pageWasScrolled && 'flex'
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <TiArrowUpThick size={27} />
      <p className='max-w-0 whitespace-nowrap opacity-0 md:transition-all md:duration-400 md:ease-in-out md:group-hover:mx-1 md:group-hover:max-w-[200px] md:group-hover:opacity-100'>
        Voltar ao topo
      </p>
    </button>
  );
}
