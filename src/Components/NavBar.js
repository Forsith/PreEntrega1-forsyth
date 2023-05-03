import CarWidget from "./CarWidget/CarWidget"

const NavBar = () => {
    return(
        <nav>
            <h3>Kumba</h3>
            <div>
                <button>Remeras</button>
                <button>Pantalones</button>
                <button>Zapatillas</button>
            </div>
            <CarWidget/>
        </nav>
    )

}
export default NavBar