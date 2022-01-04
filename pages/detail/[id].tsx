import styled from 'styled-components'

import Serach from 'components/common/Serach'
import Comment from 'components/detail/Comment'
import AppLayout from 'components/layout/AppLayout'
import WriterInfo from 'components/detail/WriterInfo'
import OtherPostList from 'components/detail/OtherPostList'
import SimilarPostList from 'components/detail/SimilarPostList'

const Container = styled.div`
	background-color: #e5e5e5;
	padding: 20px 0 200px;
	.detail-wrapper {
		width: 85.4%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		.detail-left {
			width: 58%;
			display: flex;
			flex-direction: column;
			gap: 20px;
			> img {
				border-radius: 10px;
			}
		}
		.detail-right {
			display: flex;
			flex-direction: column;
			gap: 50px;
			width: 40%;
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
					<div className="detail-right">
						<WriterInfo />
						<OtherPostList />
						<SimilarPostList />
					</div>
				</div>
			</Container>
		</AppLayout>
	)
}

export default Detail
