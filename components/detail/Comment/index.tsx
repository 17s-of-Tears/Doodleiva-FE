import styled from 'styled-components'
import CommentForm from './CommentForm'
import CommentHeader from './CommentHeader'
import CommentList from './CommentList'

const Container = styled.div`
	width: 100%;
	border-radius: 10px;
	padding: 20px 0 40px;
	background-color: #f5f5f5;
	hr {
		border: 1px solid #e5e5e5;
	}
`

const Comment = () => {
	return (
		<Container>
			<CommentHeader />
			<hr />
			<CommentForm />
			<CommentList />
		</Container>
	)
}

export default Comment
