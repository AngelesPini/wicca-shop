import React from 'react';
import Cart from '../multimedia/cart.png';
import { CartContext } from "../../context/cartContext.js";
import { useContext } from 'react';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    const {getItemQty} = useContext(CartContext)
    return (
        <>

            <Link to="/cart">        
            <button className='btn'>
                <img src={Cart} alt="icono carrito para boton" />
                <p>{getItemQty()}</p>
            </button>

            </Link>


        </>
    );
}

export default CartWidget;
