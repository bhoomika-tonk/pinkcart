import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {

  // 1️⃣ Load cart from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('pinkcart_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 2️⃣ Save cart to localStorage on every change
  useEffect(() => {
    localStorage.setItem('pinkcart_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
