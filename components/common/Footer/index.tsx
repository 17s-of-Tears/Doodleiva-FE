import { useCallback } from 'react'
import { FooterContainer, FooterIcon } from './style'

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
