import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import Layout from '../components/Layout/Layout'
import Home from '../views/Home'
import Checkout from '../views/Checkout'
import AboutUs from '../views/AboutUs'
import Error from '../views/Error'
import Products from '../views/Products'
import Cart from '../components/Cart/Cart'
import ProductDetail from '../views/ProductDetail'

const Rutas = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path="" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/Item/:id" element={<ProductDetail/>}/>   
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