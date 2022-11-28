import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiTypescript,
	SiReact,
	SiNextdotjs,
	SiNodedotjs,
	SiStyledcomponents,
	SiPostgresql,
	SiGit,
	SiJava,
	SiSpring,
	SiJunit5,
	SiAngular,
	SiBootstrap,
	SiTailwindcss,
	SiSequelize,
	SiRedux
} from 'react-icons/si'

import { DiSass } from 'react-icons/di'

const iconSize = 70

export const mainSkills = [
	{
		name: 'HTML5',
		icon: <SiHtml5 size={iconSize} />
	},
	{
		name: 'CSS3',
		icon: <SiCss3 size={iconSize} />
	},
	{
		name: 'JavaScript',
		icon: <SiJavascript size={iconSize} />
	},
	{
		name: 'TypeScript',
		icon: <SiTypescript size={iconSize} />
	},
	{
		name: 'React',
		icon: <SiReact size={iconSize} />
	},
	{
		name: 'NextJS',
		icon: <SiNextdotjs size={iconSize} />
	},
	{
		name: 'NodeJS',
		icon: <SiNodedotjs size={iconSize} />
	},
	{
		name: 'Styled Components',
		icon: <SiStyledcomponents size={iconSize} />
	},
	{
		name: 'PostgreSQL',
		icon: <SiPostgresql size={iconSize} />
	},
	{
		name: 'Git',
		icon: <SiGit size={iconSize} />
	}
]

export const otherSkills = [
	{
		name: 'Java',
		icon: <SiJava size={iconSize} />
	},
	{
		name: 'Spring Boot',
		icon: <SiSpring size={iconSize} />
	},
	{
		name: 'JUnit',
		icon: <SiJunit5 size={iconSize} />
	},
	{
		name: 'Angular',
		icon: <SiAngular size={iconSize} />
	},
	{
		name: 'Sass',
		icon: <DiSass size={iconSize} />
	},
	{
		name: 'Bootstrap',
		icon: <SiBootstrap size={iconSize} />
	},
	{
		name: 'Tailwind',
		icon: <SiTailwindcss size={iconSize} />
	},
	{
		name: 'Sequelize ORM',
		icon: <SiSequelize size={iconSize} />
	},
	{
		name: 'Redux',
		icon: <SiRedux size={65} />
	}
]
