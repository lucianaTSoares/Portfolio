import { Section } from '@/ui/Section';

export function AboutSection() {
  return (
    <Section.Root
      id='about'
      backgroundColor='dark:bg-[#151515] bg-[#f7f7f7]'
      className='flex scroll-mt-32 flex-col'
    >
      <Section.Title title='Sobre' />
      <Section.Content
        id='about-content'
        className='mt-5 flex w-full flex-col justify-between gap-12 lg:flex-row'
      >
        <div className='text-justify lg:w-1/2'>
          Oi, eu sou a Luciana, uma desenvolvedora que adora transformar ideias
          em experiências incríveis na web! Minha paixão por tecnologia começou
          quando eu era criança e tive meu primeiro encontro com um computador.
          Desde então, tracei meu caminho para a área de desenvolvimento, onde
          estou há pouco mais de 1 ano profissionalmente. Estou sempre buscando
          aprender as novidades no mundo tech para fazer a diferença na vida das
          pessoas.
          <div className='logo--variant mt-6 text-center text-3xl font-bold text-transparent lg:mt-14'>
            Vamos criar algo incrível juntos!
          </div>
        </div>
        <div className='lg:w-1/2'>
          <h3>Minha educação e marcos importantes...</h3>
          <ul>
            <li className='flex items-center gap-5'>
              <p className='whitespace-nowrap text-xl !font-bold'>Dez. 2021:</p>
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
