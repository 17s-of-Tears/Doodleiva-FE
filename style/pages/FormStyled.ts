import styled from 'styled-components'
import { Button, Card, Input } from 'style/Common'

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

export const FormCardContent = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	@media ${({ theme }) => theme.device.mobileL} {
		gap: 10px;
	}
`

export const FormCardFooter = styled.div`
	display: flex;
	gap: 10px;
	> span {
		color: #aaa;
		font-weight: 300;
	}
`

export const FormInput = styled(Input)`
	@media ${({ theme }) => theme.device.tabletL} {
		width: 400px;
	}
	@media only screen and (max-width: 483px) {
		width: 350px;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		width: 260px;
		height: 30px;
	}
`

export const FormButton = styled(Button)`
	width: 200px;
	height: 50px;
	background: ${({ theme }) => theme.colors.primary};
	border-radius: 10px;
	font-size: 25px;
	@media ${({ theme }) => theme.device.tablet} {
		width: ${200 * 0.65}px;
		height: ${50 * 0.8}px;
		font-size: ${25 * 0.7}px;
		margin-top: 0;
	}
`
