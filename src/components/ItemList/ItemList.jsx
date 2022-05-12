import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {
    return (
        <>
        {
            productos.length > 0 ? productos.map((producto)=> 
            <Item
                productos={producto}
            />
            ) : <h2>Cargando...</h2>
        }

    </>
    )
}

export default ItemList