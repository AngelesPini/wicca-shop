import {useState} from 'react';

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1) //valor inicial
    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > 1 && setContador(contador - 1)

    const agregarProducto = () =>{
        onAdd(contador)
    }



    return (
        <>
            <button onClick={sumar} className='btn_contador'>+</button>
                {contador}
            <button onClick={restar} className='btn_contador'>-</button>

            <button className='btn-principal' onClick={agregarProducto}>añadir al carrito</button>    
        </>
    );
}

export default ItemCount;