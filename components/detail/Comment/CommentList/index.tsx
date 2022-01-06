import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'

import { commentDummy } from 'components/assets/dummy'
import { Container, CommentAvatar, CommentWapper, MoreButton } from './style'

const CommentList = () => {
	const [comments, setComments] = useState(commentDummy)

	const onClickMoreComment = useCallback(() => {
		if (comments.length >= 6) toast.error('더 이상 불러올 정보가 없습니다!')
		else setComments(prev => [...prev, ...commentDummy])
	}, [comments])

	return (
		<Container>
			{comments.map(v => (
				<CommentWapper key={v.id}>
					<CommentAvatar src="/img/avatar.png" alt="avatar" />
					<div className="commentInfo">
						<div className="commentInfo-header">
							<h3>{v.user}</h3>
							<span>{v.date}</span>
						</div>
						<span>{v.content}</span>
					</div>
				</CommentWapper>
			))}
			<MoreButton onClick={onClickMoreComment}>더 보기</MoreButton>
		</Container>
	)
}

export default CommentList
