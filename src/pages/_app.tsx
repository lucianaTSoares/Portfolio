import Layout from '@components/Layout'
import dark from '@styles/themes/dark'
import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from '@styles/global'
import { ThemeProvider } from 'styled-components'
import { useEffect } from 'react'
import NextNProgress from 'nextjs-progressbar'
import AOS from 'aos'
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		AOS.init({
			duration: 1200,
			easing: 'ease',
			once: true,
		})
	}, [])
	return (
		<ThemeProvider theme={dark}>
			<Head>
				<title>LuDev</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<GlobalStyle />
			<NextNProgress color={dark.colors.tertiary} />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	)
}

export default MyApp
