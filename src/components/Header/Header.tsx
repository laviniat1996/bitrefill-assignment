import React, { useContext, useRef, useCallback, useMemo, useState, useEffect } from 'react';
import { CartContext } from '../../contexts/CartContext';
import LogoSVG from '../../img/logo.svg';
import CartSVG from '../../img/cart.svg';
import {
  Cart,
  CartCountBadge,
  CartIconContainer,
  CartIconWrapper,
  CartText,
  HeaderContainer,
  Logo,
} from './styled/HeaderStyled';
import { CartDropdownMenu } from '../CartContent/CartContent';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  // get cart items from context
  const { cartItems } = useContext(CartContext) || {};
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // memoize cart item count to avoid recalculating every render
  const cartItemCount = useMemo(() => {
    return cartItems ? cartItems.reduce((count, item) => count + item.quantity, 0) : 0;
  }, [cartItems]);

  // ref to store the previous number of cart items
  const previousCartItemsLength = useRef<number>(cartItems ? cartItems.length : 0);

  const handleToggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  // close the dropdown
  const handleCloseDropdown = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  // automatically open the dropdown when items are added to the cart, and close it when all items are removed
  useEffect(() => {
    const currentCartItemsLength = cartItems ? cartItems.length : 0;

    // open dropdown when new items are added
    if (currentCartItemsLength > previousCartItemsLength.current) {
      if (!isDropdownOpen) {
        setIsDropdownOpen(true);
      }
    }

    // close dropdown when all items are removed
    if (currentCartItemsLength === 0 && previousCartItemsLength.current > 0) {
      if (isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    }

    // update the previous cart items length ref
    previousCartItemsLength.current = currentCartItemsLength;
  }, [cartItems, isDropdownOpen]);

  return (
    <HeaderContainer>
      <Logo src={LogoSVG} alt="Logo" />
      
      <CartIconContainer onClick={handleToggleDropdown}>
        <CartIconWrapper>
          <Cart src={CartSVG} alt="Cart" />
          {cartItemCount > 0 && <CartCountBadge>{cartItemCount}</CartCountBadge>}
        </CartIconWrapper>
        <CartText>Cart</CartText>

        {isDropdownOpen && (
          <CartDropdownMenu closeDropdown={handleCloseDropdown} />
        )}
      </CartIconContainer>
    </HeaderContainer>
  );
};
