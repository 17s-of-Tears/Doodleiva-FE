import styled from 'styled-components'
import { Card } from 'style/common'

export const FormCard = styled(Card)`
	width: auto;
	height: auto;
	display: flex;
	gap: 10px;
	flex-direction: column;
	align-items: flex-start;
	padding: 50px 30px 70px;
	margin: auto;
	> h1 {
		font-size: ${({ theme }) => theme.fontSizes.subTitleSize};
		font-weight: 500;
	}
	> h3 {
		font-size: ${({ theme }) => theme.fontSizes.xxxl};
		font-weight: 300;
		margin-bottom: 40px;
		color: #aaa;
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
`

export const FormCardContent = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
`

export const FormCardFooter = styled.div`
	display: flex;
	gap: 10px;
	> span {
		color: #aaa;
		font-weight: 300;
	}
`
