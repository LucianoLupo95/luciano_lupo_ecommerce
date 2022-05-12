import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import Home from '../views/Home'
import Layout from '../components/Layout/Layout'

const Rutas = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path="" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/" element={<ItemListContainer/>}/>       
                <Route path="/Item/:id" element={<ItemDetailContainer/>}/>                
              </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Rutas