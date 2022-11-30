import { useContext } from "react";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/cartContext";

const ItemDetail = ({producto}) => {

    const {addItem} = useContext(CartContext)

    const onAdd = (contador) => {
        addItem(producto, contador)
        console.log(producto, contador)
    }
    return (
        <div className='detail-container'>
            <div className="cardDetalle">
                <div className="contenedor-imagen">
                <img src={producto.img} alt="imagen de produto seleccionado"/>                    
                </div>

                <div className="descripcion-articulo">
                <h5>{producto.nombre} {producto.modelo}</h5>
                <div className="contenedor-detalles">
                    <p className='itemCount'>Cantidad: <ItemCount stock = {producto.stock} onAdd={onAdd}/></p>
                    <p className='precio_articulo'>Precio: ${producto.precio}</p>
                    <span>Cantidad disponible: {producto.stock}</span>
                    <div className="contenedor-boton">
                        <button className='btn-secundario'><Link to="/cart">Ir al carrito</Link></button>                    
                    </div>

                </div>

                </div>

            </div>
        </div>
    );
}

export default ItemDetail;
