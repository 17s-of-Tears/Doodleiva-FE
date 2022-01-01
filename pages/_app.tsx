import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import wrapper from 'store'
import GlobalStyle from 'style/GlobalStyled'
import theme from 'style/theme'
import 'react-toastify/dist/ReactToastify.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
	<>
		<Head>
			<title>Test</title>
		</Head>
		<GlobalStyle />
		<ToastContainer />
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	</>
)

export default wrapper.withRedux(MyApp)
