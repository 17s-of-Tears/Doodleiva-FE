import { ImageBox } from 'style/common'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	> h2 {
		font-size: ${({ theme }) => theme.fontSizes.xxxl};
		color: #777;
	}
	.other-images {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
		justify-content: space-between;
	}
`

const SimilarPostList = () => {
	return (
		<Container>
			<h2>이 작품과 비슷한 작품들도 구경하세요!</h2>
			<div className="other-images">
				{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(v => (
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

export default SimilarPostList
