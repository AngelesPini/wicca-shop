
import { useState, useEffect, useContext } from 'react';
import { useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { getProducto } from '../../assets/firebase.js'
import { DarkModeContext } from '../../context/darkMode.js';


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);

    const {id} = useParams()

    const {darkMode} = useContext(DarkModeContext)

    useEffect(() => {
        getProducto(id).then(prod => {
            setProducto(prod)
            console.log(prod)
        })
    }, []);
    return (
        <>

            <div className={darkMode ? "item_container darkMode" : "item_container"}>
                <ItemDetail producto={producto}/>
            </div>

        </>

    );
}

export default ItemDetailContainer;
