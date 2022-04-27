import React, {useState} from 'react'

function ItemCount(props) {
    const [counter, setCounter] = useState(1);
    const substract = () =>{
        if(counter > props.initial){
            setCounter(counter - 1);
        }        
    }
    const add = () =>{
        if(counter < props.stock){
            setCounter(counter + 1);
        } 
    }
    const onAdd = () =>{
        if(counter > 1){
            alert(`${counter} productos fueron agregados a tu carrito.`);
        }else if(counter == 1){
            alert(`${counter} producto fue agregado a tu carrito.`);
        }
        
    }
    return (
        <>
            <div class="d-flex justify-content-center">
                <button onClick={substract} type="button" class="btn btn-outline-primary">-</button>
                <input class="text-center" type="text" value={counter}/>
                <button onClick={add} type="button" class="btn btn-outline-primary">+</button>
            </div>
            <div class="d-flex justify-content-center">
                <button class="btn btn-primary" type="submit" onClick={onAdd}>Agregar al carrito</button>
            </div>

        </>
    )
}

export default ItemCount