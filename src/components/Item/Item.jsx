import React from 'react'
import { Link } from 'react-router-dom'
//Layout de tarjetas Item
const Item = ({productos}) =>{
    return (
        <> 
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={productos.imagen} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{productos.nombre}</h5>
                <p className="card-text">{productos.descripcion}</p>
                <Link to={`/Item/${productos.id}`} className="btn btn-primary">Ver más</Link>
                
            </div>
        </div>
    </>
    )
}

export default Item