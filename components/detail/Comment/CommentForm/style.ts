import styled from 'styled-components'
import { Avatar, Button, Input } from 'style/common'

export const FromContainer = styled.form`
	padding: 0 50px;
	margin-top: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
`

export const CommentInput = styled(Input)`
	width: 100%;
	background-color: #f5f5f5;
`

export const CommentButton = styled(Button)`
	width: 100px;
	height: 42px;
	font-size: 18px;
	border-radius: 5px;
`

export const CoommentAvatar = styled(Avatar)`
	width: 42px;
`
