import { ArrowDown } from '../../ArrowDown';
import { Section } from '../../Section';
import { TypewriteCustom } from '../../TypewriteCustom';

export function PresentationSection() {
  return (
    <Section.Root id='presentationSection' centralized>
      <Section.Content>
        <h1 className='text-center font-bold !leading-loose md:!leading-tight '>
          Luciana Soares
          <div
            id='logo-span'
            className='flex flex-col justify-center gap-3 font-extrabold italic leading-none text-transparent dark:text-dark dark:text-stroke-width-calc sm:flex-wrap md:flex-row'
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
        <ArrowDown />
      </Section.Content>
    </Section.Root>
  );
}
