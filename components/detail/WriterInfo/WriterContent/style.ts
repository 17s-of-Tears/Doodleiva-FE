import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	.writer-title {
		font-size: ${({ theme }) => theme.fontSizes.subTitleSize};
		font-weight: 500;
	}
	.writer-description {
		font-size: ${({ theme }) => theme.fontSizes.xl};
		color: #777;
	}
	.writer-hashtag {
		display: flex;
		gap: 10px;
		a {
			font-size: ${({ theme }) => theme.fontSizes.xl};
			font-weight: 400;
		}
	}
	.wrtier-other-info {
		font-size: ${({ theme }) => theme.fontSizes.xl};
		font-weight: 300;
		display: flex;
		gap: 10px;
	}
	.wrtier-date {
		display: flex;
		justify-content: space-between;
		> span {
			font-size: ${({ theme }) => theme.fontSizes.xl};
			font-weight: 300;
		}
		.wrtier-icons {
			cursor: pointer;
			display: flex;
			gap: 10px;
		}
	}
`
