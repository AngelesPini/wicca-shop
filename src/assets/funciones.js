import { cargarDataBase, getProductos } from "./firebase.js"

    // mostrar productos en DOM
    export const consultarBDD = async (ruta) =>{
        const promise = await fetch(ruta)


        const productos = await promise.json()
        return productos

        }

// getProductos().then(data => console.log(data))
// cargarDataBase()

    