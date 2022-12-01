import React from "react";
import {Routes, Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
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
import Error from "./Error/error";
import './style.scss';
function App() {
  return (
    <>  
    <DarkModeProvider> 
      
      <CartContextProvider> 
        <ToastContainer/>
        <NavBar/>
        <Header/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/product/:id" element={<ItemDetailContainer/>}/>
            <Route path="/category/:category" element={<ItemListContainer/>} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>

        <Footer/>
      </CartContextProvider>
    </DarkModeProvider> 
    </>
  );
}

export default App;
