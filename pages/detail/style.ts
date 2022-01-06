import styled from 'styled-components'

export const Container = styled.div`
	background-color: #e5e5e5;
	padding: 20px 0 200px;
	@media ${({ theme }) => theme.device.NoteBook} {
		padding: 10px 0 100px;
	}
	.detail-wrapper {
		width: 85.4%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		.detail-left {
			width: 58%;
			display: flex;
			flex-direction: column;
			gap: 20px;
			> img {
				border-radius: 10px;
			}
		}
		.detail-right {
			display: flex;
			flex-direction: column;
			gap: 50px;
			width: 40%;
		}
	}
`

export const ResponsiveView = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 20px;
	gap: 30px;
`
