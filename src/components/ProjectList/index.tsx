import { TProject } from '../../types/project'
import { Badges, ProjectListCard, ProjectListItem } from './styles'

type Props = {
	list: TProject[]
}

export default function ProjectList({ list }: Props) {
	return (
		<ProjectListCard>
			{list.map((item) => (
				<ProjectListItem key={item.id}>
					<div>
						<h3>{item.name}</h3>
						<p>{item.description}</p>
						{item.topics.length !== 0 && (
							<Badges>
								{item.topics.map((topic) => (
									<li key={topic}>{topic}</li>
								))}
							</Badges>
						)}
					</div>
					<div>
						{item.homepage && item.name !== 'Portfolio' && (
							<a
								className="linkStyle"
								href={item.homepage}
								target="_blank"
								rel="noreferrer"
							>
								Ir para o site
							</a>
						)}
						{item.name === 'Portfolio' && (
							<p className="linkStyle">
								É este site que você está vendo agora ;&#41;
							</p>
						)}
						<a
							className="linkStyle"
							href={item.url}
							target="_blank"
							rel="noreferrer"
						>
							Ir para o repositório
						</a>
					</div>
				</ProjectListItem>
			))}
		</ProjectListCard>
	)
}
