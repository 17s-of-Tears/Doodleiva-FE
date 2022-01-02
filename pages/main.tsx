import React from 'react'
import styled from 'styled-components'
import AppLayout from 'components/layout/AppLayout'
import { Button, Input } from 'style/common'
import CardForm from 'components/CardForm'


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
	.cardWrapper{
		display: flex;
		justify-content: center;
		gap:15px;
	}
	.allPictureWrapper{
		display:grid;
		justify-content: center;
		grid-template-columns: 360px 360px 360px 360px 360px;
		grid-template-rows: 410px 410px;
		gap:16px;
	}
	.contentTitle,
	.contentTitlePlus{
		font-size: ${({ theme }) => theme.fontSizes.subTitleSize};
	}
	.contentTitlePlus ::after{
		content:"#";
		color:#1abc9c;
	}
`
const MainInput = styled(Input)`
	margin: 5px;
`
const Tagbutton = styled(Button)`
	border-radius: 25px;
`
const Main = () => {
	const hash = [
		'#김코드싸개', '#김코드싸개', '#김코드싸개', '#김코드싸개', '#김코드싸개', '#김코드싸개', '#김코드싸개',
		'#김코드싸개', '#김코드싸개', '#김코드싸개', '#김코드싸개', '#김코드싸개', '#김코드싸개', '#김코드싸개'
	]
	const popular: String[] = ['#김코드싸개', '#김코드싸개', '#김코드싸개', '#김코드싸개'];
	const allContent: String[] = [
		'#김코드싸개', '#김코드싸개', '#김코드싸개', '#김코드싸개', '#김코드싸개',
		'#김코드싸개', '#김코드싸개', '#김코드싸개', '#김코드싸개', '#김코드싸개']

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
				<label className="contentTitlePlus">인기</label>
				<div className="popularTag">
					{hash.map((v, i) => (
						<Tagbutton key={i}>{v}</Tagbutton>
					))}
				</div>
				<label className="contentTitle">이달의 인기 작품</label>
				<div className="cardWrapper">
					{popular.map((v, i) => (
						<CardForm />
					))}
				</div>
				<label className="contentTitle">모든 작품 모아보기</label>
				<div className="allPictureWrapper">
					{allContent.map((v, i) => (
						<CardForm />
					))}
				</div>

			</Maincontainer>
		</AppLayout>
	)
}

export default Main
