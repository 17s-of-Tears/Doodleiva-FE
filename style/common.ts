import styled from 'styled-components'

interface ButtonProps {
	width: number
	height: number
	radius?: number
	size: number
	mt?: number
	bgColor?: 'p' | 's'
}

export const Button = styled.button<ButtonProps>`
	width: ${({ width }) => width || 200}px;
	height: ${({ height }) => height || 50}px;
	border-radius: ${({ radius }) => radius || 10}px;
	background: ${({ bgColor, theme }) =>
		bgColor === 'p' ? theme.colors.primary : theme.colors.secondary};
	color: ${({ theme }) => theme.colors.white};
	border: 0;
	font-size: ${({ size }) => size}px;
	box-shadow: 5px 5px 10px ${({ theme }) => theme.colors.gray_w};
	margin-top: ${({ mt }) => mt}px;
	cursor: pointer;
	transition: 0.5s;
	&:hover {
		filter: brightness(80%);
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: ${({ width }) => width || 200 * 0.65}px;
		height: ${({ height }) => height * 0.8}px;
		font-size: ${({ size }) => size * 0.7}px;
	}
`

export const Card = styled.div`
	width: 200px;
	height: 150px;
	border-radius: 10px;
	background: ${({ theme }) => theme.colors.white};
	box-shadow: 5px 5px 10px ${({ theme }) => theme.colors.gray_w};
`

export const Input = styled.input`
	width: 500px;
	height: 40px;
	padding: 0 10px;
	border: 1px solid #d5d5d5;
	border-radius: 5px;
	background: #f3f3f3;
	font-family: 'Noto Sans KR', sans-serif;
	font-size: ${({ theme }) => theme.fontSizes.base};
	color: ${({ theme }) => theme.colors.gray_b};
	outline: 1px solid ${({ theme }) => theme.colors.gray_w};
	transition: 0.5s;
	& :focus {
		animation-name: border-focus;
		animation-duration: 0.5s;
		animation-fill-mode: forwards;
		outline: 1px solid ${({ theme }) => theme.colors.secondary};
	}
	@keyframes border-focus {
		from {
			border-radius: 5px;
		}
		to {
			border-radius: 10px;
		}
	}
`
