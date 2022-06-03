import React, { useContext, useState} from 'react'
import { GlobalContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
//Layout de tarjetas Item
const ItemDetail = ({product}) =>{
    const {addToCart} = useContext(GlobalContext)
    const [quantity, setQuantity] = useState()
    // const [state, setState] = useState(producto)
    let stock = product.stock;
    const onAdd = (quantity) => {
      setQuantity(quantity);
    };
    const addItemToCart = (quantity) =>{
      addToCart(product, quantity)
      
    }
    return (
        <> 
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={product.imagen} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{product.nombre}</h5>
                <p className="card-text">{product.descripcion}</p>
                <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
                <div class="d-flex justify-content-center">
                <button class="btn btn-primary" type="submit" onClick={() => addItemToCart(quantity)}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    </>
    )
}

export default ItemDetail