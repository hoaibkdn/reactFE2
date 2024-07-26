/** @format */

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import type { AppDispatch } from './../store';
import { fetchPosts } from './../store/reducers/postReducer';

export const useApi = (fetchFunction: Function) => {
  const delayTimer = setTimeout(() => {}, 1000);
  const stateData = useSelector((state: any) => state.post);
  const dispatch = useDispatch<AppDispatch>();
	const params = useParams();
  // feature
  useEffect(() => {
    // component did update
    // component did mount
    // component will unmount
    // setCount((prevCount) => prevCount + 1);
    dispatch(fetchFunction(params.postId));
    console.log('did mount');
    return () => {
      console.log('will unmount');
      clearTimeout(delayTimer);
    };
  }, []); // did mount

  return stateData
};
