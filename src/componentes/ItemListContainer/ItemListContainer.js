import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import {getProducts, getProductsByCategory} from "../../async-mocks/data"
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
  
const [products, setProducts] = useState([])

const {categoryId} = useParams()


useEffect(() => {
  const asyncFunc = categoryId ? getProductsByCategory : getProducts

  asyncFunc(categoryId)
  .then(response =>{
       setProducts(response)
       
    
  })
.catch(error =>{
  console.error(error)
})
},[categoryId])


  return (


     <div className="ListContainer">
      <ItemList products={products}/>   
    </div>
   
  )
}

export default ItemListContainer