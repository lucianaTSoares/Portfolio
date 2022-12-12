import { NextPage } from 'next'
import Head from 'next/head'
import RouterLink from '../components/RouterLink'

const Projects: NextPage = () => {
	return (
		<>
			<Head>
				<title>LuDev - Projetos</title>
			</Head>
			<div style={{ paddingTop: '30rem' }}>
				<RouterLink path="/">teste</RouterLink>
			</div>
		</>
	)
}

export default Projects
