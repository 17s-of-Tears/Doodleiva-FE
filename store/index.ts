import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { Reducer, AnyAction } from 'redux'
import rootReducer, { State } from './reducer'

const isDev = process.env.NODE_ENV === 'development'

const createStore = () => {
	const store = configureStore({
		reducer: rootReducer as Reducer<State, AnyAction>,
		devTools: isDev
	})
	return store
}

const wrapper = createWrapper(createStore)
export default wrapper
