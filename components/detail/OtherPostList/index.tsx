import React from 'react'
import { Button, ImageBox } from 'style/common'
import { Container } from './style'

const OtherPostList = () => {
	return (
		<Container>
			<div className="other-header">
				<h2>Jebong님의 다른 작품도 구경하세요!</h2>
				<Button>작품 목록 보기</Button>
			</div>
			<div className="other-images">
				{[1, 2, 3].map(v => (
					<ImageBox key={v} img={`https://placeimg.com/200/100/any/${v}`}>
						<div />
					</ImageBox>
				))}
			</div>
		</Container>
	)
}

export default OtherPostList
