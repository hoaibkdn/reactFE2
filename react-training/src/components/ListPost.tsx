/** @format */
import { useState, useEffect } from 'react';
import PostItem from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { INCREASE_COUNT } from '../store/actions';
import { useNavigate, Navigate } from 'react-router-dom';
import { fetchPosts } from './../store/reducers/postReducer';
import type { AppDispatch } from './../store';

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
  // const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  const delayTimer = setTimeout(() => {}, 1000);
  const { count, isLoggedIn } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  console.log('isLoggedIn ', isLoggedIn);
  // feature
  useEffect(() => {
    // component did update
    // component did mount
    // component will unmount
    // setCount((prevCount) => prevCount + 1);
    dispatch(fetchPosts());
    console.log('did mount');
    return () => {
      console.log('will unmount');
      clearTimeout(delayTimer);
    };
  }, []); // did mount

  useEffect(() => {
    async function fetchData() {
      const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts');
      const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users');
      const responsePosts = await fetchPosts;
      const responseUsers = await fetchUsers;
      const posts = await responsePosts.json();
      const users = await responseUsers.json();

      // code here
      const objUser = users.reduce(
        (acc: { [key: number]: User }, user: User) => {
          if (user?.id) {
            acc[user.id] = user;
          }
          return acc;
        },
        {}
      ); // O(m)
      const convertedPosts = posts.reduce(
        (acc: PostWithAuthor[], post: Post) => {
          // O(n)
          // const user = users.find((user) => user.id === post.userId); // O(m)
          const user = objUser[post.userId]; // O(1)
          if (post) {
            acc.push({
              ...post,
              author: user.name,
            });
          }
          return acc;
        },
        []
      );
      setPosts(convertedPosts);

      console.log('data ', convertedPosts);
    }

    fetchData();
  }, []); // did mount

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
  return (
    <>
      <p>{count}</p>
      <button onClick={increaseCount}>Increase</button>
      <h3>List posts</h3>
      {posts.map((item: PostWithAuthor) => (
        <PostItem key={item.id} {...item} />
      ))}
    </>
  );
};

export default ListPost;

// Homework
// 1. fetch users
// 2. { id: postId, title, body, author: name }
// 3. render list post with author on UI, separate post into an individual component
