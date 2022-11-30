import Item from "../item/item";

const ItemList = ({productsList}) => {

    return (
        <>
        {productsList.map(producto => <Item key={producto.id} prodStock = {producto}/>)}
        </>
    );
}

export default ItemList;
