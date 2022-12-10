import Tabs from '../Tabs'
import { Container } from './styles'
import experienceList from '../../data/experiencesList.json'

export default function Experiences() {
	return (
		<div className="container" id="experiences">
			<Container>
				<h2>Experiência</h2>
				<Tabs>
					{experienceList.map((experience) => (
						<div key={experience.company} data-title={experience.company}>
							<div>
								<h3>{experience.job}</h3>
								<h4>{experience.date}</h4>
							</div>
							<p>{experience.description}</p>
							<p>
								<span>Tecnologias trabalhadas:</span> {experience.skills}
							</p>
						</div>
					))}
				</Tabs>
			</Container>
		</div>
	)
}
