import type { AppProps } from 'next/app'
import Head from 'next/head'

import wrapper from 'store'
import GlobalStyle from 'style/global'

const MyApp = ({ Component, pageProps }: AppProps) => (
	<>
		<Head>
			<title>Test</title>
		</Head>
		<GlobalStyle />
		<Component {...pageProps} />
	</>
)

export default wrapper.withRedux(MyApp)
