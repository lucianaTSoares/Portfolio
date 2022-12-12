import React, { ReactElement } from 'react'
import Footer from '../Footer'
import Header from '../Header'

type Props = {
	children: ReactElement
}

export default function Layout({ children }: Props) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	)
}
