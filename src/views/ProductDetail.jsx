import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

const ProductDetail = () => {

  const location = useLocation()
  const {codigo} = useParams()
  
  return (
    <div className='productDetail'>
        <ItemDetailContainer codigo={codigo} />
    </div>
  )
}

export default ProductDetail