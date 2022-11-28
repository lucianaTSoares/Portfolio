import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'
import { TbBrandDiscord } from 'react-icons/tb'

const iconSize = 28

const socialList = [
	{
		name: 'LinkedIn',
		icon: <FiLinkedin size={iconSize} />,
		path: 'https://linkedin.com/in/lucianatsoares',
		color: '#1380ed'
	},
	{
		name: 'GitHub',
		icon: <FiGithub size={iconSize} />,
		path: 'https://github.com/lucianaTSoares',
		color: '#83888f'
	},
	{
		name: 'Discord',
		icon: <TbBrandDiscord size={iconSize} />,
		path: 'https://discordapp.com/users/302050872383242240',
		color: '#5865e1'
	},
	{
		name: 'E-mail',
		icon: <FiMail size={iconSize} />,
		path: 'mailto:lucianat.s@hotmail.com',
		color: '#2cd1c9'
	}
]

export default socialList
