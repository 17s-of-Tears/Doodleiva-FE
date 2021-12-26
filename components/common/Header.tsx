import Link from 'next/link'
import styled from 'styled-components'

import { Button } from 'style/common'

const AppToolBar = styled.header`
	width: 100%;
	height: 70px;
	background: #fff;
	box-shadow: 0px 5px 10px #eee;
	> div {
		height: 100%;
		margin: 0 10%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`

const Header = () => (
	<AppToolBar>
		<div>
			<Link href="/">
				<a>
					<img src="/img/logo.png" alt="Logo" />
				</a>
			</Link>
			<Link href="/login">
				<Button width={150} height={40} borderRadius={10}>
					로그인 | 회원가입
				</Button>
			</Link>
		</div>
	</AppToolBar>
)
export default Header
