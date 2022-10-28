import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Initial from '../components/Initial'

const Home: NextPage = () => {
	return (
		<div>
			<Header />
			<main>
				<Initial />
			</main>
			<Footer />
		</div>
	)
}

export default Home
