import Serach from 'components/common/Serach'
import DetailInfo from 'components/detail/DetailInfo'
import ImageSlide from 'components/detail/ImageSlide'
import AppLayout from 'components/layout/AppLayout'
import styled from 'styled-components'

const DetailContainer = styled.div`
	background: #e5e5e5;
	display: flex;
	flex-direction: column;
	gap: 20px;
`

const Detail = () => {
	return (
		<AppLayout>
			<Serach />
			<DetailContainer>
				<ImageSlide />
				<DetailInfo />
			</DetailContainer>
		</AppLayout>
	)
}

export default Detail
