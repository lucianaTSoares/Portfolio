import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import dark from '../styles/themes/dark'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={dark}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<script
					src="https://code.iconify.design/iconify-icon/1.0.1/iconify-icon.min.js"
					async
				></script>
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
