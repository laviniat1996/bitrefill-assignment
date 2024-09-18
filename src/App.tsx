import React from 'react';
import { Header } from './components/Header/Header';
import { ProductGrid } from './components/ProductGrid/ProductGrid';
import productsData from './data.json'; 
import { GlobalStyle } from './fonts/GlobalFont';

const products = productsData.products;

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <ProductGrid products={products} />
    </>
  );
};

export default App;
