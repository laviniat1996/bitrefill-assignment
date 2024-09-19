import React from 'react';
import { Header } from './components/Header/Header';
import { ProductGrid } from './components/ProductGrid/ProductGrid';
import productsData from './data.json'; 
import { GlobalStyle } from './fonts/GlobalFont';
import { ContentWrapper } from './components/ContentWrapper/styled/ContentWrapperStyled';

const products = productsData.products;

export const App: React.FC = () => {
  return (
    <ContentWrapper>
      <GlobalStyle />
      <Header/>
      <ProductGrid products={products} />
    </ContentWrapper>
  );
};

export default App;
