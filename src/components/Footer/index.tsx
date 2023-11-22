import { SocialMedia } from '@/components/SocialMedia';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='border-t border-t-zinc-300 p-10 text-center dark:border-t-zinc-800'>
      <div className='global-container flex flex-col items-center justify-between sm:flex-row sm:gap-12'>
        <div>&copy; {currentYear} LuDev - Todos os direitos reservados.</div>
        <SocialMedia />
      </div>
    </footer>
  );
}
