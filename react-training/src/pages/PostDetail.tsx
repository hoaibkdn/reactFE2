/** @format */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostDetail } from './../store/reducers/postReducer';
import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch } from '../store';
import { useApi } from '../hooks/useApi';

const PostDetail = () => {
  const { detail, loading } = useApi(fetchPostDetail);
  if (!detail) {
    return null;
  }

  if (loading === 'pending') {
    return <p>Fetching detail .... </p>;
  }

  return (
    <div>
      <b>{detail.title}</b>
      <p>{detail.body}</p>
      {/* <b>Author: {detail.author}</b> */}
    </div>
  );
};

export default PostDetail;
