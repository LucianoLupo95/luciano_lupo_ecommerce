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
            ) : <>
                <h2 class="display-3 text-center ">Anata Pet Shop, todo lo que necesitas para tu mascota</h2>
                <h3 class="lead">Cargando...</h3>
            </>
        }

    </>
    )
}

export default ItemList