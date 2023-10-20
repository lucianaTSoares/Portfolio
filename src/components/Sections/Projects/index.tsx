import { GroupProjectsCards } from '../../GroupProjectsCards';
import { Section } from '@/ui/Section';

const repositoriesToShow = ['Portfolio', 'HomePlus-API', 'HomePlus-FrontEnd'];

export function ProjectsSection() {
  return (
    <Section.Root id='projects' className='flex scroll-mt-32 flex-col'>
      <Section.Title title='Projetos' />
      <Section.Content>
        <GroupProjectsCards repositoriesToShow={repositoriesToShow} />
      </Section.Content>
    </Section.Root>
  );
}
