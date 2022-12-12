import type { NextPage } from 'next'
import Experiences from '../components/Experiences'
import Initial from '../components/Initial'
import Projects from '../components/Projects'
import ScrollToTopButton from '../components/ScrollToTopButton'
import Skills from '../components/Skills'
import { ArrayProjectType } from '../types/projects'

const Home: NextPage<ArrayProjectType> = ({ data }: ArrayProjectType) => {
	return (
		<>
			<Initial />
			<Experiences />
			<Projects data={data} />
			<Skills />
			<ScrollToTopButton />
		</>
	)
}

export async function getServerSideProps() {
	const user = 'lucianaTSoares'
	const data = await fetch(`https://api.github.com/users/${user}/repos`)
		.then((res) => res.json())
		.then((res) => {
			return res
		})

	const formattedData = data.map((item: typeof data) => {
		return {
			id: item.id,
			name: item.name,
			url: item.html_url,
			description: item.description,
			createdAt: item.created_at,
			topics: item.topics
		}
	})

	return {
		props: {
			data: formattedData
		}
	}
}

export default Home
