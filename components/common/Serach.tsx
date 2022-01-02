import { FiSearch } from 'react-icons/fi'
import styled from 'styled-components'

import { Button, Input } from 'style/common'
import { useMediaQuery } from 'react-responsive'

const SerachContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px 0;
	background-color: #f5f5f5;
	> h1 {
		font-size: ${({ theme }) => theme.fontSizes.titleSize};
		font-weight: 400;
	}
	> span {
		font-size: ${({ theme }) => theme.fontSizes.xl};
		font-weight: 500;
		color: #777;
	}
	.serach-form-box {
		margin: 50px 0;
		display: flex;
		align-items: center;
		gap: 10px;
	}
`

const SerachInput = styled(Input)`
	background-size: 23px;
	background-image: url('/img/search.png');
	background-position: 10px center;
	background-repeat: no-repeat;
	padding-left: 40px;
`

const SerachButton = styled(Button)`
	width: 100px;
	height: 42px;
	background-color: ${({ theme }) => theme.colors.secondary};
	border-radius: 5px;
`

const Serach = () => {
	const isMobile = useMediaQuery({
		query: '(max-width: 425px)'
	})

	return (
		<SerachContainer>
			<h1>낙서 찾아보기</h1>
			<span>제목이나 해시태그로 검색해보세요!</span>
			<div className="serach-form-box">
				<SerachInput type="text" placeholder="작품을 검색해 보세요!" />
				<SerachButton>{isMobile ? <FiSearch /> : '검색'}</SerachButton>
			</div>
		</SerachContainer>
	)
}

export default Serach
