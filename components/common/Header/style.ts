import styled from 'styled-components'
import { Button } from 'style/common'

export const AppToolBar = styled.header`
	width: 100%;
	height: 70px;
	background: ${({ theme }) => theme.colors.white};
	box-shadow: 0px 5px 10px ${({ theme }) => theme.colors.gray_w};
	top: 0;
	position: sticky;
	z-index: 10;
	> div {
		height: 100%;
		margin: 0 10%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`

export const ButtonWrapper = styled.div`
	display: flex;
	gap: 10px;
`

export const Logo = styled.img`
	transition: 0.5s;
	&:hover {
		filter: brightness(80%);
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: 130px;
		height: auto;
	}
`

export const NavButton = styled(Button)<{ bgColor: string }>`
	width: 100px;
	height: 40px;
	border-radius: 5px;
	font-size: 16px;
	background: ${({ bgColor, theme }) =>
		bgColor === 'p' ? theme.colors.primary : theme.colors.secondary};
	@media ${({ theme }) => theme.device.tablet} {
		width: ${100 * 0.65}px;
		height: ${40 * 0.8}px;
		font-size: ${16 * 0.8}px;
	}
`
