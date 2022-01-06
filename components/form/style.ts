import styled from 'styled-components'
import { Button, Input } from 'style/common'

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
