
import { Link } from 'react-router-dom';
const Item = ({prodStock}) => {
    return (
        <div className="card_producto">
            <img src={prodStock.img} className="card-img-top" alt="imagen de producto" />
                <div className="card-body">
                <h5 className="card-title">{prodStock.nombre} {prodStock.modelo}</h5>
                <p className="card-text">Precio: $ {new Intl.NumberFormat('de-DE').format(prodStock.precio)}</p>
                <p className="card_span">Unidades disponibles: {prodStock.stock}</p>
            <Link to={`/product/${prodStock.id}`}><button className="btn-principal">ver detalles</button></Link>
                </div>
        
    </div>
    );
}

export default Item;
