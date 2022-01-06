import { useMediaQuery } from 'react-responsive'

import Comment from 'components/detail/Comment'
import AppLayout from 'components/layout/AppLayout'
import WriterInfo from 'components/detail/WriterInfo'
import OtherPostList from 'components/detail/OtherPostList'
import SimilarPostList from 'components/detail/SimilarPostList'
import { Container, ResponsiveView } from './style'

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
