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
  return (
    <div>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer