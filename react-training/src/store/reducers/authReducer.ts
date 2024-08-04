import { AuthAction, INCREASE_COUNT } from "../actions"
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
 isLoggedIn: false,
 loading: 'idle',
 count: 0,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(AuthAction.LOGIN, (state, action) => {
			state.isLoggedIn = true
		})
		builder.addCase(INCREASE_COUNT, (state, action) => {
			state.count += 1
		})
	}
})
const authReducer = authSlice.reducer
export default authReducer