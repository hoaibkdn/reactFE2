/** @format */

import React, { useState, MouseEvent, useContext } from 'react';
import Form from './components/Form';
import LoginForm from './components/LoginForm';
import ListPost from './components/ListPost';
import logo from './logo.svg';
import './App.css';
import { AppContext } from './context';

// props
// state
// setState: asynchronous (batch update)
interface Product {
  id: number;
  name: string;
  quantity: number;
}

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
      <button onClick={() => setDisplayListPost(!displayListPost)}>
        Toggle ListPost
      </button>
      <AppContext.Provider value={{ displayListPost }}>
        <>
          <LoginForm />
          {displayListPost && <ListPost />}
        </>
      </AppContext.Provider>
      {/* <Form firstname='AAA' lastname='BBB' /> */}
      {/* <button onClick={addProduct}>Add Product</button>
      <ul>
        {products.map((product) => (
          <li>
            <button onClick={() => reorderItem(product.id)}>
              <p>
                {product.name}{' '}
                <b>
                  <span>{product.quantity}</span>
                </b>
              </p>
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
