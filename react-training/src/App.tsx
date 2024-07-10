/** @format */

import React, { useState, MouseEvent } from 'react';
import logo from './logo.svg';
import './App.css';

// props
// state
function App() {
  // functional component
  const [products, setProducts] = useState([
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
  };
  return (
    <div className='App'>
      <button onClick={addProduct}>Add Product</button>
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
      </ul>
    </div>
  );
}

export default App;
