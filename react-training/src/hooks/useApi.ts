/** @format */

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import type { AppDispatch } from './../store';

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
    dispatch(fetchFunction(params.postId));
    return () => {
      // 'will unmount';
      clearTimeout(delayTimer);
    };
  }, []); // []: did mount

  return stateData
};
