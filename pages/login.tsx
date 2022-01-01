import LoginForm from 'components/form/LoginForm'
import AppLayout from 'components/layout/AppLayout'
import { FormCard, FormCardHeader, FormContainer } from 'style/pages/FormStyled'

const Login = () => {
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
					<LoginForm />
				</FormContainer>
			</FormCard>
		</AppLayout>
	)
}

export default Login
