export interface Post {
  title: string;
  body: string;
  id: number;
  userId: number;
}

export interface User {
  id: number;
  name: string;
}

export interface PostWithAuthor extends Post {
  author: string;
}