import React, { createContext, useState } from 'react'

export const GlobalContext = createContext('')


const CartContext = ({children}) => {
    const[cart, setCart] = useState([]) 
    const [counter, setCounter] = useState(0)
    // const isInCart = (id) => {
    //   if (contextItemsCart > 0) {
    //     return contextCart.findIndex(item => item.producto.id === id) >= 0
    //   } else {
    //     return false
    //   }
    // } 
    const addToCart = (product, quantity) =>{
        setCounter(counter + quantity);
        setCart([...cart, {product, quantity}]);
    }
  return (
    <GlobalContext.Provider value={{cart, setCart, counter, setCounter, addToCart}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default CartContext