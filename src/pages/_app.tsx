import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/Layout'
import GlobalStyle from '../styles/global'
import dark from '../styles/themes/dark'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={dark}>
			<Head>
				<title>LuDev</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<GlobalStyle />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	)
}

export default MyApp
