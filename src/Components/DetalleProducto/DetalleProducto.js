import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMonck";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const DetalleProducto = () => {
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(()=>{
        getProductById(itemId)
         .then(response => {
            setProduct(response)
         })
         .catch(error => {
            console.error(error)
         })
    },[itemId])
    
    return(
        <div className="DetalleProducto">
            <ItemDetail {...product}/>
        </div>
    )
}
export default DetalleProducto