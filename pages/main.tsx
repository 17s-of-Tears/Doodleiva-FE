import styled from 'styled-components'

import AppLayout from 'components/layout/AppLayout'
import Serach from 'components/common/Serach'
import { Button, Card } from 'style/common'

const Maincontainer = styled.div`
	.popularTag {
		display: grid;
		justify-content: center;
		grid-template-columns: 170px 170px 170px 170px 170px 170px 170px;
		grid-template-rows: 50px 50px;
		gap: 50px;
	}
`

const Main = () => {
	const hash = [
		'#김코드싸개',
		'#김코드싸개',
		'#김코드싸개',
		'#김코드싸개',
		'#김코드싸개',
		'#김코드싸개',
		'#김코드싸개',
		'#김코드싸개',
		'#김코드싸개',
		'#김코드싸개',
		'#김코드싸개',
		'#김코드싸개',
		'#김코드싸개',
		'#김코드싸개'
	]

	return (
		<AppLayout>
			<Maincontainer>
				<Serach />
				<h1>#인기</h1>
				<div className="popularTag">
					{hash.map((v, i) => (
						<Button key={i}>{v}</Button>
					))}
				</div>
				<h1>이달의 인기 작품</h1>
				<div className="cardWrapper">
					<Card>김코드</Card>
				</div>
				<h1>이달의 인기 작품</h1>
				<div className="allPictureWrapper">
					<Card>김코드</Card>
				</div>
			</Maincontainer>
		</AppLayout>
	)
}

export default Main
