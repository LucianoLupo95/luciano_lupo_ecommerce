import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/Navbar/NavBar';
import { CartWidget } from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Item from './components/Item/Item';

function App() {
  return (
    <div>
      <Item/>
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
