import {
	ChangeEvent,
	ChangeEventHandler,
	Dispatch,
	SetStateAction,
	useCallback,
	useState
} from 'react'

type ChangeType =
	| ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
	| undefined
type setStateType = Dispatch<SetStateAction<string>>

const useInput = (initialValue = ''): [string, ChangeType, setStateType] => {
	const [value, setValue] = useState(initialValue)
	const onChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}, [])
	return [value, onChangeValue, setValue]
}

export default useInput
