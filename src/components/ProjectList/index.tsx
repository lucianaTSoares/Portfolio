import { useEffect, useState } from 'react'
import { TProject } from 'types/project'
import { Badges, ProjectListCard, ProjectListItem } from './styles'
import { RiGitRepositoryLine } from 'react-icons/ri'
import { GoBrowser } from 'react-icons/go'

type Props = {
	list: TProject[]
}

export default function ProjectList({ list }: Props) {
	const [count, setCount] = useState(0)

	useEffect(() => {
		let counter = count
		const interval = setInterval(() => {
			if (counter >= list.length) {
				clearInterval(interval)
			} else {
				setCount((count) => count + 1)
				counter++
			}
		}, 60)
		return () => clearInterval(interval)
	}, [count, list])

	return (
		<ProjectListCard>
			{list.slice(0, count).map((item) => (
				<ProjectListItem key={item.id} data-aos="fade-up">
					<div>
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
									<GoBrowser size={20} />
									<span>Ir para o site</span>
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
								<RiGitRepositoryLine size={20} />{' '}
								<span> Ir para o repositório</span>
							</a>
						</div>
					</div>
				</ProjectListItem>
			))}
		</ProjectListCard>
	)
}
