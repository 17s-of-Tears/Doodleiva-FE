import Avatar from 'components/common/Avatar'
import React from 'react'
import { Input } from 'style/common'
import styled from 'styled-components'

const FromContainer = styled.form`
	display: flex;
`

const WriterAvatar = styled(Avatar)`
	width: 50px;
`

const CommentInput = styled(Input)`
	width: 82%;
	background-color: #f5f5f5;
`

function CommentForm() {
	return (
		<FromContainer>
			<WriterAvatar />
			<CommentInput placeholder="댓글을 달아보세요!" />
		</FromContainer>
	)
}

export default CommentForm
