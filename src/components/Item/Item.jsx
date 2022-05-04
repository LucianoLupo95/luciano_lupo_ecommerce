import React from 'react'
//Layout de tarjetas Item
const Item = ({nombre, imagen, descripcion}) =>{
    return (
        <> 
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={imagen} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">{descripcion}</p>
                <a href="#" className="btn btn-primary">Ver más</a>
            </div>
        </div>
    </>
    )
}

export default Item