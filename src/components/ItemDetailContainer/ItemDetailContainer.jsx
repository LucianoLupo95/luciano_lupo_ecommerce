import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
// import { db } from '../../services/firebase'
// import { doc, getDoc } from "firebase/firestore"


const ItemDetailContainer = (id) => {
  console.log(id);
  // const [producto, setProducto] = useState([]);

  // // const getProductById = async () => {

  // //   const item = doc(db, 'productos', id)

  // //   try {
  // //       const docSnapshot = await getDoc(item)
  // //       if (docSnapshot.exists()) {
  // //         setProducto({id: docSnapshot.id, ...docSnapshot.data()})
  // //       }
  // //   } catch (error) {
  // //       console.log(error);
  // //   }
  // // };
  // // useEffect(() => {
  // //   getProductById();      
  // // }, [])  

  // const {id} = useParams();
  // const choosedProd = data.find((product) => product.id == id);
  
  // useEffect(() => {
  //   const promesa = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(choosedProd)
  //     }, 2000);
  //   })
  //   promesa.then((res)=>{
  //     setProducto(res)
  //   });
  //   }, [])  
  return (
    <div>
      <p>ITEM Detail</p>
      {/* <ItemDetail producto={producto}/> */}
      
    </div>
  )
}

export default ItemDetailContainer