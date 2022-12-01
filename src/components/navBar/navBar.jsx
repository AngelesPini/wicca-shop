import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../cartWidget/cartWidget";
import Secciones from "./Secciones/secciones";
import Logo from '../../assets/logo-min.png'
import '../style.scss';

const navBar = React.memo(()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg  header_nav">
        <div className="container-fluid">
        <Link to="/" className="navbar-brand"><img src={Logo} alt="logo-wicca-shop"  className="logo"/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <Secciones/>
            </div>

            <CartWidget/>  
        </div>

        </nav>

        </>
    )
})

export default navBar;


