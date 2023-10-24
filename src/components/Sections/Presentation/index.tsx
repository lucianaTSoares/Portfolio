import { TypewriteCustom } from '../../TypewriteCustom';
import { ArrowDown } from '../../ArrowDown';
import { Section } from '@/ui/Section';
import { SocialMedia } from '@/components/SocialMedia';

export function PresentationSection() {
  return (
    <Section.Root id='presentation' centralized className='min-h-screen'>
      <Section.Content>
        <h1 className='flex flex-col items-center text-center font-bold !leading-loose md:!leading-tight '>
          Oi, sou a Lucy!
          <div
            id='logo-span'
            className='flex w-fit flex-col justify-center gap-3 font-extrabold italic leading-none text-transparent dark:text-dark sm:flex-wrap md:flex-row'
          >
            <span>Desenvolvedora</span>
            <TypewriteCustom
              texts={['Web.', 'Front-End.', 'Back-End.', 'Full Stack.']}
            />
          </div>
        </h1>
        <div className='h-fit overflow-hidden text-center text-base sm:text-2xl md:h-[30px]'>
          <p className='relative bottom-24 !m-0 hidden animate-none !p-0 md:block md:animate-rotate-text'>
            Construindo <span className='font-bold'>futuros digitais</span>.
          </p>
          <p className='relative bottom-24 !m-0 hidden animate-none !p-0 md:block md:animate-rotate-text'>
            Zelando a <span className='font-bold'>experiência do usuário</span>{' '}
            em primeiro lugar.
          </p>
          <p className='relative bottom-24 !m-0 hidden animate-none !p-0 md:block md:animate-rotate-text'>
            Dedicada a{' '}
            <span className='font-bold'>transformar suas ideias</span> em
            software.
          </p>
          <p className='md:bottom-34 relative bottom-0 !m-0 animate-none !p-0 md:animate-rotate-text'>
            Amor em oferecer{' '}
            <span className='font-bold'>experiências digitais incríveis</span>.
          </p>
        </div>
        <SocialMedia className='mt-14' />
        <ArrowDown />
      </Section.Content>
    </Section.Root>
  );
}
