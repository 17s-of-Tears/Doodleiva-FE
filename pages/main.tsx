import React from 'react'
import styled from 'styled-components'
import AppLayout from 'components/layout/AppLayout'
import { Button, Card, Input } from 'style/common'

const Maincontainer = styled.div`
	.title {
		display: flex;
		flex-direction: column;
		text-align: center;
		h1 {
			font-size: ${({ theme }) => theme.fontSizes.titleSize};
		}
	}
	.inputWrapper {
		display: flex;
		justify-content: center;
	}

	.popularTag {
		display: grid;
		justify-content: center;
		grid-template-columns: 170px 170px 170px 170px 170px 170px 170px;
		grid-template-rows: 50px 50px;
		gap: 50px;
	}
`
const MainInput = styled(Input)`
	margin: 5px;
`

const tagButton = styled(Button)`
	margin: 5px;
`

const Main = () => {
	const hash = [
		'#김코드싸개',
		'#김코드싸개',
		'#김코드싸개',
		'#김코드싸개',
		'#김코드싸개',
		'#김코드싸개',
		'#김코드싸개',
		'#김코드싸개',
		'#김코드싸개',
		'#김코드싸개',
		'#김코드싸개',
		'#김코드싸개',
		'#김코드싸개',
		'#김코드싸개'
	]

	return (
		<AppLayout>
			<Maincontainer>
				<div className="title">
					<h1>낙서 찾아보기</h1>
					<p>제목이나 해시태그로 검색해보세요!</p>
				</div>
				<div className="inputWrapper">
					<MainInput />
				</div>
				<h1>#인기</h1>
				<div className="popularTag">
					{hash.map((v, i) => (
						<Button key={i}>{v}</Button>
					))}
				</div>
				<h1>이달의 인기 작품</h1>
				<div className="cardWrapper">
					<Card>김코드</Card>
				</div>
				<h1>이달의 인기 작품</h1>
				<div className="allPictureWrapper">
					<Card>김코드</Card>
				</div>
			</Maincontainer>
		</AppLayout>
	)
}

export default Main
