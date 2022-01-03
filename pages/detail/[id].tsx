import styled from 'styled-components'

import Serach from 'components/common/Serach'
import Comment from 'components/detail/Comment/Comment'
import AppLayout from 'components/layout/AppLayout'

const Container = styled.div`
	background-color: #e5e5e5;
	.detail-wrapper {
		width: 85.4%;
		margin: 0 auto;
		.detail-left {
			display: flex;
			flex-direction: column;
			gap: 20px;
			> img {
				width: 49.5%;
				border-radius: 10px;
			}
		}
	}
`

const Detail = () => {
	return (
		<AppLayout>
			<Serach />
			<Container>
				<div className="detail-wrapper">
					<div className="detail-left">
						<img src="/img/dummy.png" alt="dummy" />
						<Comment />
					</div>
				</div>
			</Container>
		</AppLayout>
	)
}

export default Detail
