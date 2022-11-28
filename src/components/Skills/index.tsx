import { Icon } from '@iconify/react'
import { mainSkills, otherSkills } from './SkillList/skillsList'
import { Container, ListSkillCard } from './styles'

export default function Skills() {
	return (
		<div className="container">
			<Container id="skills">
				<h2>Skills</h2>

				<h3>Principais</h3>
				<ListSkillCard>
					{mainSkills.map((skill) => (
						<li key={skill.name} title={skill.name}>
							{skill.icon}
							<p>{skill.name}</p>
						</li>
					))}
				</ListSkillCard>

				<h3>Outras</h3>
				<ListSkillCard>
					{otherSkills.map((skill) => (
						<li key={skill.name} title={skill.name}>
							{skill.icon}
							<p>{skill.name}</p>
						</li>
					))}
				</ListSkillCard>
			</Container>
		</div>
	)
}
