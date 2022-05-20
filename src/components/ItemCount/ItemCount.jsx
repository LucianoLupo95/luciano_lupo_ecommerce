import React, {useState} from 'react'

function ItemCount({stock, initial, onAdd}) {
    const [quantity, setQuantity] = useState(initial);
    onAdd(quantity);
    const substract = () =>{
        if(quantity > initial){
            setQuantity(quantity - 1);
        }        
    }
    const add = () =>{
        if(quantity < stock){
            setQuantity(quantity + 1);
        } 
    }
    return (
        <>
            <div class="d-flex justify-content-center">
                <button onClick={substract} type="button" class="btn btn-outline-primary">-</button>
                <input class="text-center" type="text" value={quantity}/>
                <button onClick={add} type="button" class="btn btn-outline-primary">+</button>
            </div>
        </>
    )
}

export default ItemCount