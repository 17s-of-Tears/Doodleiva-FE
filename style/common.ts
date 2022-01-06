import styled from 'styled-components'

export const Button = styled.button`
	width: 200px;
	height: 50px;
	border-radius: 10px;
	background: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.white};
	border: 0;
	font-size: 20px;
	font-weight: 500;
	box-shadow: 5px 5px 10px ${({ theme }) => theme.colors.gray_w};
	cursor: pointer;
	transition: 0.5s;
	&:hover {
		filter: brightness(80%);
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
	border: 1px solid #eee;
	border-radius: 5px;
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

export const Avatar = styled.img`
	width: 100px;
	border-radius: 50%;
`

export const ImageBox = styled.div<{ img: string }>`
	position: relative;
	width: 100%;
	transition: 0.5s;
	cursor: pointer;
	> div {
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 10px;
		box-shadow: 5px 5px 10px ${({ theme }) => theme.colors.gray_w};
		background-image: url(${({ img }) => img});
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
	&::after {
		content: '';
		display: block;
		padding-bottom: 100%;
	}
	&:hover {
		filter: brightness(60%);
		z-index: 0;
	}
`
