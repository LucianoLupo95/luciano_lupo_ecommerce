import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {
    return (
        <>
        {
            productos.length > 0 ? productos.map(producto=> (
            <Item
                imagen={producto.imagen}
                nombre={producto.nombre}
                descripcion={producto.descripcion}
            />
            )) : <h2>Cargando...</h2>
        }

    </>
    )
}

export default ItemList