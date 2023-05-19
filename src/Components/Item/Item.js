import '../Item/item.css';
import { Link } from "react-router-dom"
const Item = ({id,nombre, precio,img, stock}) => {

    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="Itemhead">
                    {nombre}
                </h2>

            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    precio: {precio} ARS$
                </p>
                <p className="Info">
                    Stock:: {stock} Disponibles.
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className='Options'>Ver detalles.</Link>
            </footer>
        </article>
    )
}
export default Item