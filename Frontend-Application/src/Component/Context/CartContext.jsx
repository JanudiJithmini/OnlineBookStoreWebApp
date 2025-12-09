import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart((prevCart) => {
      const existing = prevCart.find((b) => b.id === book.id);
      if (existing) {
        return prevCart.map((b) =>
          b.id === book.id ? { ...b, quantity: b.quantity + 1 } : b
        );
      }
      return [...prevCart, { ...book, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, quantity: Math.max(1, b.quantity + delta) } : b
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
