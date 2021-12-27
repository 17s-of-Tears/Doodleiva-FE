import styled from 'styled-components'

interface ButtonProps {
	width: number
	height: number
	radius?: number
	size: number
	bgColor: 'p' | 's'
}

export const Button = styled.button<ButtonProps>`
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
	border-radius: ${({ radius }) => radius || 0}px;
	background: ${({ bgColor, theme }) =>
		bgColor === 'p' ? theme.colors.primary : theme.colors.secondary};
	color: ${({ theme }) => theme.colors.white};
	border: 0;
	font-size: ${({ size }) => size}px;
	box-shadow: 5px 5px 10px ${({ theme }) => theme.colors.gray_w};
	cursor: pointer;
	transition: 0.5s;
	&:hover {
		filter: brightness(80%);
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: ${({ width }) => width * 0.65}px;
		height: ${({ height }) => height * 0.8}px;
		font-size: ${({ size }) => size * 0.7}px;
	}
`
