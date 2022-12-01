
import { useState, useEffect, useContext } from "react";
import ItemList from '../itemList/itemList'
import {getProductos} from '../../assets/firebase.js';
import { useParams } from "react-router-dom";
import Banner from "../banner/banner";

// context
import { DarkModeContext } from "../../context/darkMode";
const ItemListContainer = () =>{

    const [productos, setProductos] = useState([]);
    const {category} = useParams();

    const {darkMode, toggleDarkMode} = useContext(DarkModeContext)
    useEffect(() => {
        if(category){
            getProductos().then(productosFuncion => {
                const productsList = productosFuncion.filter(prod => prod.idCat === parseInt(category))
                const cardProducto = ItemList({productsList})
                setProductos(cardProducto)
            }
        )
        } else {
            getProductos().then(productsList => {
                const cardProducto = ItemList({productsList})
                setProductos(cardProducto)
            })
        }


    },[category]);

    return(
        <>
            <Banner/>



            <div className= {darkMode ? "body_main darkMode" : "body_main" }>
                <div className="boton-darkMode">
                <button className={darkMode ? "btn-principal btn-darkMode" : "btn-secundario btn-darkMode"} onClick={() => toggleDarkMode()}>Modo oscuro</button>
                </div>

                <div className="contenedor-cards">

                {productos}   
                </div>                
            </div>

            
        </>
    )
}
export default ItemListContainer;