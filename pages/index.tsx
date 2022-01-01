import { useCallback } from 'react'
import Router from 'next/router'
import styled from 'styled-components'

import AppLayout from 'components/layout/AppLayout'
import HomeImage from 'components/HomeImage'
import { Button } from 'style/Common'

const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
	@media ${({ theme }) => theme.device.tabletL} {
		gap: 15px;
	}
	> img {
		width: 120px;
		height: 120px;
		@media ${({ theme }) => theme.device.NoteBook} {
			width: 100px;
			height: 100px;
		}
	}
	> h1 {
		text-align: center;
		font-size: ${({ theme }) => theme.fontSizes.titleSize};
		line-height: 1.5;
	}
	> span {
		font-size: ${({ theme }) => theme.fontSizes.xxxl};
		font-weight: 300;
	}
`

const HomeButton = styled(Button)`
	width: 200px;
	height: 60px;
	border-radius: 10px;
	size: 25px;
	background: ${({ theme }) => theme.colors.primary};
	@media ${({ theme }) => theme.device.tablet} {
		width: ${200 * 0.65}px;
		height: ${60 * 0.8}px;
		font-size: ${25 * 0.7}px;
	}
`

const Home = () => {
	const onClickToMainPage = useCallback(() => {
		Router.push('/main')
	}, [])

	return (
		<AppLayout>
			<HomeContainer>
				<img src="/img/logo_2.png" alt="Doodleiva" />
				<h1>
					다양한 사람들의 낙서를
					<br />
					한눈에 구경 해봐요!
				</h1>
				<span>아니면 내가 그린 낙서를 모두에게 보여줄까요?</span>
				<HomeButton onClick={onClickToMainPage}>시작하기</HomeButton>
			</HomeContainer>
			<HomeImage />
		</AppLayout>
	)
}

export default Home
