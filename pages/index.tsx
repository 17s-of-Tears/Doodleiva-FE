import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/reducer'
import { logIn, logOut } from 'store/user'

const Home = () => {
	const dispatch = useDispatch()
	const { isLoggingIn } = useSelector((state: RootState) => state.user)

	const onClickLogIn = useCallback(() => {
		dispatch(logIn())
	}, [dispatch])

	const onClickLogOut = useCallback(() => {
		dispatch(logOut())
	}, [dispatch])

	return (
		<>
			{isLoggingIn ? '로그인!' : '로그인해주세요'}
			{isLoggingIn ? (
				<button onClick={onClickLogOut}>로그아웃</button>
			) : (
				<button onClick={onClickLogIn}>로그인</button>
			)}
		</>
	)
}

export default Home
