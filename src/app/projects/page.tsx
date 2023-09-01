import { Section } from '@/ui/Section';
import { GroupProjectsCards } from '@/components/GroupProjectsCards';

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
      <Section.Root className='pt-40'>
        <Section.Content>
          <GroupProjectsCards repositoriesToShow={repositoriesToShow} />
        </Section.Content>
      </Section.Root>
    </main>
  );
}
