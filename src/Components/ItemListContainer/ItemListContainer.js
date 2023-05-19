import {useState, useEffect} from 'react'
import {getProducts, getProductByCategory} from '../../asyncMonck'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({saludos}) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(()=> {
        const asyncFunc = categoryId ? getProductByCategory : getProducts


        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])


    return(
        <div>
            <h1>{saludos}</h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer