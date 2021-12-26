import Header from 'components/common/Header'
import { FC, ReactNode } from 'react'

interface Props {
	children: ReactNode
}

const AppLayout: FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	)
}

export default AppLayout
