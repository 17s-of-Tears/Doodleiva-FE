import React from 'react';
import styled from 'styled-components';
import AppLayout from 'components/layout/AppLayout';
import { Button, Input } from 'style/common';
import CardForm from 'components/CardForm';
import SearchResult from 'components/SearchResult';

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
	.pupularTagWrapper{
		position:relative;
	}
	.popularTag {
		display: grid;
		justify-content: center;
		grid-template-columns: 170px 170px 170px 170px 170px 170px 170px;
		grid-template-rows: 1fr 50px 50px;
		gap: 50px;
		margin: 10px;
	}
	.popularContent{
		display: grid;
		justify-content: center;
		grid-template-columns: 360px 360px 360px 360px;
		grid-template-rows: 1fr  410px;
		gap:10px;
		margin:100px;
	}
	.allContent{
		display:grid;
		justify-content: center;
		grid-template-columns: 360px 360px 360px 360px 360px;
		grid-template-rows: 1fr 410px 410px;
		gap:10px;
		margin: 100px;
	}
	.allTitle,
	.popularTitle,
	.popularTagTitle{
		font-size: ${({ theme }) => theme.fontSizes.subTitleSize};
	}
	.popularTagTitle ::after{
		content:"#";
		color:#1abc9c;
	}
	.popularTagTitle{
		grid-column: 1 / 8;
		grid-row: 1 / 1;
	}
	.allTitle{
		grid-column: 1 / 6;
		grid-row: 1 / 1;
	}
	.popularTitle{
		grid-column: 1 / 5;
		grid-row: 1 / 1;
	}
`
const MainInput = styled(Input)`
	margin: 25px;
`
export const Tagbutton = styled(Button)`
	width:170px;
	height:50px;
	font-size: ${({ theme }) => theme.fontSizes.xxl};
	border-radius: 25px;
	margin-right:25px;
	:nth-child(2n-1){
		background-color: #1abc9c;
	}
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
				<div className="allWrapper">
					<div className="title">
						<h1>낙서 찾아보기</h1>
						<p>제목이나 해시태그로 검색해보세요!</p>
					</div>

					<div className="inputWrapper">
						<MainInput />
					</div>
					<div className="pupularTagWrapper">
						<label className="popularTagTitle">인기</label>
						<div className="popularTag">
							{hash.map((v, i) => (
								<Tagbutton key={i}>{v}</Tagbutton>
							))}
						</div>
					</div>

					<div className="popularContent">
						<label className="popularTitle">이달의 인기 작품</label>
						{popular.map((v, i) => (
							<CardForm key={i} />
						))}
					</div>

					<div className="allContent">
						<label className="allTitle">모든 작품 모아보기</label>
						{allContent.map((v, i) => (
							<CardForm />
						))}
					</div>
				</div>
			</Maincontainer>
		</AppLayout>
	)
}

export default Main
