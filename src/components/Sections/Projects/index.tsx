import { GroupProjectsCards } from '@/components/GroupProjectsCards';
import { Section } from '@/ui/Section';

const repositoriesToShow = ['Portfolio', 'HomePlus-API', 'HomePlus-FrontEnd'];

export function ProjectsSection() {
  return (
    <Section.Root
      id='projects'
      backgroundColor='dark:bg-[#151515] bg-[#f7f7f7]'
      className='flex scroll-mt-32 flex-col'
    >
      <Section.Title title='Projetos' />
      <Section.Content className='flex flex-col items-center'>
        <GroupProjectsCards repositoriesToShow={repositoriesToShow} />
      </Section.Content>
    </Section.Root>
  );
}
