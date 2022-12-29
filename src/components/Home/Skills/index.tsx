import { useEffect, useState } from 'react'
import { mainSkills } from './SkillList'
import { SkillsContainer, ListSkillCard, ItemListSkill } from './styles'

export default function Skills() {
	const [count, setCount] = useState(0)

	useEffect(() => {
		let counter = count
		const interval = setInterval(() => {
			if (counter >= mainSkills.length) {
				clearInterval(interval)
			} else {
				setCount((count) => count + 1)
				counter++
			}
		}, 80)
		return () => clearInterval(interval)
	}, [mainSkills])

	return (
		<SkillsContainer className="container" id="skills">
			<div data-aos="fade-up">
				<h2>Skills</h2>
				<ListSkillCard>
					{mainSkills.slice(0, count).map((skill) => (
						<ItemListSkill
							data-aos="fade-up"
							key={skill.name}
							title={skill.name}
							color={skill.color}
						>
							<div>
								{skill.icon}
								<p>{skill.name}</p>
							</div>
						</ItemListSkill>
					))}
				</ListSkillCard>
			</div>
		</SkillsContainer>
	)
}
