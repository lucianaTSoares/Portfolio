import React, { ReactElement } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import ScrollToTopButton from '../ScrollToTopButton'

type Props = {
	children: ReactElement
}

export default function Layout({ children }: Props) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<ScrollToTopButton />
			<Footer />
		</>
	)
}
