import { useEffect, useState } from 'react'
import { ArrayProjectType, ProjectType } from '../../types/projects'
import Button from '../Button'
import { Badges, Container, ProjectListCard, ProjectListItem } from './styles'

export default function Projects({ data }: ArrayProjectType) {
	const [mainProjects, setMainProjects] = useState<ProjectType[]>([])

	const mainProjectsName = ['Adopet', 'HomePlus-API', 'HomePlus-FrontEnd']

	useEffect(() => {
		const mainProjectsArray = data.filter((project: ProjectType) =>
			mainProjectsName.includes(project.name)
		)
		setMainProjects(mainProjectsArray)
	}, [data])

	console.log(mainProjects)

	return (
		<Container className="container" id="projects">
			<h2>Projetos</h2>
			<ProjectListCard>
				{mainProjects.map((item) => (
					<ProjectListItem key={item.id}>
						<h3>{item.name}</h3>
						<p>{item.description}</p>
						<Badges>
							{item.topics.map((topic) => (
								<li key={topic}>{topic}</li>
							))}
						</Badges>
						<a href={item.url} target="_blank" rel="noreferrer">
							Ir para o repositório
						</a>
					</ProjectListItem>
				))}
			</ProjectListCard>
			<div>
				<Button href="/projects" target="_self" variant="secondary">
					Ver mais
				</Button>
			</div>
		</Container>
	)
}
