import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'

import { Avatar, Button } from 'style/common'
import { commentDummy } from 'components/assets/dummy'

const Container = styled.div`
	padding: 40px 50px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 40px;
`

const CommentWapper = styled.div`
	display: flex;
	gap: 10px;
	.commentInfo {
		display: flex;
		flex-direction: column;
		justify-content: center;
		span {
			font-size: ${({ theme }) => theme.fontSizes.base};
			font-weight: 300;
			color: #777;
		}
		.commentInfo-header {
			display: flex;
			align-items: flex-end;
			gap: 10px;
			h3 {
				font-size: ${({ theme }) => theme.fontSizes.xxl};
				font-weight: 500;
				color: ${({ theme }) => theme.colors.gray_b};
			}
		}
	}
`

const CommentAvatar = styled(Avatar)`
	width: 80px;
	height: 80px;
`

const MoreButton = styled(Button)`
	width: 100px;
	height: 40px;
	border-radius: 20px;
	font-size: 16px;
	margin: 0 auto;
`

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
