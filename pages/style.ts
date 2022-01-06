import styled from 'styled-components'
import { Button } from 'style/common'

export const HomeContainer = styled.div`
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
`

export const HomeButton = styled(Button)`
	width: 200px;
	height: 60px;
	border-radius: 10px;
	size: 25px;
	background: ${({ theme }) => theme.colors.primary};
	@media ${({ theme }) => theme.device.tablet} {
		width: ${200 * 0.65}px;
		height: ${60 * 0.8}px;
		font-size: ${25 * 0.7}px;
	}
`
