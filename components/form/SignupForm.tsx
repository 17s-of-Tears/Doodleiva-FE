import { ChangeEvent, useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import Link from 'next/link'

import useInput from 'hooks/useInput'
import { FormButton, FormCardContent, FormCardFooter, FormInput } from './style'

const SignupForm = () => {
	const [email, onChangeEmail] = useInput()
	const [nickname, onChangeNickname] = useInput()
	const [password, onChangePassword] = useInput()
	const [passwordCheck, onChangePasswordCheck] = useInput('')
	const [term, setTerm] = useState(false)

	const onChangeTerm = useCallback(() => setTerm(prev => !prev), [])

	const onSubmitLoginForm = useCallback(
		(e: ChangeEvent<HTMLFormElement>) => {
			e.preventDefault()
			if (!email || !nickname || !password || !passwordCheck)
				return toast.error('모든 정보를 입력해주세요!')
			if (password !== passwordCheck)
				return toast.error('비밀번호를 확인해주세요!')
			if (!term) return toast.error('이용약관을 동의해주세요!')
			const signUpData = { email, nickname, password }
			console.log(signUpData)
		},
		[email, nickname, password, passwordCheck, term]
	)

	return (
		<>
			<FormCardContent onSubmit={onSubmitLoginForm}>
				<FormInput
					type="email"
					placeholder="이메일을 입력해주세요!"
					value={email}
					onChange={onChangeEmail}
				/>
				<FormInput
					type="text"
					placeholder="닉네임을 입력해주세요!"
					value={nickname}
					onChange={onChangeNickname}
				/>
				<FormInput
					type="password"
					placeholder="비밀번호를 입력해주세요!"
					value={password}
					onChange={onChangePassword}
				/>
				<FormInput
					type="password"
					placeholder="비밀번호를 확인해주세요!"
					value={passwordCheck}
					onChange={onChangePasswordCheck}
				/>
				<div>
					<input
						type="checkbox"
						id="check"
						checked={term}
						onChange={onChangeTerm}
					/>
					<label htmlFor="check">열심히 활동할 것을 약속합니다!</label>
				</div>
				<FormButton type="submit">로그인</FormButton>
			</FormCardContent>
			<FormCardFooter>
				<span>계정이 있으신가요?</span>
				<Link href="/login">
					<a>로그인 하러가기</a>
				</Link>
			</FormCardFooter>
		</>
	)
}

export default SignupForm
