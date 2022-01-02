import React, { useCallback, useState } from 'react'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { BsBookmarkPlusFill, BsBookmarkPlus } from 'react-icons/bs'
import { toast } from 'react-toastify'
import { DetailCard } from 'style/pages/detail'
import styled from 'styled-components'

const DetailInfoContainer = styled(DetailCard)`
	> h1 {
		font-size: ${({ theme }) => theme.fontSizes.subTitleSize};
		font-weight: 500;
		padding: 20px 30px 0;
	}
	> hr {
		background-color: #e5e5e5;
		margin: 20px 0;
		border: none;
		height: 2px;
	}
	.detail-info {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 0 30px;
		.info-description {
			color: #777;
		}
		.info-hashtag {
			display: flex;
			gap: 10px;
			color: ${({ theme }) => theme.colors.secondary};
			span {
				cursor: pointer;
				transition: 0.5s;
				&:hover {
					color: ${({ theme }) => theme.colors.primary};
				}
			}
		}
		.info-likes-box {
			display: flex;
			gap: 10px;
		}
		.info-footer {
			display: flex;
			justify-content: space-between;
			margin-bottom: 20px;
			.info-icon-group {
				display: flex;
				gap: 10px;
				color: ${({ theme }) => theme.colors.primary};
				* {
					cursor: pointer;
				}
			}
		}
	}
`

const DetailInfo = () => {
	const [like, setLike] = useState(false)
	const [bookmark, setBookmark] = useState(false)

	const onClickLike = useCallback(() => {
		setLike(true)
		toast.success('이 작품을 좋아요 합니다!')
	}, [])
	const onClickUnLike = useCallback(() => {
		setLike(false)
		toast.success('좋아요를 취소 합니다!')
	}, [])

	const onClickBookMark = useCallback(() => {
		setBookmark(true)
		toast.success('북마크에 등록했습니다!')
	}, [])
	const onClickUnBookMark = useCallback(() => {
		setBookmark(false)
		toast.success('북마크에서 삭제했습니다!')
	}, [])

	return (
		<DetailInfoContainer>
			<h1>교향악이다 뼈 끝에 스며들어</h1>
			<hr />
			<div className="detail-info">
				<p className="info-description">
					교향악이다 뼈 끝에 스며들어 가는 열락의 소리다이것은 피어나기 전인
					유소년에게서 구하지 못할 바이며 시들어 가는 노년에게서 구하지 못할
					바이며 오직 우리 청춘에서만 구할 수 있는 것이다 청춘은 인생의
					황금시대다
				</p>
				<div className="info-hashtag">
					{['#김코드싸개', '#코드싸개', '#노경호'].map((v, i) => (
						<span key={i}>{v}</span>
					))}
				</div>
				<div className="info-likes-box">
					<span>좋아요 1,000</span>
					<span>북마크 1,000</span>
					<span>조회수 1,000</span>
				</div>
				<div className="info-footer">
					<span>2022년 01월 02일 오후 8:42</span>
					<div className="info-icon-group">
						{like ? (
							<AiFillLike size={20} onClick={onClickUnLike} />
						) : (
							<AiOutlineLike size={20} fill="#333" onClick={onClickLike} />
						)}
						{bookmark ? (
							<BsBookmarkPlusFill size={20} onClick={onClickUnBookMark} />
						) : (
							<BsBookmarkPlus size={20} fill="#333" onClick={onClickBookMark} />
						)}
					</div>
				</div>
			</div>
		</DetailInfoContainer>
	)
}

export default DetailInfo
