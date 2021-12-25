import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
	isLoggingIn: boolean
}

const initialState: UserState = {
	isLoggingIn: false
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logIn: (state: UserState) => {
			state.isLoggingIn = true
		},
		logOut: (state: UserState) => {
			state.isLoggingIn = false
		}
	},
	extraReducers: {}
})

export const { logIn, logOut } = userSlice.actions
export default userSlice.reducer
