import styled from 'styled-components'
import { Card } from 'style/common'

export const FormCard = styled(Card)`
	width: auto;
	height: auto;
	display: flex;
	gap: 10px;
	flex-direction: column;
	align-items: flex-start;
	margin: auto;
	padding: 40px 30px 50px;
	@media ${({ theme }) => theme.device.tabletL} {
		padding: 30px 30px 40px;
	}
	> h1 {
		font-size: ${({ theme }) => theme.fontSizes.subTitleSize};
		font-weight: 500;
	}
	> h3 {
		font-size: ${({ theme }) => theme.fontSizes.xxl};
		font-weight: 300;
		margin-bottom: 40px;
		color: #aaa;
		@media ${({ theme }) => theme.device.mobileL} {
			margin-bottom: 15px;
		}
	}
`

export const FormCardHeader = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	> img {
		width: 40px;
		height: 40px;
	}
	> span {
		font-size: ${({ theme }) => theme.fontSizes.xxl};
		font-weight: 600;
	}
`

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
	@media ${({ theme }) => theme.device.mobileL} {
		gap: 10px;
	}
`
