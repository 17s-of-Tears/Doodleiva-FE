import AppLayout from 'components/layout/AppLayout'
import { Button } from 'style/common'
import styled from 'styled-components'
import HomeImage from 'components/HomeImage'
import Link from 'next/link'

const HomeContainer = styled.div`
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 30px;
		@media ${({ theme }) => theme.device.tabletL} {
			gap: 15px;
		}
		> img {
			width: 120px;
			height: 120px;
			@media ${({ theme }) => theme.device.NoteBook} {
				width: 100px;
				height: 100px;
			}
		}
		> h1 {
			text-align: center;
			font-size: ${({ theme }) => theme.fontSizes.titleSize};
			line-height: 1.5;
		}
		> span {
			font-size: ${({ theme }) => theme.fontSizes.xxxl};
			font-weight: 300;
		}
	}
`

const Home = () => {
	return (
		<AppLayout>
			<HomeContainer>
				<div>
					<img src="/img/logo_2.png" alt="Doodleiva" />
					<h1>
						다양한 사람들의 낙서를
						<br />
						한눈에 구경 해봐요!
					</h1>
					<span>아니면 내가 그린 낙서를 모두에게 보여줄까요?</span>
					<Link href="/main">
						<a>
							<Button width={200} height={60} radius={10} size={25} bgColor="p">
								시작하기
							</Button>
						</a>
					</Link>
				</div>
			</HomeContainer>
			<HomeImage />
		</AppLayout>
	)
}

export default Home
