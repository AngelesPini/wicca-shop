import { useContext, useState, createContext } from "react";
import { toast } from "react-toastify";


const CartContext = createContext([]);

const CartContextProvider = (props) => {

    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.find(prod => prod.id === id)
    }

    // añadir producto
    const addItem = (producto, cantidad) => {
        if(isInCart(producto.id)) {
            const indice = cart.findIndex(prod => prod.id === prod.id)
            const aux = [...cart]
            aux[indice].cant = cantidad
            setCart(aux)
            
        } else {
            const nuevoProducto = {
                ...producto, 
                cant: cantidad
            }
            setCart([...cart, nuevoProducto])
        }
    }
    // vaciar carrito

    const emptyCart = () =>{
        return setCart([])
    }

    const removeItem = (id) =>{
        toast.warn('producto eliminado',{
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })

        return setCart(cart.filter(prod => prod.id !== id))
    }

    const getItemQty = () =>{
        return cart.reduce((acc, prod) => acc += prod.cant, 0)
    }
    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc += (prod.cant * prod.precio), 0)
    }

    return(
        <CartContext.Provider value={{cart, isInCart, addItem, emptyCart, removeItem, getItemQty, totalPrice}}>

            {props.children}

        </CartContext.Provider>
    )
}

export {CartContextProvider, CartContext}
