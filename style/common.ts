import styled from 'styled-components'

interface ButtonProps {
	width: number
	height: number
	borderRadius?: number
	bgColor?: string
}

export const Button = styled.button<ButtonProps>`
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
	border-radius: ${({ borderRadius }) => borderRadius || 0}px;
	background: ${({ bgColor }) => bgColor || '#16A085'};
	color: #fff;
	border: 0;
	font-size: 16px;
	box-shadow: 5px 5px 10px #eee;
	cursor: pointer;
	transition: 0.5s;
	&:hover {
		background-color: #1abc9c;
	}
`
