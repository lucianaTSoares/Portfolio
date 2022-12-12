import { Icon } from '@iconify/react'
import { mainSkills, otherSkills } from './SkillList/skillsList'
import { Container, ItemListSkill, ListSkillCard } from './styles'

export default function Skills() {
	return (
		<Container className="container" id="skills">
			<div>
				<h2>Skills</h2>

				<h3>Principais</h3>
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

				<h3>Outras</h3>
				<ListSkillCard>
					{otherSkills.map((skill) => (
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
