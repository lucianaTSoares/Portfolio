import { Section } from '@/ui/Section';
import { GroupProjectsCards } from '@/components/GroupProjectsCards';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LuDev - Projetos',
};

const repositoriesToShow = [
  'Portfolio2.0',
  'Portfolio',
  'Adopet',
  'HomePlus-API',
  'HomePlus-FrontEnd',
  'Imersao-Dev',
  'GenCash',
  'kenzieflix',
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
