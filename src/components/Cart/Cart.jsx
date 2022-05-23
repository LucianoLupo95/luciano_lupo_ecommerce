import React, { useContext } from 'react'
import { GlobalContext } from '../../context/CartContext'

const Cart = () => {
    const {cart, counter} = useContext(GlobalContext)
    console.log("Objeto");
    console.log(cart)
    console.log("Propiedad");
    console.log(cart[0]);
    return (
        <ul>
            {
                cart.length > 0 ? cart.map((item, index) =>(
                    <li key={index}>{item.name}{counter}</li>
                )):<h3>El carrito está vacio</h3>
            }
        </ul>
    )
}

export default Cart