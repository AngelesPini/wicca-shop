import { Link } from "react-router-dom";
const Secciones = () => {
    return (
        <>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link to="/category/1">Prudence</Link></li>
        <li className="nav-item"><Link to="/category/2">Dorcas</Link></li>
        <li className="nav-item"><Link to="/category/3">Agatha</Link></li>
        <li className="nav-item"><Link to="/category/4">Clásicas</Link></li>
      </ul>
        </>

    );
}

export default Secciones;
