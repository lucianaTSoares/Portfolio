import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Initial from '../components/Initial'
import ScrollToTopButton from '../components/ScrollToTopButton'

const Home: NextPage = () => {
	return (
		<div>
			<Header />
			<main>
				<Initial />
				<ScrollToTopButton/>
			</main>
			<Footer />
		</div>
	)
}

export default Home
