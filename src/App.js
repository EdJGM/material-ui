import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductDetailPage from './components/ProductDetailPage';
import theme from './theme';
import './App.css';
import './index.css';
import { ThemeProvider } from '@emotion/react';

const products = [
  {
    id: 1,
    image: '/images/c1.png',
    name: 'IPhone 13',
    price: '$999'
  },
  {
    id: 2,
    image: '/images/c2.png',
    name: 'Samsung Galaxy S21',
    price: '$899'
  },
  {
    id: 3,
    image: '/images/c3.png',
    name: 'Google Pixel 5',
    price: '$699'
  },
  {
    id: 4,
    image: '/images/computador1.png',
    name: 'Super Advanced Gaming Desktop',
    price: '$1999'
  },
  {
    id: 5,
    image: '/images/computador2.png',
    name: 'Advanced Gaming Desktop',
    price: '$1499'
  },
  {
    id: 6,
    image: '/images/computador3.png',
    name: 'Gaming Desktop',
    price: '$999'
  },
  {
    id: 7,
    image: '/images/televisor1.png',
    name: 'Samsung 55" Smart TV',
    price: '$699'
  },
  {
    id: 8,
    image: '/images/televisor2.png',
    name: 'LG 50" Smart TV',
    price: '$599'
  },
  {
    id: 9,
    image: '/images/televisor3.png',
    name: 'Sony 48" Smart TV',
    price: '$499'
  }
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage products={products} />} />
          <Route path="/product/:id" element={<ProductDetailPage products={products} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App;
