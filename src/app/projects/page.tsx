import { Section } from '@/ui/Section';
import { GroupProjectsCards } from '@/components/GroupProjectsCards';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LuDev - Projetos',
};

const repositoriesToShow = [
  'Portfolio',
  'HomePlus-API',
  'HomePlus-FrontEnd',
  'Imersao-Dev',
  'GenCash',
  'kenzieflix',
  'Recomendador-de-amigos',
  'Authentication-app-api',
];

export default async function Projects() {
  return (
    <main className='prose-p:leading-[175%]'>
      <Section.Root className='h-full min-h-screen !pt-32'>
        <Section.Content>
          <GroupProjectsCards
            repositoriesToShow={repositoriesToShow}
            isBackAction
          />
        </Section.Content>
      </Section.Root>
    </main>
  );
}
