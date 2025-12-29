import React, { createContext, useState, useEffect } from 'react';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  useEffect(() => { localStorage.setItem('cartItems', JSON.stringify(cartItems)); }, [cartItems]);
  const addToCart = (product, qty) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    if (existItem) { setCartItems(cartItems.map((x) => x._id === existItem._id ? { ...product, qty } : x)); } 
    else { setCartItems([...cartItems, { ...product, qty }]); }
  };
  const removeFromCart = (id) => { setCartItems(cartItems.filter((x) => x._id !== id)); };
  return (<CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>{children}</CartContext.Provider>);
};
