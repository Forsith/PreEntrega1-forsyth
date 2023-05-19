import Contador from '../Contador/Contador'

const itemDetail = ({ id, nombre, img, categoria, description, stock, precio }) =>{
    return (
        <article className="CardItem">
            <header className="header">
                 {nombre}
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {categoria}
                </p>
                <p className="Info">
                    Descripcion: {description}
                </p>
                <p className="Info">
                    Precio: ${precio}
                </p>
            </section>
            <footer className="Itemfooter">
             <Contador initial={1} stock={10} add={(cantidad) => console.log('Cantidad de producto', cantidad)}/>
            </footer>
        </article>
        


    )
}

export default itemDetail