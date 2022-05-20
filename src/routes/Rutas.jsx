import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import Layout from '../components/Layout/Layout'
import Home from '../views/Home'
import Checkout from '../views/Checkout'
import AboutUs from '../views/AboutUs'
import Error from '../views/Error'
import Products from '../views/Products'
import Cart from '../components/Cart/Cart'

const Rutas = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path="" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/Item/:id" element={<ItemDetailContainer/>}/>   
                <Route path="/checkout" element={<Checkout/>}/>  
                <Route path="/aboutUs" element={<AboutUs/>}/>  
                <Route path="/products" element={<Products/>}/>                  
                <Route path="/cart" element={<Cart/>}/>  
                <Route path="*" element={<Error/>}/>  
              </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Rutas