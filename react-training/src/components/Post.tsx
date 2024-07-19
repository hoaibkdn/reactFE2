/** @format */
import { memo } from 'react';

type Props = {
  id: number;
  title: string;
  body: string;
  author: string;
};

const Post = (props: Props) => {
  // console.log('render post ', props.id);
  return (
    <div key={props.id}>
      <b>{props.title}</b>
      <p>{props.body}</p>
      <b>Author: {props.author}</b>
    </div>
  );
};

export default memo(Post);
