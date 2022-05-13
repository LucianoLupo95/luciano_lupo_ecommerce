import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
//Layout de tarjetas Item
const ItemDetail = ({producto}) =>{
    const onAdd = (counter) =>{
        if(counter > 1){
          alert(`${counter} productos fueron agregados a tu carrito.`);
        }else if(counter == 1){
          alert(`${counter} producto fue agregado a tu carrito.`);
        }
      }
    
    return (
        <> 
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={producto.imagen} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            </div>
        </div>
    </>
    )
}

export default ItemDetail