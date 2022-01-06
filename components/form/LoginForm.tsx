import { ChangeEvent, useCallback } from 'react'
import Link from 'next/link'

import useInput from 'hooks/useInput'
import { FormButton, FormCardContent, FormCardFooter, FormInput } from './style'

const LoginForm = () => {
	const [email, onChangeEmail] = useInput()
	const [password, onChangePassword] = useInput()

	const onSubmitLoginForm = useCallback(
		(e: ChangeEvent<HTMLFormElement>) => {
			e.preventDefault()
			console.log('email', email)
			console.log('password', password)
		},
		[email, password]
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
					type="password"
					placeholder="비밀번호를 입력해주세요!"
					value={password}
					onChange={onChangePassword}
				/>
				<FormButton type="submit">로그인</FormButton>
			</FormCardContent>
			<FormCardFooter>
				<span>계정이 없으신가요?</span>
				<Link href="/signup">
					<a>회원가입 하러가기</a>
				</Link>
			</FormCardFooter>
		</>
	)
}

export default LoginForm
