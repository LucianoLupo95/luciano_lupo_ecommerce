import React, { useContext } from 'react'
import { GlobalContext } from '../../context/CartContext'
import Formulario from '../Formulario/Formulario'


const Cart = () => {
    const {cart, counter} = useContext(GlobalContext)
    return (
        <div>
            {
                cart.length > 0 ? cart.map((item, index) =>(
                    <li key={index}>{item.name}{counter}</li>
                )):<h3>El carrito está vacio</h3>
            }
            <Formulario/>
        </div>
    )
}

export default Cart