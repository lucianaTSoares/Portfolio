import { mainSkills } from './SkillList/skillsList'
import { Container, ItemListSkill, ListSkillCard } from './styles'

export default function Skills() {
	return (
		<Container className="container" id="skills">
			<div>
				<h2>Skills</h2>
				<ListSkillCard>
					{mainSkills.map((skill) => (
						<ItemListSkill
							key={skill.name}
							title={skill.name}
							color={skill.color}
						>
							{skill.icon}
							<p>{skill.name}</p>
						</ItemListSkill>
					))}
				</ListSkillCard>
			</div>
		</Container>
	)
}
