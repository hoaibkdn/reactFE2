import { Post, PostWithAuthor, User } from '../types/post';

export const combinePostsAndUsers = (posts: Post[], users: User[]) => {
  const objUser = users.reduce((acc: { [key: number]: User }, user: User) => {
    if (user?.id) {
      acc[user.id] = user;
    }
    return acc;
  }, {}); // O(m)
  const convertedPosts = posts.reduce((acc: PostWithAuthor[], post: Post) => {
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
  }, []);
  return convertedPosts
};