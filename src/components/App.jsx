import React from "react";
import {Routes, Route} from "react-router-dom";

// context
import { DarkModeProvider } from "../context/darkMode";
import { CartContextProvider } from "../context/cartContext";

import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/checkout";
import Header from "./header/header";
import NavBar from "./navBar/navBar";
import Footer from "./Footer/footer";

import './style.scss';
function App() {
  return (
    <>  
    <DarkModeProvider> 
      
      <CartContextProvider> 
        <NavBar/>
        <Header/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/product/:id" element={<ItemDetailContainer/>}/>
            <Route path="/category/:category" element={<ItemListContainer/>} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>

          </Routes>

        <Footer/>
      </CartContextProvider>
    </DarkModeProvider> 
    </>
  );
}

export default App;
