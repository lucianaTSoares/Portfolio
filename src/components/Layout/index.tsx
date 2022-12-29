import Footer from '@components/Footer'
import Header from '@components/Header'
import ScrollToTopButton from '@components/ScrollToTopButton'
import React, { ReactElement } from 'react'


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
