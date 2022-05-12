import './App.css';
import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartContext from './context/CartContext';
import Rutas from './routes/Rutas';

function App() {
  return (

    <div>
      <CartContext>
        <Rutas/>
        <ItemListContainer/>
      </CartContext>
    </div>
  );
}

export default App;
