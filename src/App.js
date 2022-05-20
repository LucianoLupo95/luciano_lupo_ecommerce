import './App.css';
import React from 'react';
import CartContext from './context/CartContext';
import Rutas from './routes/Rutas';  

function App() {
  return (

    <div>
      <CartContext>
        <Rutas/>
      </CartContext>
    </div>
  );
}

export default App;
