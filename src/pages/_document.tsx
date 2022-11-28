import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />)
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			}
		} finally {
			sheet.seal()
		}
	}
	render() {
		return (
			<Html lang="pt-br">
				<Head>
					<meta charSet="UTF-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta name="author" content="Luciana Soares" />
					<meta
						name="description"
						content="Olá! Sou a Luciana, desenvolvedora Web Full Stack com foco em Front-end focada em trazer as melhores experiências para o usuário."
					/>
					<meta
						name="keywords"
						content="desenvolvedor, programador, desenvolvimento, website, portfolio, site, web, full stack, front-end"
					/>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Roboto+Mono:wght@700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
