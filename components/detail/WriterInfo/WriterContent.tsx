import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { BsBookmarkCheckFill, BsBookmarkPlus } from 'react-icons/bs'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
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

const dummyDatas = ['#김코드싸개', '#코드싸개', '#노경호']

const WriterContent = () => {
	const [isLike, setIsLike] = useState(false)
	const [isBookMark, setIsBookMark] = useState(false)

	const onClickLike = useCallback(() => {
		setIsLike(true)
		toast.success('이 작품을 좋아요 합니다!')
	}, [])

	const onClickUnLike = useCallback(() => {
		setIsLike(false)
		toast.success('좋아요를 취소 합니다!')
	}, [])

	const onClickBookMark = useCallback(() => {
		setIsBookMark(true)
		toast.success('이 작품을 북마크에 저장 합니다!')
	}, [])

	const onClickUnBookMark = useCallback(() => {
		setIsBookMark(false)
		toast.success('북마크에서 삭제 합니다!')
	}, [])

	return (
		<Container>
			<span className="writer-title">교향악이다 뼈 끝에 스며들어</span>
			<span className="writer-description">
				교향악이다 뼈 끝에 스며들어 가는 열락의 소리다이것은 피어나기 전인
				유소년에게서 구하지 못할 바이며 시들어 가는 노년에게서 구하지 못할
				바이며 오직 우리 청춘에서만 구할 수 있는 것이다 청춘은 인생의 황금시대다
			</span>
			<div className="writer-hashtag">
				{dummyDatas.map((v, i) => (
					<Link key={i} href="/">
						<a>{v}</a>
					</Link>
				))}
			</div>
			<div className="wrtier-other-info">
				<span>좋아요 1,000</span>
				<span>북마크 1,000</span>
				<span>조회수 1,000</span>
			</div>
			<div className="wrtier-date">
				<span>2022년 01월 02일 오후 8:42</span>
				<div className="wrtier-icons">
					{isLike ? (
						<AiFillLike size={20} onClick={onClickUnLike} fill="#16A085" />
					) : (
						<AiOutlineLike size={20} onClick={onClickLike} />
					)}
					{isBookMark ? (
						<BsBookmarkCheckFill
							size={20}
							onClick={onClickUnBookMark}
							fill="#16A085"
						/>
					) : (
						<BsBookmarkPlus size={20} onClick={onClickBookMark} />
					)}
				</div>
			</div>
		</Container>
	)
}

export default WriterContent
