import { ImageBox } from 'style/common'
import { Container } from './style'

const SimilarPostList = () => {
	return (
		<Container>
			<h2>이 작품과 비슷한 작품들도 구경하세요!</h2>
			<div className="other-images-gird">
				{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(v => (
					<div key={v} className="other-images-container">
						<div className="other-images-box">
							<ImageBox img={`https://placeimg.com/200/100/any/${v}`}>
								<div />
							</ImageBox>
						</div>
					</div>
				))}
			</div>
		</Container>
	)
}

export default SimilarPostList
