import React, { useContext, useEffect, useRef, useCallback } from 'react';
import { CartContext, CartItem } from '../../contexts/CartContext';
import DropdownSelector from '../Dropdown/Dropdown';
import { ReactComponent as TrashSVG } from '../../img/trash.svg';
import { 
  CartItemActionRow, 
  CartItemActions, 
  CartItemContainer, 
  CartItemDetails, 
  CartItemImage, 
  CartItemName, 
  CartItemPrice, 
  CartItemTotalPrice, 
  DropdownContainer, 
  Overlay, 
  RemoveButton, 
  TotalContainer 
} from './styled/CartContentStyled';
import { StyledButton } from '../Button/styled/StyledButton';

interface CartDropdownMenuProps {
  closeDropdown: () => void;
}

export const CartDropdownMenu: React.FC<CartDropdownMenuProps> = ({ closeDropdown }) => {
  // get cart-related functions and items from context
  const { cartItems, removeFromCart, updateCartQuantity } = useContext(CartContext)!;
  const dropdownRef = useRef<HTMLDivElement>(null); // reference to the dropdown for outside click detection

  // calculate total price by summing the price of all items
  const totalPrice = cartItems.reduce((total, item) => total + item.selectedPrice * item.quantity, 0);

  // function to handle quantity changes in the cart item dropdown
  const handleQuantityChange = useCallback(
    (productId: string, selectedPrice: number, newQuantity: number) => {
      updateCartQuantity(productId, selectedPrice, newQuantity); // update the quantity of the item in the cart
    },
    [updateCartQuantity]
  );

  // handle clicks outside of the cart dropdown to close it
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown(); // close the dropdown if the click was outside the dropdown
      }
    },
    [closeDropdown]
  );

  // set up an event listener for detecting clicks outside the dropdown
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // clean up event listener when component unmounts
    };
  }, [handleClickOutside]);

  return (
    <>
      {/* overlay to capture outside clicks and darken the background */}
      <Overlay onClick={closeDropdown} />
      <DropdownContainer ref={dropdownRef} onClick={(e) => e.stopPropagation()}>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p> // message when the cart is empty
        ) : (
          <>
            {/* map through cart items and display each one */}
            {cartItems.map((item: CartItem, index: number) => (
              <CartItemContainer key={index}>
                <CartItemImage src={item.product.image} alt={item.product.name} /> {/* image of the cart item */}
                <CartItemDetails>
                  <CartItemName>{item.product.name}</CartItemName> {/* name of the product */}
                  <CartItemPrice>${item.selectedPrice} value</CartItemPrice> {/* selected price of the product */}
                </CartItemDetails>

                <CartItemActions>
                  <CartItemActionRow>
                    <DropdownSelector
                      options={[{ value: 1, label: '1' }, { value: 2, label: '2' }, { value: 3, label: '3' }]}
                      selectedValue={item.quantity} // show current quantity in the dropdown
                      onChange={(value) => handleQuantityChange(item.product.id, item.selectedPrice, Number(value))}
                      size="small"
                    />
                    <RemoveButton onClick={() => removeFromCart(item.product.id, item.selectedPrice)}>
                      <TrashSVG /> {/* button to remove the item from the cart */}
                    </RemoveButton>
                  </CartItemActionRow>
                  <CartItemTotalPrice>${item.selectedPrice * item.quantity}</CartItemTotalPrice> {/* total price for this item */}
                </CartItemActions>
              </CartItemContainer>
            ))}

            {/* total price of all items in the cart */}
            <TotalContainer>
              <span>Total</span>
              <span>${totalPrice}</span>
            </TotalContainer>

            {/* button to proceed to checkout */}
            <StyledButton center={true} onClick={closeDropdown}>Continue to checkout</StyledButton>
          </>
        )}
      </DropdownContainer>
    </>
  );
};
