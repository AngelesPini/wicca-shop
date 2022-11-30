import { useContext } from "react";
import { Link } from "react-router-dom";

// context
import { DarkModeContext } from '../../context/darkMode.js';
import { CartContext } from "../../context/cartContext.js";
const Cart = () => {
    const {darkMode} = useContext(DarkModeContext)

    const {cart, emptyCart, removeItem, totalPrice} = useContext(CartContext)
    return (
        <div className={darkMode ? "item_container darkMode" : "item_container"}>


            {
                cart.length === 0 ? 
                <div className="contenedor-vacio-finalizar">
                    <h4>Tu carrito está vacío</h4>
                    <Link to= {'/'}><button className="btn-principal">Empezar a comprar!</button></Link>
                </div> :

                <div className="cart-map">
                    
            {
                cart.map((producto, indice) =>
                <div className="detail-container" key={indice}>
                    <div className="cardDetalleCarrito">
                        <div className="contenedor-imagen">
                        <img src={producto.img} alt="imagen de produto seleccionado"/>                    
                        </div>

                        <div className="descripcion-articulo">
                        <h5>{producto.nombre} {producto.modelo}</h5>
                        <div className="contenedor-detalles">
                            <p className='itemCount'></p>
                            <p className='precio_articulo'>Precio por unidad: ${producto.precio}</p>
                            <span>Cantidad elegida: {producto.cant}</span>
                            <p>Subtotal: $ {producto.precio * producto.cant}</p>
                            <button className="btn-secundario" onClick={() => removeItem(producto.id)}>Eliminar producto</button>

                        </div>

                        </div>

                    </div>
                </div>
                )}
                <div className="contenedor-vacio-finalizar">
                    <p>Total: ${totalPrice()}</p>
                    <div className="botones-carrito">
                    <button className="btn-principal" onClick={emptyCart}>Vaciar carrito</button>
                    <Link to="/checkout">
                    <button className="btn-principal"> Finalizar compra</button>
                    </Link>
                    </div>

                </div>
            </div>
            }            
        </div>
    );
}

export default Cart;
