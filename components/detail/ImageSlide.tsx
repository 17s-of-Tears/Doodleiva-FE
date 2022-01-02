import { DetailCard } from 'style/pages/detail'
import styled from 'styled-components'

const ImagesDetailCard = styled(DetailCard)`
	display: flex;
	justify-content: center;
	margin-top: 20px;
	> img {
		width: 64.1%;
	}
`

const ImageSlide = () => {
	return (
		<ImagesDetailCard>
			<img src="/img/dummy.png" alt="dummy" />
		</ImagesDetailCard>
	)
}

export default ImageSlide
