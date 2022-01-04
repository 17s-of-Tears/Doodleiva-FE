import React from 'react'
import styled from 'styled-components'
import WriterContent from './WriterContent'
import WriterHeader from './WriterHeader'

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 50px;
`

const WriterInfo = () => {
	return (
		<Container>
			<WriterHeader />
			<WriterContent />
		</Container>
	)
}

export default WriterInfo
