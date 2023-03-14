import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const addToCartHandler = (product) => {
        const existItem = cartItems.find((x) => x.id === product.id);
        if (existItem) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...existItem, qty: existItem.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };

    const openCartHandler = () => {
        setShowCart(true);
    };

    const closeCartHandler = () => {
        setShowCart(false);
    };

    return (
        <CartContext.Provider value={{ items, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}
