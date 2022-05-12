import React from 'react'
//Layout de tarjetas Item
const ItemDetail = ({producto}) =>{
    return (
        <> 
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={producto.imagen} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <button className="btn btn-primary">Comprar</button>
            </div>
        </div>
    </>
    )
}

export default ItemDetail