import { useCallback } from 'react'
import { useMediaQuery } from 'react-responsive'
import { RiUserSharedFill, RiUserAddFill } from 'react-icons/ri'
import Link from 'next/link'
import Router from 'next/router'
import styled from 'styled-components'

import { Button } from 'style/Common'

const AppToolBar = styled.header`
	width: 100%;
	height: 70px;
	background: ${({ theme }) => theme.colors.white};
	box-shadow: 0px 5px 10px ${({ theme }) => theme.colors.gray_w};
	top: 0;
	position: sticky;
	> div {
		height: 100%;
		margin: 0 10%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`

const ButtonWrapper = styled.div`
	display: flex;
	gap: 10px;
`

const Logo = styled.img`
	transition: 0.5s;
	&:hover {
		filter: brightness(80%);
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: 130px;
		height: auto;
	}
`

const NavButton = styled(Button)<{ bgColor: string }>`
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

const Header = () => {
	const isMobile = useMediaQuery({
		query: '(max-width: 425px)'
	})

	const onClickToPage = useCallback(
		(to: string) => () => {
			Router.push(`/${to}`)
		},
		[]
	)

	return (
		<AppToolBar>
			<div>
				<Link href="/">
					<a>
						<Logo src="/img/logo.png" alt="Logo" />
					</a>
				</Link>
				<ButtonWrapper>
					<NavButton onClick={onClickToPage('login')} bgColor="s">
						{isMobile ? <RiUserSharedFill size={20} /> : '로그인'}
					</NavButton>
					<NavButton onClick={onClickToPage('signup')} bgColor="p">
						{isMobile ? <RiUserAddFill size={20} /> : '회원가입'}
					</NavButton>
				</ButtonWrapper>
			</div>
		</AppToolBar>
	)
}
export default Header
