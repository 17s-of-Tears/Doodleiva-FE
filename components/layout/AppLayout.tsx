import { FC, ReactNode } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Header from 'components/common/Header'
import Footer from 'components/common/Footer'

interface Props {
	children: ReactNode
}

const HomePageContainer = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const AppLayout: FC<Props> = ({ children }) => {
	const router = useRouter()

	return (
		<>
			{router.asPath === '/' ||
			router.asPath === '/login' ||
			router.asPath === '/signup' ? (
				<HomePageContainer>
					<Header />
					{children}
					<Footer />
				</HomePageContainer>
			) : (
				<>
					<Header />
					{children}
					<Footer />
				</>
			)}
		</>
	)
}

export default AppLayout
