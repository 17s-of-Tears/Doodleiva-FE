import { useCallback } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import styled from 'styled-components'

const FooterContainer = styled.footer`
	width: 85%;
	height: 70px;
	margin: 0 auto;
	background: ${({ theme }) => theme.colors.white};
	border-radius: 10px 10px 0 0;
	box-shadow: 5px -5px 10px ${({ theme }) => theme.colors.gray_w};
	display: flex;
	justify-content: center;
	align-items: center;
`
const FooterIcon = styled(AiFillGithub)`
	font-size: 30px;
	cursor: pointer;
	transition: all.5s;
	fill: ${({ theme }) => theme.colors.gray_b};
	&:hover {
		fill: ${({ theme }) => theme.colors.primary};
	}
`

const Footer = () => {
	const toYear = useCallback(() => new Date().getFullYear(), [])

	return (
		<FooterContainer>
			<span>Copyright &copy;{toYear()} Changyu</span>
			<span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
			<a
				href="https://github.com/changyuyeo"
				target="_blank"
				rel="noreferrer noopener"
			>
				<FooterIcon />
			</a>
		</FooterContainer>
	)
}

export default Footer
