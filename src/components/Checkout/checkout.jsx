import React from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from '../../context/cartContext.js'
import { crearOrden, getProducto, updateProducto } from "../../assets/firebase.js";
import { toast } from "react-toastify";


const Checkout = () => {
    const datosFormulario = React.useRef()
    let navigate = useNavigate()
    const {cart, emptyCart, totalPrice} = useContext(CartContext);

    
    const [mail, setMail] = useState("")
    const [mailConf, setMailConf] = useState("")

    const consultarFormulario= (e) =>{
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const valoresObtenidos = Object.fromEntries(datForm)
        const aux = [...cart]
        console.log(aux)
        if (mail != mailConf){
            toast.error("El email debe coincidir");
            return;
        }
        aux.forEach(producto =>{
            getProducto(producto.id).then(prod =>{
                producto.stock -= producto.cant
                updateProducto(producto.id, prod)
            })

        })

        crearOrden(valoresObtenidos, totalPrice()).then( orden =>{
            toast.success(`Su orden ${orden.id} fue procesada y creada con exito`)
            emptyCart()
            e.target.reset()
            navigate('/')
        }).catch(error=>{
            toast.error('Su orden no se generó con éxito')
            console.log(error)
        })

    }


    return (
        <div className='container'>
            <form className="needs-validation" noValidate onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="col-md-12">
                    <label htmlFor="nombre" className="form-label">Nombres</label>
                    <input type="text" className="form-control" name='nombre' required />

                </div>
                <div className="col-md-12">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" name='apellido' required />

                </div>
                <div className="col-md-12">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name='dni' required />

                </div>
                <div className="col-md-12">
                    <label htmlFor="localidad" className="form-label">Localidad</label>
                    <div className="input-group has-validation">
                    <input type="text" className="form-control" name='localidad' required />

                    </div>
                </div>
                <div className="col-md-12">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name='email' 
                    value={mail}
                    onChange={(event) => setMail(event.target.value)}
                    required />

                </div>
                <div className="col-md-12">
                    <label htmlFor="email" className="form-label">Confirmar Email</label>
                    <input type="email" className="form-control" name='email' 
                    value={mailConf}
                    onChange={(event) => setMailConf(event.target.value)}
                    required />

                </div>
                <div className="col-md-12">
                    <label htmlFor="telefono" className="form-label">Telefono</label>
                    <input type="number" className="form-control" name='telefono' required />
                </div>
                    <button type='submit' className='btn-principal m-3'>Confirmar</button>

                </form>
        </div>
    );
}

export default Checkout;
