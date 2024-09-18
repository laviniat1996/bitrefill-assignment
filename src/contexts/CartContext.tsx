import React, { createContext, useState, ReactNode, useCallback, useMemo } from 'react';
import { Product } from '../types';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedPrice: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, selectedPrice: number) => void;
  removeFromCart: (productId: string, selectedPrice: number) => void;
  updateCartQuantity: (productId: string, selectedPrice: number, quantity: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // add item to cart or increase quantity if already exists
  const addToCart = useCallback((product: Product, selectedPrice: number) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id && item.selectedPrice === selectedPrice
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id && item.selectedPrice === selectedPrice
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { product, quantity: 1, selectedPrice }];
      }
    });
  }, []);

  // remove item from cart by product id and selected price
  const removeFromCart = useCallback((productId: string, selectedPrice: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.product.id === productId && item.selectedPrice === selectedPrice))
    );
  }, []);

  // update quantity of a specific item in the cart
  const updateCartQuantity = useCallback((productId: string, selectedPrice: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId && item.selectedPrice === selectedPrice
          ? { ...item, quantity }
          : item
      )
    );
  }, []);

  // clear the entire cart
  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  // memoize the cart context value to avoid unnecessary re-renders
  const cartContextValue = useMemo(
    () => ({
      cartItems,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      clearCart,
    }),
    [cartItems, addToCart, removeFromCart, updateCartQuantity, clearCart]
  );

  // provide the cart context to children components
  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
};
