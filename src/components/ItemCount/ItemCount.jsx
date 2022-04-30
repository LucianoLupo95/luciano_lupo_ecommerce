import React, {useState} from 'react'

function ItemCount({stock, initial, onAdd}) {
    const [counter, setCounter] = useState(initial);
    const substract = () =>{
        if(counter > initial){
            setCounter(counter - 1);
        }        
    }
    const add = () =>{
        if(counter < stock){
            setCounter(counter + 1);
        } 
    }
    const addToChart = () =>{
        onAdd(counter);
    }
    return (
        <>
            <div class="d-flex justify-content-center">
                <button onClick={substract} type="button" class="btn btn-outline-primary">-</button>
                <input class="text-center" type="text" value={counter}/>
                <button onClick={add} type="button" class="btn btn-outline-primary">+</button>
            </div>
            <div class="d-flex justify-content-center">
                <button class="btn btn-primary" type="submit" onClick={addToChart}>Agregar al carrito</button>
            </div>

        </>
    )
}

export default ItemCount