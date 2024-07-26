/** @format */

import React, { useState, MouseEvent, useContext } from 'react';
import Form from './components/Form';
import LoginForm from './components/LoginForm';
import ListPost from './components/ListPost';
import logo from './logo.svg';
import './App.css';
import { AppContext } from './context';
import Example from './pages/Example';
import Tabs from './components/TabsRedux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import PostDetail from './pages/PostDetail';

// props
// state
// setState: asynchronous (batch update)
interface Product {
  id: number;
  name: string;
  quantity: number;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <ListPost />,
      },
      {
        path: '/post/:postId',
        element: <PostDetail />,
      },
      {
        path: '/Users',
        element: <div>User page</div>,
      },
      {
        path: '/Setting',
        element: <div>Setting page</div>,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginForm />,
  },
]);

function App() {
  // functional component
  const [displayListPost, setDisplayListPost] = useState(true);
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'T-shirt',
      quantity: 20,
    },
    {
      id: 2,
      name: 'Short',
      quantity: 50,
    },
  ]);

  const addProduct = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('e ', e);

    setProducts([
      ...products,
      { id: Date.now(), name: 'Long Sleeve Shirt', quantity: 30 },
    ]);
  };

  const reorderItem = (id: number) => {
    // code here

    setProducts((prevProducts) => {
      const productToMove = prevProducts.find((product) => product.id === id);
      if (productToMove) {
        const remainingProducts = prevProducts.filter(
          (product) => product.id !== id
        );
        return [productToMove, ...remainingProducts];
      }
      return prevProducts;
    });
  };
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
