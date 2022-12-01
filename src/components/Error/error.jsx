import React from 'react';
import { Link } from 'react-router-dom';
import WebError from '../../assets/pagina-error-404.jpg'
const Error = () => {
    return (
        <div className='error-page'>
            <img src={WebError} alt="error 404" className='error' />
            <Link to='/'><button className='btn-principal'>Volver al inicio</button></Link>
        </div>
    );
}

export default Error;
