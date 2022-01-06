import { AnyAction, CombinedState, combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import userSlice, { UserState } from 'store/user'

export interface State {
	user: UserState
}

const rootReducer = (state: State, action: AnyAction): CombinedState<State> => {
	switch (action.type) {
		case HYDRATE:
			return action.payload
		default: {
			const combineReducer = combineReducers({
				user: userSlice
			})
			return combineReducer(state, action)
		}
	}
}

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
