import styled from 'styled-components'
import { Button, Input } from 'style/common'

export const SerachContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px 0;
	background-color: #f5f5f5;
	> h1 {
		font-size: ${({ theme }) => theme.fontSizes.titleSize};
		font-weight: 400;
	}
	> span {
		font-size: ${({ theme }) => theme.fontSizes.xl};
		font-weight: 500;
		color: #777;
	}
	.serach-form-box {
		margin: 50px 0 0;
		display: flex;
		align-items: center;
		gap: 10px;
	}
`

export const SerachInput = styled(Input)`
	background-size: 23px;
	background-image: url('/img/search.png');
	background-position: 10px center;
	background-repeat: no-repeat;
	padding-left: 40px;
`

export const SerachButton = styled(Button)`
	width: 100px;
	height: 42px;
	background-color: ${({ theme }) => theme.colors.secondary};
	border-radius: 5px;
`
