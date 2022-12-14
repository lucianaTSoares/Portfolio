import type { NextPage } from 'next'
import getServerSideProps from '../hooks/serverSideProps'
import { TArrayProject } from '../types/project'
import Initial from '../components/Home/Initial'
import Experiences from '../components/Home/Experiences'
import Projects from '../components/Home/Projects'
import Skills from '../components/Home/Skills'
export { getServerSideProps }

const Home: NextPage<TArrayProject> = ({ data }: TArrayProject) => {
	return (
		<>
			<Initial />
			<Experiences />
			<Projects dataList={data} />
			<Skills />
		</>
	)
}

export default Home
