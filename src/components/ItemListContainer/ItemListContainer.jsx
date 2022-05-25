import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import { db } from '../../service/firebase';
import { collection, doc, getDoc, getDocs, query} from 'firebase/firestore';


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const getProducts = async (tipo) => {
    const products = collection(db, 'productos')
    try {
        var q = query(products)
      const data = await getDocs(q)
      setProductos(data.docs.map(doc => doc = {id: doc.id, ...doc.data()}))
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();  
  }, [])  






  // }, [])  

  // console.log('ItemListContainer productos', productos)


  
  // const data = [
  //   {
  //     id:1,
  //     imagen:'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Excelent-gatos-urinary.jpg?itok=3NSDHobJ',
  //     name:"Urinari 1kg",
  //     descripcion:"Alimento para gatos Urinari" 
  //   },
  //   {
  //     id:2,
  //     imagen:"https://d2r9epyceweg5n.cloudfront.net/stores/705/427/products/purina-11-64bc8f5c229d7f80b415693815343504-1024-1024.jpg",
  //     name:"Piedras sanitarias",
  //     descripcion:"Caja de piedras para gatos"
  //   },
  //   {
  //     id:3,
  //     imagen:"http://d2r9epyceweg5n.cloudfront.net/stores/608/745/products/9b1abda9-b6cb-42df-ba45-bed3576e277c1-14a30d090132e82a3c15405160982651-640-0.jpeg",
  //     name:"Cepillo",
  //     descripcion:"Cepillo para gatos"
  //   },
  //   {
  //     id:4,
  //     imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_728711-MLA46835121443_072021-F.webp0",
  //     name:"Guante para peinar",
  //     descripcion:"Guante para peinar gatos sacapelos"
  //   },
  //   {
  //     id:5,
  //     imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_639820-MLA44199006398_112020-F.webp",
  //     name:"Canil",
  //     descripcion:"Canil para transportar gatos y perros"
  //   }
  // ]

  
  // useEffect(() => {
    // const item = doc(db, 'productos','8UvA4hDSdZECh5rp0X0H')
    // getDoc(item).then((snapshot)=>{
    //   if(snapshot.exists()){
    //     setProductos([{id:snapshot, ...snapshot.data()}])
    //   }
    // })
    // const getProducts = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     const data = collection(db, 'productos')
    //     resolve(data)
    //   }, 2000);
    // })
    // getProducts.then((res)=>{
    //   setProductos(res)
    // }).catch((err)=>
    //   console.log(err)
    // ).then(()=>console.log(productos)
    // )
    // return () => {
        
    //   }
    // }, [])  
  return (
    <div>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer