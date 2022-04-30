import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const onAdd = (counter) =>{
  if(counter > 1){
    alert(`${counter} productos fueron agregados a tu carrito.`);
  }else if(counter == 1){
    alert(`${counter} producto fue agregado a tu carrito.`);
  }
}
function ItemListContainer() {
  return (
    <ItemCount stock={5} initial={1} onAdd={onAdd}/>
  )
}

export default ItemListContainer