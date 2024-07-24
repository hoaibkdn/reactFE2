/** @format */
import { memo, useCallback } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';

type Props = {
  id: number;
  title: string;
  body: string;
  author: string;
};

const Post = (props: Props) => {
  const navigate = useNavigate();
  const param = useParams();
  // const postId = getParam('')
  console.log('param ', param);

  // const openDetail = useCallback(() => {
  //   navigate('/post', createSearchParams({
  //     search: id,
  //   }));
  // }, []);

  return (
    <div>
      <Link to={`/post/${props.id}`}>
        <b>{props.title}</b>
      </Link>
      <p>{props.body}</p>
      <b>Author: {props.author}</b>
    </div>
  );
};

export default memo(Post);
