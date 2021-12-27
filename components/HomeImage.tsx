import styled from 'styled-components'

interface ImgProps {
	top?: number
	left?: number
	bottom?: number
	right?: number
}

const DoodleImg = styled.img<ImgProps>`
	position: absolute;
	top: ${({ top }) => top && top}%;
	left: ${({ left }) => left && left}%;
	bottom: ${({ bottom }) => bottom && bottom}%;
	right: ${({ right }) => right && right}%;
	@media ${({ theme }) => theme.device.NoteBook} {
		width: 130px;
		height: auto;
	}
	@media ${({ theme }) => theme.device.tabletL} {
		top: ${({ top }) => top && top - 5}%;
		left: ${({ left }) => left && left - 7}%;
		bottom: ${({ bottom }) => bottom && bottom - 5}%;
		right: ${({ right }) => right && right - 7}%;
	}
`

const HomeImage = () => {
	return (
		<>
			<DoodleImg src="/img/image_4.png" alt="image_4.png" top={18} left={15} />
			<DoodleImg src="/img/image_2.png" alt="image_2.png" top={20} right={20} />
			<DoodleImg
				src="/img/image_5.png"
				alt="image_5.png"
				left={15}
				bottom={20}
			/>
			<DoodleImg
				src="/img/image_6.png"
				alt="image_6.png"
				right={20}
				bottom={20}
			/>
		</>
	)
}

export default HomeImage
