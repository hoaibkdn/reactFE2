import { AuthAction, INCREASE_COUNT } from "../actions"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const fetchAuth = createAsyncThunk('auth/fetchAuth', async (dataUser) => {
	const responseAuth = await fetch('http:localhost:3000/auth')
	const auth = await responseAuth.json() // { username: '', password: ''  }
	return auth
})

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
			console.log('action @@@ login ', action)
			state.isLoggedIn = true
			})
		builder.addCase(INCREASE_COUNT, (state, action) => {
			state.count += 1
		})

		builder.addCase(fetchAuth.fulfilled, (state, action) => {
			console.log('action @@@ ', action)
			const currentUser = action.meta.arg // console.log action => 
			const responseUser = action.payload
			if(currentUser.username === responseUser.username && currentUser.password === responseUser.password) {
				state.isLoggedIn = true
				state.loading = 'succeed'
			}
		})
		builder.addCase(fetchAuth.rejected, (state, action) => {
			console.log('action @@@ reject ', action)
			state.isLoggedIn = false
			state.loading = 'failed'
			// const currentUser = action.meta // console.log action => 
		})

		builder.addCase(fetchAuth.rejected, (state, action) => {
			console.log('action @@@ reject ', action)
			state.loading = 'pending'
			// const currentUser = action.meta // console.log action => 
		})
	}
})
const authReducer = authSlice.reducer
export default authReducer