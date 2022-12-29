import Tabs from '@components/Tabs'
import { ExperianceContainer } from './styles'
import experianceList from 'data/experiencesList.json'

export default function Experiences() {
	return (
		<ExperianceContainer className="container" id="experiences">
			<div data-aos="fade-up">
				<h2>Experiência</h2>
				<Tabs>
					{experianceList.map((experience) => (
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
			</div>
		</ExperianceContainer>
	)
}
