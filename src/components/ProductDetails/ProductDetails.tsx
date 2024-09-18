import React, { useState, useContext, useCallback, useMemo } from 'react';
import {
  DetailsContainer,
  DetailsContent,
  DetailsImageWrapper,
  DetailsImage,
  DetailsInfo,
} from './styled/ProductDetailsStyled';
import { ProductDetailsProps } from '../../types';
import { CartContext } from '../../contexts/CartContext';
import { StyledButton } from '../Button/styled/StyledButton';
import DropdownSelector from '../Dropdown/Dropdown';

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onClose }) => {
  const [selectedPrice, setSelectedPrice] = useState<number>(product.range.min);
  const { addToCart } = useContext(CartContext)!;

  // create options for price selection
  const priceOptions = useMemo(() => [
    { value: product.range.min, label: `${product.range.min} ${product.currency}` },
    { value: product.range.max, label: `${product.range.max} ${product.currency}` },
  ], [product.range.min, product.range.max, product.currency]);

  // update selected price when user picks a new one
  const handlePriceChange = useCallback((value: number | string) => {
    setSelectedPrice(Number(value));
  }, []);

  // add the product to the cart and close the modal
  const handleAddToCart = useCallback(() => {
    addToCart(product, selectedPrice);
    onClose();
  }, [addToCart, product, onClose, selectedPrice]);

  return (
    <DetailsContainer>
      <DetailsContent>
        <DetailsImageWrapper>
          <DetailsImage src={product.image} alt={product.name} />
        </DetailsImageWrapper>
        <DetailsInfo>
          <h1>{product.name}</h1>
          <p>
            Price range: {product.range.min} – {product.range.max} {product.currency}
          </p>
          <div>
            <label htmlFor="price">Select amount:</label>
            <br />
            <DropdownSelector
              options={priceOptions}
              selectedValue={selectedPrice}
              onChange={handlePriceChange}
              size="medium"
              center={true}
              extraMargin={true}
            />
          </div>
          <StyledButton center={true} onClick={handleAddToCart}>
            Add to cart
          </StyledButton>
        </DetailsInfo>
      </DetailsContent>
    </DetailsContainer>
  );
};
