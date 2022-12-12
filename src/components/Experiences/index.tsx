import Tabs from '../Tabs'
import { Container } from './styles'
import experianceData from '../../data/experiencesList.json'

export default function Experiences() {
	return (
		<Container className="container" id="experiences">
			<h2>Experiência</h2>
			<Tabs>
				{experianceData.map((experience) => (
					<div key={experience.company} data-title={experience.company}>
						<div>
							<h4>{experience.job}</h4>
							<p>{experience.date}</p>
						</div>
						<p>{experience.description}</p>
						<p>
							<span>Tecnologias trabalhadas:</span> {experience.skills}
						</p>
					</div>
				))}
			</Tabs>
		</Container>
	)
}
