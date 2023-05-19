import { getProductByCategory } from "../../asyncMonck"
import CarWidget from "../CarWidget/CarWidget"
import '../NavBar/NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return(
        <nav className="NavBar">
            <Link to='/'>
                <h3>Kumba</h3>
            </Link>
            <div className="Categorias">
                <NavLink to={`/categoria/Remeras`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Remeras</NavLink>
                <NavLink to={`/categoria/Pantalones`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pantalones</NavLink>
                <NavLink to={`/categoria/Zapatillas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Zapatillas</NavLink>
            </div>
            <CarWidget/>
        </nav>
    )

}
export default NavBar