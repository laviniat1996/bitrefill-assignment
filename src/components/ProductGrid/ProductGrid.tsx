import React, { useState, useCallback, useMemo } from 'react';
import { ProductGridProps, Product } from '../../types';
import { Modal } from '../Modal/Modal'; 
import { ProductDetails } from '../ProductDetails/ProductDetails';
import {
  Card,
  GridContainer,
  ProductImage,
  ProductImageContainer,
  ProductName,
  ProductPrice,
} from './styled/ProductGridStyled';

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // open the modal with the selected product
  const openModal = useCallback((product: Product) => {
    setSelectedProduct(product);
  }, []);

  // close the modal
  const closeModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  // generate product cards
  const productCards = useMemo(() => (
    products.map((product) => (
      <Card key={product.id} onClick={() => openModal(product)}>
        <ProductImageContainer>
          <ProductImage src={product.image} alt={product.name} />
        </ProductImageContainer>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>
          ${product.range.min} – ${product.range.max}
        </ProductPrice>
      </Card>
    ))
  ), [products, openModal]);

  return (
    <>
      <GridContainer>
        {productCards}
      </GridContainer>

      <Modal isOpen={selectedProduct !== null} onClose={closeModal}>
        {selectedProduct && (
          <ProductDetails product={selectedProduct} onClose={closeModal} />
        )}
      </Modal>
    </>
  );
};
