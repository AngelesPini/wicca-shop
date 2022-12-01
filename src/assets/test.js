import { createProducto, getProducto,deleteProducto, updateProducto, crearOrden,getOrden } from "./firebase";


// const prod =     {
//     "id" : 1,
//     "idCat":1,
//     "nombre": "Riñonera",
//     "modelo": "Prudence Brown",
//     "precio": 2500,
//     "stock": 10,
//     "img": "https://firebasestorage.googleapis.com/v0/b/wiccashop-react-2022.appspot.com/o/prudence-brown.png?alt=media&token=bf9b708c-188d-4a2c-bae9-83dc89b76a9a"
// }
//id:"xFTtFPb12Xtnrc8OG07A"

// getProducto("xFTtFPb12Xtnrc8OG07A").then(prod => console.log(prod))
// // createProducto(prod).then(mensaje=> console.log(mensaje))


// getProducto("xFTtFPb12Xtnrc8OG07A").then(prod => {
//     prod.stock -= 5
//     updateProducto("xFTtFPb12Xtnrc8OG07A", prod).then(mensaje => console.log(mensaje))
// })

// deleteProducto("xFTtFPb12Xtnrc8OG07A").then(mensaje => console.log(mensaje))


// cliente - orden de compra
// "Ig19ykurWr6x1AiFizpN"
// const cliente = {
//     nombre: "Nahuel",
//     apellido: "gabutti",
//     email: "nahuel@angeles.com",
//     telefono: 123456789,
//     dni: 1256458,
//     direccion: "angel cassanello 2874"
// }

// crearOrden(cliente, 30000, Date.now()).then(orden => console.log(orden))

// getOrden(
//     "Ig19ykurWr6x1AiFizpN").then(orden => console.log(orden))