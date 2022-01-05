import styled from 'styled-components'

import Comment from 'components/detail/Comment'
import AppLayout from 'components/layout/AppLayout'
import WriterInfo from 'components/detail/WriterInfo'
import OtherPostList from 'components/detail/OtherPostList'
import SimilarPostList from 'components/detail/SimilarPostList'
import { useMediaQuery } from 'react-responsive'

const Container = styled.div`
	background-color: #e5e5e5;
	padding: 20px 0 200px;
	@media ${({ theme }) => theme.device.NoteBook} {
		padding: 10px 0 100px;
	}
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

const ResponsiveView = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 20px;
	gap: 30px;
`

const Detail = () => {
	const isNotebook = useMediaQuery({ query: '(max-width: 1024px)' })

	return (
		<AppLayout>
			<Container>
				{!isNotebook ? (
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
				) : (
					<ResponsiveView>
						<img src="/img/dummy.png" alt="dummy" />
						<Comment />
						<WriterInfo />
						<OtherPostList />
						<SimilarPostList />
					</ResponsiveView>
				)}
			</Container>
		</AppLayout>
	)
}

export default Detail
