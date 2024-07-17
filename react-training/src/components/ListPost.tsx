/** @format */
import { useState, useEffect } from 'react';

interface Post {
  title: string;
  body: string;
  id: number;
}

const ListPost = () => {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  const delayTimer = setTimeout(() => {}, 1000);

  // feature
  useEffect(() => {
    // component did update
    // component did mount
    // component will unmount
    setCount((prevCount) => prevCount + 1);

    console.log('did mount');
    return () => {
      console.log('will unmount');
      clearTimeout(delayTimer);
    };
  }, []); // did mount

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();
      setPosts(data);

      console.log('data ', data);
    }

    fetchData();
  }, []); // did mount

  return (
    <>
      <h3>List posts</h3>
      {posts.map((item: Post) => (
        <div key={item.id}>
          <b>{item.title}</b>
          <p>{item.body}</p>
        </div>
      ))}
      <p>{count}</p>
    </>
  );
};

export default ListPost;

// Homework
// 1. fetch users
// 2. { id: postId, title, body, author: name }
// 3. render list post with author on UI, separate post into an individual component
