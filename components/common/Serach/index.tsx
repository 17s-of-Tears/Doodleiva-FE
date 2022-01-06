import { FiSearch } from 'react-icons/fi'
import { useMediaQuery } from 'react-responsive'
import { SerachButton, SerachContainer, SerachInput } from './style'

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
