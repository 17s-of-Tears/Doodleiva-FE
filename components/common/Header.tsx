import Link from 'next/link'
import styled from 'styled-components'

import { Button } from 'style/common'

const AppToolBar = styled.header`
	width: 100%;
	height: 80px;
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

const Header = () => (
	<AppToolBar>
		<div>
			<Link href="/">
				<a>
					<Logo src="/img/logo.png" alt="Logo" />
				</a>
			</Link>
			<ButtonWrapper>
				<Link href="/login">
					<Button width={100} height={40} radius={5} size={16} bgColor="s">
						로그인
					</Button>
				</Link>
				<Link href="/signup">
					<Button width={100} height={40} radius={5} size={16} bgColor="p">
						회원가입
					</Button>
				</Link>
			</ButtonWrapper>
		</div>
	</AppToolBar>
)
export default Header
