'use client';

import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export function ErrorOnList() {
  const currentPage = usePathname();

  return (
    <p
      className={twMerge(
        'text-center text-xl',
        currentPage === '/projects' && 'relative bottom-16'
      )}
    >
      Ops... Houve uma falha ao carregar os projetos! Tente novamente mais
      tarde.
    </p>
  );
}
