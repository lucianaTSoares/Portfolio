import About from '@components/Home/About'
import Experiences from '@components/Home/Experiences'
import Initial from '@components/Home/Initial'
import Skills from '@components/Home/Skills'
import Projects from '@components/Home/Projects'
import { TArrayProject } from 'types/project'
import type { NextPage } from 'next'
import { getServerSideProps } from './projects'

export { getServerSideProps }

const Home: NextPage<TArrayProject> = ({ data }: TArrayProject) => {
	return (
		<>
			<Initial />
			<About />
			<Experiences />
			<Projects data={data} />
			<Skills />
		</>
	)
}

export default Home
