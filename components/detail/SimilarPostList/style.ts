import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	> h2 {
		font-size: ${({ theme }) => theme.fontSizes.xxxl};
		color: #777;
	}
	.other-images-gird {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 1fr);
		grid-gap: 20px;
		.other-images-container {
			width: 100%;
			position: relative;
			& ::after {
				display: block;
				content: '';
				padding-bottom: 100%;
			}
			.other-images-box {
				position: absolute;
				width: 100%;
				height: 100%;
			}
		}
	}
`
