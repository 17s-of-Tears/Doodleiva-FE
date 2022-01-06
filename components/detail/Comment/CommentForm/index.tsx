import { ChangeEvent, useCallback, useRef } from 'react'
import { toast } from 'react-toastify'

import useInput from 'hooks/useInput'
import {
	CommentButton,
	CommentInput,
	CoommentAvatar,
	FromContainer
} from './style'

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
