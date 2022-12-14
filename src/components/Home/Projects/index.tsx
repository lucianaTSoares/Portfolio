import GetFilteredProjects from '../../../hooks/getFilteredProjects'
import { TProject } from '../../../types/project'
import Button from '../../Button'
import ProjectList from '../../ProjectList'
import { Container } from './styles'

const mainProjectsName = ['Portfolio', 'HomePlus-API', 'HomePlus-FrontEnd']

type Props = {
	dataList: TProject[]
}

export default function Projects({ dataList }: Props) {
	return (
		<Container className="container" id="projects">
			<h2>Projetos</h2>
			<ProjectList list={GetFilteredProjects(dataList, mainProjectsName)} />
			<div>
				<Button href="/projects" target="_self" variant="secondary">
					Ver mais
				</Button>
			</div>
		</Container>
	)
}
