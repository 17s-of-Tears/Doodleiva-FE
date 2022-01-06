import styled from 'styled-components'
import { Avatar, Button } from 'style/common'

export const Container = styled.div`
	padding: 40px 50px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 40px;
`

export const CommentWapper = styled.div`
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

export const CommentAvatar = styled(Avatar)`
	width: 80px;
	height: 80px;
`

export const MoreButton = styled(Button)`
	width: 100px;
	height: 40px;
	border-radius: 20px;
	font-size: 16px;
	margin: 0 auto;
`
