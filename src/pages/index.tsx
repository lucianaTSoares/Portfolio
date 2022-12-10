import type { NextPage } from 'next'
import Experiences from '../components/Experiences'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Initial from '../components/Initial'
import ScrollToTopButton from '../components/ScrollToTopButton'
import Skills from '../components/Skills'

const Home: NextPage = () => {
	return (
		<div>
			<Header />
			<main>
				<Initial />
				<Experiences />
				<Skills />
				<ScrollToTopButton />
			</main>
			<Footer />
		</div>
	)
}

export default Home
