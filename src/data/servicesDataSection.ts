import FrontEnd from 'public/frontend.svg';
import BackEnd from 'public/backend.svg';
import Test from 'public/quality-control.svg';

export function servicesDataSection() { 

  const mappedServicesIcons: Record<string, string> = {
    'APIs': BackEnd,
    'Páginas Web': FrontEnd,
    'Testes automatizados': Test
  }
  
  const servicesData = [
    {
    title: 'APIs',
    content: 'Construo APIs com uma base robusta para seu sistema digital, garantindo desempenho excepcional, segurança robusta e escalabilidade para o crescimento do seu negócio.'
    },
    {
    title: 'Páginas Web',
    content: 'Crio interfaces de usuário atraentes e intuitivas para o seu site ou aplicativo, garantindo uma primeira impressão impactante, compatibilidade em várias plataformas e uma experiência do usuário envolvente.'
    },
    {
    title: 'Testes automatizados',
    content: 'Identifico erros em seu software assegurando qualidade, economia de tempo, detecção precoce de problemas e confiabilidade contínua, permitindo que você entregue um produto confiável e livre de defeitos.'
    },
  ]

  function getIconSize(title: string) {
    if (title !== 'APIs') return 100
    return 70
  }

  return { mappedServicesIcons, servicesData, getIconSize }
}