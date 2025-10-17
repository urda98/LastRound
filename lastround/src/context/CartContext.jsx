import React, { createContext, useState} from "react";

export const CartContext = createContext();

export function CartProvider ({children}){
    const [cart, setCart] = useState([]);

    const addProductToCart = (product) => {
        setCart([...cart, product]);
        alert("Haz agregado 1 " + product.name + " a tu carrito");
    };

    const removeProductFromCart = (product) => {
        setCart(cart.filter(prod => prod.id !== product.id));
        alert("Haz eliminiado " + product.name + " de tu carrito");
    };

    const clearCart = () => {
        setCart([]);
        alert("Haz vaciado tu carrito");
    };

    return (
        <CartContext.Provider value = {{ cart, addProductToCart, removeProductFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
    
}