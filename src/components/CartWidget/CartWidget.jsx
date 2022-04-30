import React from 'react'
import { BsCart4 } from 'react-icons/bs'

export const CartWidget = (fontSize, color) => {
    return (
      <BsCart4 style={{fontSize: fontSize, color: color}}/>
    )
}