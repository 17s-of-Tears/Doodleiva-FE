import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import wrapper from 'store'
import GlobalStyle from 'style/global'
import theme from 'style/theme'

const MyApp = ({ Component, pageProps }: AppProps) => (
	<>
		<Head>
			<title>Test</title>
		</Head>
		<GlobalStyle />
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	</>
)

export default wrapper.withRedux(MyApp)
