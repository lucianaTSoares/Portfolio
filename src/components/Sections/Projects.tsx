import { GroupProjectsCards } from '../GroupProjectsCards';
import { Section } from '@/ui/Section';

const repositoriesToShow = ['Portfolio', 'HomePlus-API', 'HomePlus-FrontEnd'];

export function ProjectsSection() {
  return (
    <Section.Root
      id='projects'
      centralized
      className='flex min-h-[70vh] scroll-mt-14 flex-col'
    >
      <Section.Title title='Projetos' />
      <Section.Content>
        <GroupProjectsCards repositoriesToShow={repositoriesToShow} />
      </Section.Content>
    </Section.Root>
  );
}
