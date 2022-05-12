import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import ItemDetail from '../ItemDetail/ItemDetail';



//Tiene todos los Items a renderizar


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);

  const onAdd = (counter) =>{
    if(counter > 1){
      alert(`${counter} productos fueron agregados a tu carrito.`);
    }else if(counter == 1){
      alert(`${counter} producto fue agregado a tu carrito.`);
    }
  }

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
  const {id} = useParams();
  const choosedProd = data.find((product) => product.id == id);
  
  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(choosedProd)
      }, 2000);
    })
    promesa.then((res)=>{
      setProducto(res)
    });
    }, [])  
  return (
    <div>
      <ItemDetail producto={producto}/>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetailContainer