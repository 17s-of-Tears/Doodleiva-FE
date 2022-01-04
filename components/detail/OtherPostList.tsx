import React from 'react'
import { Button, ImageBox } from 'style/common'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	.other-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		> h2 {
			font-size: ${({ theme }) => theme.fontSizes.xxxl};
			color: #777;
		}
		${Button} {
			width: 120px;
			height: 40px;
			font-size: 16px;
			border-radius: 5px;
			font-weight: 500;
		}
	}
	.other-images {
		display: flex;
		justify-content: space-between;
		gap: 20px;
	}
`

const OtherPostList = () => {
	return (
		<Container>
			<div className="other-header">
				<h2>Jebong님의 다른 작품도 구경하세요!</h2>
				<Button>작품 목록 보기</Button>
			</div>
			<div className="other-images">
				{[1, 2, 3].map(v => (
					<ImageBox key={v}>
						<img
							src={`https://placeimg.com/200/100/any/${v}`}
							alt="outherPost"
						/>
					</ImageBox>
				))}
			</div>
		</Container>
	)
}

export default OtherPostList
