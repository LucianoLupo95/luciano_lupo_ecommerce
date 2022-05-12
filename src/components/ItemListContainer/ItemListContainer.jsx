import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';


//Tiene todos los Items a renderizar


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const data = [
    {
      id:1,
      imagen:'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Excelent-gatos-urinary.jpg?itok=3NSDHobJ',
      nombre:"Urinari 1kg",
      descripcion:"Alimento para gatos Urinari" 
    },
    {
      id:2,
      imagen:"https://d2r9epyceweg5n.cloudfront.net/stores/705/427/products/purina-11-64bc8f5c229d7f80b415693815343504-1024-1024.jpg",
      nombre:"Piedras sanitarias",
      descripcion:"Caja de piedras para gatos"
    },
    {
      id:3,
      imagen:"http://d2r9epyceweg5n.cloudfront.net/stores/608/745/products/9b1abda9-b6cb-42df-ba45-bed3576e277c1-14a30d090132e82a3c15405160982651-640-0.jpeg",
      nombre:"Cepillo",
      descripcion:"Cepillo para gatos"
    },
    {
      id:4,
      imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_728711-MLA46835121443_072021-F.webp0",
      nombre:"Guante para peinar",
      descripcion:"Guante para peinar gatos sacapelos"
    },
    {
      id:5,
      imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_639820-MLA44199006398_112020-F.webp",
      nombre:"Canil",
      descripcion:"Canil para transportar gatos y perros"
    }
  ]

  
  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, 2000);
    })
    promesa.then((res)=>{
      setProductos(res)
    }).catch((err)=>
      console.log(err)
    ).then(()=>console.log(productos)
    )
    return () => {
        
      }
    }, [])  
  return (
    <div>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer