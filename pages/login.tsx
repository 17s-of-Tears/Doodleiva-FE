import AppLayout from 'components/layout/AppLayout'
import useInput from 'hooks/useInput'
import Link from 'next/link'
import React, { ChangeEvent, useCallback } from 'react'
import { Button, Input } from 'style/common'
import {
	FormCard,
	FormCardContent,
	FormCardFooter,
	FormCardHeader,
	FormContainer
} from 'style/pages/formStyled'

const Login = () => {
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
		<AppLayout>
			<FormCard>
				<FormCardHeader>
					<img src="/img/logo_2.png" alt="logo" />
					<span>두드리바 로그인!</span>
				</FormCardHeader>
				<h1>로그인하기</h1>
				<h3>로그인하고 자유롭게 서비스를 이용하세요</h3>
				<FormContainer>
					<FormCardContent onSubmit={onSubmitLoginForm}>
						<Input
							type="email"
							placeholder="이메일을 입력해주세요!"
							value={email}
							onChange={onChangeEmail}
						/>
						<Input
							type="password"
							placeholder="비밀번호를 입력해주세요!"
							value={password}
							onChange={onChangePassword}
						/>
						<Button
							width={200}
							height={50}
							bgColor="p"
							radius={10}
							size={25}
							mt={40}
							type="submit"
						>
							로그인
						</Button>
					</FormCardContent>
					<FormCardFooter>
						<span>계정이 없으신가요?</span>
						<Link href="/sign">
							<a>회원가입 하러가기</a>
						</Link>
					</FormCardFooter>
				</FormContainer>
			</FormCard>
		</AppLayout>
	)
}

export default Login
