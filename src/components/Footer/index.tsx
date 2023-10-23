import { SocialMedia } from '../SocialMedia';

export function Footer() {
  return (
    <footer className='border-t border-t-zinc-300 p-10 text-center dark:border-t-zinc-800'>
      <div className='global-container flex flex-col items-center justify-between sm:flex-row sm:gap-12'>
        <div>&copy; 2023. Todos os direitos reservados.</div>
        <SocialMedia />
      </div>
    </footer>
  );
}
