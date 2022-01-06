import { useCallback } from 'react'
import Router from 'next/router'

import AppLayout from 'components/layout/AppLayout'
import HomeImage from 'components/HomeImage'
import { HomeButton, HomeContainer } from './style'

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
