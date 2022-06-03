import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { db } from '../../service/firebase';
import { collection, doc, getDoc, getDocs, query} from 'firebase/firestore';

const ItemDetailCointainer = ({ id }) => {

  const [product, setProduct] = useState([]);

  const getProduct = async (tipo) => {
    const products = collection(db, 'productos')
    try {
        var q = query(products)
      const data = await getDocs(q)
      const productoEncontrado = products.find(item => item.id === id)
      setProduct(productoEncontrado)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();  
  }, [])  


  return (
    <div className='itemDetailContainer'>
        {product ? 
            <ItemDetail product={product} /> 
        : 
          <p>Cargando...</p>     // spinner
        }
    </div>
  )
}

export default ItemDetailCointainer;