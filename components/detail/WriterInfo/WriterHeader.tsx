import styled from 'styled-components'
import { Avatar, Button } from 'style/common'

const Container = styled.div`
	padding-top: 40px;
	display: flex;
	justify-content: space-between;
	.writer-avatar {
		display: flex;
		align-items: center;
		gap: 10px;
		${Avatar} {
			width: 50px;
		}
		> span {
			font-size: ${({ theme }) => theme.fontSizes.big};
		}
	}
	${Button} {
		width: 100px;
		height: 40px;
		font-size: 16px;
		border-radius: 5px;
		font-weight: 500;
	}
`

const WriterHeader = () => {
	return (
		<Container>
			<div className="writer-avatar">
				<Avatar src="/img/avatar.png" alt="avatar" />
				<span>Jebong</span>
			</div>
			<Button>팔로우 하기</Button>
		</Container>
	)
}

export default WriterHeader
