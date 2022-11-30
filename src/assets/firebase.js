import { initializeApp } from "firebase/app";
import {collection, getFirestore, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "wiccashop-react-2022.firebaseapp.com",
  projectId: "wiccashop-react-2022",
  storageBucket: "wiccashop-react-2022.appspot.com",
  messagingSenderId: "980594903766",
  appId: "1:980594903766:web:008ee1bd75f72c89285777"
};

const app = initializeApp(firebaseConfig);

const database = getFirestore()

const cargarDataBase = async () =>{
  const promise = await fetch('./json/stock.json')
  const productos = await promise.json()
  productos.forEach(async (producto) => {
    await addDoc(collection(database, "riñoneras"), {
      nombre: producto.nombre,
      modelo: producto.modelo,
      precio: producto.precio,
      stock: producto.stock,
      idCat: producto.idCat,
      img: producto.img
    })
  })
}

const getProductos = async() => {
  const productos = await getDocs(collection(database, "riñoneras"))
  const items = productos.docs.map(prod => {return {...prod.data(), id: prod.id}})
  return items
}

const getProducto = async (id) => {
  const prod = await getDoc(doc(database, "riñoneras", id))
  const item = {...prod.data(), id: prod.id}
  return item
}

const createProducto = async(objProducto) =>{
  const estado = await addDoc(collection(database, "riñoneras"), {
    nombre: objProducto.nombre,
    modelo: objProducto.modelo,
    precio: objProducto.precio,
    stock: objProducto.stock,
    idCat: objProducto.idCat,
    img: objProducto.img
  })
  return estado
}

const updateProducto = async(id, info) =>{
  const estado = await updateDoc(doc(database, "riñoneras", id), info)
  return estado
}

const deleteProducto = async(id) =>{
  const estado = await deleteDoc(doc(database, "riñoneras", id))
  return estado
}

const crearOrden = async (cliente, precioTotal, fecha) =>{
  const ordenCompra = await addDoc(collection(database, "ordenCompra"), {
    nombre: cliente.nombre,
    apellido: cliente.apellido,
    email: cliente.email,
    dni: cliente.dni,
    telefono: cliente.telefono,
    direccion: cliente.direccion,
    // fecha: fecha,
    precioTotal: precioTotal
  })
  return ordenCompra
}

const getOrden = async(id) =>{
  const item = await getDoc(doc(database, "ordenCompra", id))
  const ordenCompra = {...item.data(), id: item.id}
  return ordenCompra
}



export {cargarDataBase, getProductos, getProducto, createProducto, updateProducto, deleteProducto, crearOrden, getOrden}


