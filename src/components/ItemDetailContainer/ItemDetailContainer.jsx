import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
// import { db } from '../../services/firebase'
// import { doc, getDoc } from "firebase/firestore"


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);

  // const getProductById = async () => {

  //   const item = doc(db, 'productos', id)

  //   try {
  //       const docSnapshot = await getDoc(item)
  //       if (docSnapshot.exists()) {
  //         setProducto({id: docSnapshot.id, ...docSnapshot.data()})
  //       }
  //   } catch (error) {
  //       console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getProductById();      
  // }, [])  

  const data = [
    {
      id:1,
      imagen:'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Excelent-gatos-urinary.jpg?itok=3NSDHobJ',
      name:"Urinari 1kg",
      descripcion:"Alimento para gatos Urinari",
      cantidad:10 
    },
    {
      id:2,
      imagen:"https://d2r9epyceweg5n.cloudfront.net/stores/705/427/products/purina-11-64bc8f5c229d7f80b415693815343504-1024-1024.jpg",
      name:"Piedras sanitarias",
      descripcion:"Caja de piedras para gatos",
      cantidad:30 
    },
    {
      id:3,
      imagen:"http://d2r9epyceweg5n.cloudfront.net/stores/608/745/products/9b1abda9-b6cb-42df-ba45-bed3576e277c1-14a30d090132e82a3c15405160982651-640-0.jpeg",
      name:"Cepillo",
      descripcion:"Cepillo para gatos",
      cantidad:30 
    },
    {
      id:4,
      imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_728711-MLA46835121443_072021-F.webp0",
      name:"Guante para peinar",
      descripcion:"Guante para peinar gatos sacapelos",
      cantidad:30 
    },
    {
      id:5,
      imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_639820-MLA44199006398_112020-F.webp",
      name:"Canil",
      descripcion:"Canil para transportar gatos y perros",
      cantidad:30 
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
      
    </div>
  )
}

export default ItemDetailContainer