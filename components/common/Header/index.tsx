import { useCallback } from 'react'
import { useMediaQuery } from 'react-responsive'
import { RiUserSharedFill, RiUserAddFill } from 'react-icons/ri'
import Link from 'next/link'
import Router from 'next/router'

import { AppToolBar, ButtonWrapper, Logo, NavButton } from './style'

const Header = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 425px)' })

	const onClickToPage = useCallback(
		(to: string) => () => {
			Router.push(`/user/${to}`)
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
