import ProjectList from '@components/ProjectList'
import RouterLink from '@components/RouterLink'
import getFilteredProjects from '@hooks/getFilteredProjects'
import getServerSideProps from '@hooks/serverSideProps'
import { Icon } from '@iconify/react'
import { NextPage } from 'next'
import Head from 'next/head'
import { TArrayProject } from 'types/project'

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
			<div
				className="container"
				data-aos="fade-up"
				style={{ padding: '8rem 0 5rem', minHeight: '100vh' }}
			>
				<RouterLink path="/">
					<Icon icon="material-symbols:keyboard-double-arrow-left-rounded" />{' '}
					Voltar
				</RouterLink>

				<ProjectList list={getFilteredProjects(data, projectsName)} />
			</div>
		</>
	)
}

export default Projects
