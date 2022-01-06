import styled from 'styled-components'
import { Button } from 'style/common'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	.other-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		> h2 {
			font-size: ${({ theme }) => theme.fontSizes.xxxl};
			color: #777;
		}
		${Button} {
			width: 120px;
			height: 40px;
			font-size: 16px;
			border-radius: 5px;
			font-weight: 500;
		}
	}
	.other-images {
		display: flex;
		justify-content: space-between;
		gap: 20px;
	}
`
