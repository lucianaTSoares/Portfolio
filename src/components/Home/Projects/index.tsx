import Button from '@components/Button'
import ProjectList from '@components/ProjectList'
import getFilteredProjects from '@hooks/getFilteredProjects'
import { TProject } from 'types/project'
import { ProjectsContainer } from './styles'

const mainProjectsName = ['Portfolio', 'HomePlus-API', 'HomePlus-FrontEnd']

type Props = {
	data: TProject[]
}

export default function Projects({ data }: Props) {
	return (
		<ProjectsContainer className="container" id="projects">
			<div data-aos="fade-up">
				<h2>Projetos</h2>
				<ProjectList list={getFilteredProjects(data, mainProjectsName)} />
				<div>
					<Button href="/projects" target="_self" variant="secondary">
						Ver mais
					</Button>
				</div>
			</div>
		</ProjectsContainer>
	)
}
