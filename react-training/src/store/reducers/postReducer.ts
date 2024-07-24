import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchPosts = createAsyncThunk('posts/fetchPosts' , async () => {
	const dataResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
	const posts = await dataResponse.json()
 
  // HOMEWORK
  // 1. Fetch user here
	return posts

})

const initialState = {
	data: [],
	loading: 'idle'
}

const postsSlice = createSlice({
	name: 'posts',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = 'pending'
    })
		builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = 'rejected'
    })	
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			state.loading = 'succeed'
			console.log('action ', action)

      //  2. When you have data of posts + users
      // Combine them here

      // Add user to the state array
      // state.entities.push(action.payload)
    })
  },
})

const postsReducer = postsSlice.reducer
export default postsReducer