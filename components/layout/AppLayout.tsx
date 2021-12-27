import { FC, ReactNode } from 'react'
import Footer from 'components/common/Footer'
import Header from 'components/common/Header'
import styled from 'styled-components'
import { useRouter } from 'next/router'

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
			{router.asPath === '/' ? (
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
