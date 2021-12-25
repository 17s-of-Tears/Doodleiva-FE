import type { AppProps } from 'next/app'
import Head from 'next/head'
import wrapper from 'store'

const MyApp = ({ Component, pageProps }: AppProps) => (
	<>
		<Head>
			<title>Test</title>
		</Head>
		<Component {...pageProps} />
	</>
)

export default wrapper.withRedux(MyApp)
