import AppLayout from 'components/layout/AppLayout'
import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
	.title-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		h1 {
			font-size: ${({ theme }) => theme.fontSizes.titleSize};
		}
		p {
			font-size: ${({ theme }) => theme.fontSizes.xxl};
		}
	}
`

const Main = () => {
	return (
		<AppLayout>
			<MainContainer>
				<div className="title-box">
					<h1>낙서 찾아보기</h1>
					<p>제목이나 해시태그로 검색해보세요!</p>
				</div>
			</MainContainer>
		</AppLayout>
	)
}

export default Main
