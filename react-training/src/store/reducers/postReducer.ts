/** @format */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { combinePostsAndUsers } from './../../utils/postTransformation'
import type { PostWithAuthor, Post } from '../../types/post';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts');
  const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users');
  const responsePosts = await fetchPosts;
  const responseUsers = await fetchUsers;
  const posts = await responsePosts.json();
  const users = await responseUsers.json();
  
  // HOMEWORK
  // 1. Fetch user here
  return combinePostsAndUsers(posts, users);
});

export const fetchPostDetail = createAsyncThunk('post/fetchPostDetail', async (id: number) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id); 
  const data = await response.json()
  return data
})


const initialState: {
  data: Record<PostWithAuthor['id'], PostWithAuthor>, 
  ids: Array<PostWithAuthor['id']>,
  detail?: Post | null,
  loading: 'idle' | 'pending' | 'rejected' | 'succeed'
} = {
  data: {}, // { 1: { body, tittle } }
  ids: [],
  loading: 'idle',
  detail: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = 'rejected';
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = 'succeed';
      console.log('action ', action);
      const postsUsers = action.payload

      // normalize shape data
      for(let i = 0; i < postsUsers.length; i++) {
        const post = postsUsers[i] 
        if(!state.data[post.id])  {
          state.data[post.id] = post 
          state.ids.push(post.id)
        }
      }
    });
    builder.addCase(fetchPostDetail.pending, (state, action) => {
      state.loading = 'pending'
    })
    builder.addCase(fetchPostDetail.rejected, (state, action) => {
      state.loading = 'rejected'
    })
    builder.addCase(fetchPostDetail.fulfilled, (state, action) => {
      console.log('action post detail ', action)
      state.loading = 'succeed'
      state.detail = action.payload
    })
  },
});

const postsReducer = postsSlice.reducer;
export default postsReducer;
