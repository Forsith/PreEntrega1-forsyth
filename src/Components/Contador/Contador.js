import './Contador.css'
import { useState } from 'react' ;

const Contador = ({stock, initial, add}) => {
    const [cantidad,  setCantidad] = useState(initial)

    const incremento = () =>{
        if(cantidad < stock){
            setCantidad(cantidad+1)
        }
    }
    const reducc = () =>{
        if(cantidad > 1){
            setCantidad(cantidad-1)
        }
    }

    return(
        <div className='Contador'>
            <div className='Controles'>
                <button className='Buttom' onClick={reducc}>-</button>
                <h4 className='numero'>{cantidad}</h4>
                <button className='Buttom' onClick={incremento}>+</button>
            </div>
            <div>
                <button className='ButtomCar' onClick={() => add(cantidad)} disabled={!stock}>
                    agregar al carrito
                </button>
                
            </div>

        </div>

    )
}

export default Contador
