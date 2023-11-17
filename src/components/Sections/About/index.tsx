import { Section } from '@/ui/Section';

export function AboutSection() {
  return (
    <Section.Root id='about' className='flex scroll-mt-32 flex-col'>
      <Section.Title title='Sobre' />
      <Section.Content
        id='about-content'
        className='mt-5 flex w-full flex-col justify-between gap-12 lg:flex-row'
      >
        <div className='lg:w-1/2'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet debitis
          et, fugit laborum maxime reiciendis reprehenderit soluta. Accusantium
          consequatur delectus id impedit laboriosam, laudantium odio quas quod
          rem! At, voluptas.
        </div>
        <div className='lg:w-1/2'>
          <h3>Minha educação e marcos importantes...</h3>
          <ul>
            <li className='flex items-center gap-5'>
              <p className='whitespace-nowrap text-xl !font-bold'>Dez. 2020:</p>
              <p>
                Formação como tecnóloga em Análise e Desenvolvimento de Sistemas
                na UNIP
              </p>
            </li>
            <li className='flex items-center gap-5'>
              <p className='w-fit whitespace-nowrap text-xl !font-bold '>
                Mar. 2022:
              </p>
              <p>Formação como Desenvolvedora Web na Generation Brasil</p>
            </li>
            <li className='flex items-center gap-5'>
              <p className='w-fit whitespace-nowrap text-xl !font-bold '>
                Mai. 2022:
              </p>
              <p>
                Adquirindo minha primeira experiência profissional como Dev Full
                Stack na 6place
              </p>
            </li>
            <li className='flex items-center gap-5'>
              <p className='whitespace-nowrap text-xl !font-bold'>Set. 2022:</p>
              <p>
                Minha primeira certificação: AWS Certified Cloud Practitioner
              </p>
            </li>
          </ul>
        </div>
      </Section.Content>
    </Section.Root>
  );
}
