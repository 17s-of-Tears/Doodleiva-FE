import styled from 'styled-components'
import { Avatar, Button, Input } from 'style/common'
import useInput from 'hooks/useInput'
import { ChangeEvent, useCallback, useRef } from 'react'
import { toast } from 'react-toastify'

const FromContainer = styled.form`
	padding: 0 50px;
	margin-top: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
`

const CommentInput = styled(Input)`
	width: 100%;
	background-color: #f5f5f5;
`

const CommentButton = styled(Button)`
	width: 100px;
	height: 42px;
	font-size: 18px;
	border-radius: 5px;
`

const CoommentAvatar = styled(Avatar)`
	width: 42px;
`

const CommentForm = () => {
	const [comment, onChangeComment, setComment] = useInput('')
	const inputRef = useRef<HTMLInputElement>(null)

	const onSubmitForm = useCallback(
		(e: ChangeEvent<HTMLFormElement>) => {
			e.preventDefault()
			if (comment) toast.success('댓글을 작성했습니다!')
			else toast.error('빈 칸이 존재합니다!')
			setComment('')
			inputRef.current?.focus()
			console.log(comment)
		},
		[comment, setComment]
	)

	return (
		<FromContainer onSubmit={onSubmitForm}>
			<CoommentAvatar src="/img/avatar.png" />
			<CommentInput
				ref={inputRef}
				value={comment}
				onChange={onChangeComment}
				placeholder="댓글을 달아보세요!"
			/>
			<CommentButton type="submit">작성</CommentButton>
		</FromContainer>
	)
}

export default CommentForm
