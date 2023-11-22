import { twMerge } from 'tailwind-merge';

export function ErrorOnList() {
  return (
    <p className={twMerge('text-center text-xl')}>
      Ops... Houve uma falha ao carregar os projetos! Tente novamente mais
      tarde.
    </p>
  );
}
