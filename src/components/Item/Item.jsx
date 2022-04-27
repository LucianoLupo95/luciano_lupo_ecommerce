import React, { useEffect } from 'react'

function Item() {
    const propiedades = [{ id: "01", name: "Machain", description: "Casa en Machain", stock: "01" }];
    useEffect(()=>{
        const consulta = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(propiedades)
            },3000)
        }).then(res => console.log(res)).catch((err) => console.log(err))
    })
    return (
        <p></p>
    )
}

export default Item