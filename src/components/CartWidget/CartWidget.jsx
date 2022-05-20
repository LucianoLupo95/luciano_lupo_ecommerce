import React from 'react'
import { BsCart4 } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
    return (
      <>
        <Link to="/cart">
          <BsCart4 color="forestgreen" size={40}/>
        </Link>
      </>
    )
}