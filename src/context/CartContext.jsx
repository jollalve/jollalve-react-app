import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

const prodFromLocalStore = JSON.parse(localStorage.getItem('carrito')) || []
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(prodFromLocalStore)
    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(cart))
    },[cart])

    console.log(cart)

    const addToCart = (item, quantity) => {
        if(isInCart(item.id)){
            setCart(
                cart.map((prod)=>{
                    if(prod.id === item.id){
                        return{...prod, cantidad: prod.cantidad + quantity}
                    } else {
                        return prod
                    }
                })
            )
        } else {
            setCart([...cart, {...item, cantidad: quantity}])}
    }

    const isInCart = (id) => {
        return cart.some((prod)=> prod.id === id)
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    const cartQuantity = () => {
        return cart.reduce ((acc, prod) => (acc += prod.cantidad), 0)
    }

    const cartTotal = () => {
        return cart.reduce ((acc, prod) => (acc += prod.price * prod.cantidad), 0)
    }

    const itemQuantity = (id) => {
        const itemInCart = cart.find((prod)=> prod.id === id)
        if(itemInCart) {
            return itemInCart.cantidad
        } else { 
            return 0
        }
    }

console.log(cart, "carrito")

    return(
        <CartContext.Provider value={{cart, addToCart, clear, removeItem, cartQuantity, cartTotal, itemQuantity}}> 
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)