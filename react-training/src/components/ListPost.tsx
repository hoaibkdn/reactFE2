/** @format */
import { useState, useEffect } from 'react';
import PostItem from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { INCREASE_COUNT } from '../store/actions';
import { useNavigate, Navigate } from 'react-router-dom';
import { fetchPosts } from './../store/reducers/postReducer';
import type { AppDispatch } from './../store';
import { useApi } from './../hooks/useApi';

interface Post {
  title: string;
  body: string;
  id: number;
  userId: number;
}

interface User {
  id: number;
  name: string;
}

interface PostWithAuthor extends Post {
  author: string;
}

const ListPost = () => {
  const { count, isLoggedIn } = useSelector((state: any) => state.auth);
  const { data: posts, loading, ids } = useApi(fetchPosts);
  const dispatch = useDispatch<AppDispatch>();

  const increaseCount = () => {
    // setCount((prevCount) => prevCount + 1);
    dispatch({
      type: INCREASE_COUNT,
      data: {
        increasedDistance: 5,
      },
    });
  };

  if (!isLoggedIn) {
    return <Navigate to='/login' replace={true} />;
  }

  if (loading === 'pending') {
    return <p>Fetching...</p>;
  }
  return (
    <>
      <p>{count}</p>
      <button onClick={increaseCount}>Increase</button>
      <h3>List posts</h3>
      {ids.map((id: PostWithAuthor['id']) => (
        <PostItem key={id} {...posts[id]} />
      ))}
    </>
  );
};

export default ListPost;

// Homework
// 1. fetch users
// 2. { id: postId, title, body, author: name }
// 3. render list post with author on UI, separate post into an individual component
