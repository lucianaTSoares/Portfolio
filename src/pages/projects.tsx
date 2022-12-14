import { NextPage } from 'next'
import getServerSideProps from '../hooks/serverSideProps'
import Head from 'next/head'
import ProjectList from '../components/ProjectList'
import RouterLink from '../components/RouterLink'
import GetFilteredProjects from '../hooks/getFilteredProjects'
import { TArrayProject } from '../types/project'
import { Icon } from '@iconify/react'
export { getServerSideProps }

const projectsName = [
	'Portfolio',
	'Adopet',
	'HomePlus-API',
	'HomePlus-FrontEnd',
	'Imersao-Dev',
	'GenCash',
	'kenzieflix'
]

const Projects: NextPage<TArrayProject> = ({ data }: TArrayProject) => {
	return (
		<>
			<Head>
				<title>LuDev - Projetos</title>
			</Head>
			<div className="container" style={{ padding: '8rem 0 5rem' }}>
				<RouterLink path="/">
					<Icon icon="material-symbols:keyboard-double-arrow-left-rounded" />{' '}
					Voltar
				</RouterLink>

				<ProjectList list={GetFilteredProjects(data, projectsName)} />
			</div>
		</>
	)
}

export default Projects
