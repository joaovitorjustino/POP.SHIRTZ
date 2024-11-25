import { useState } from "react";
import AppContext from "./context";

export default function CarrinhoProvider({ children }) {
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState([])

    const value = {
        products, 
        setProducts,
        cartItems, 
        setCartItems,
    } 
    
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}