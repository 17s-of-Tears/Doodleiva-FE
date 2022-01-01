import AppLayout from 'components/layout/AppLayout'
import SignupForm from 'components/form/SignupForm'
import { FormCard, FormCardHeader, FormContainer } from 'style/pages/FormStyled'

const Signup = () => {
	return (
		<AppLayout>
			<FormCard>
				<FormCardHeader>
					<img src="/img/logo_2.png" alt="logo" />
					<span>두드리바 회원가입!</span>
				</FormCardHeader>
				<h1>회원가입하기</h1>
				<h3>계정을 만들어 자유롭게 서비스를 이용해 보세요</h3>
				<FormContainer>
					<SignupForm />
				</FormContainer>
			</FormCard>
		</AppLayout>
	)
}

export default Signup
