import React from 'react'
import { useState } from 'react'
import './App.css'
import { Table } from './components/Table.jsx'
import products from './components/products.js'

const App = () => {
  const [productsAfterSearch,setProductsAfterSearch] = useState(products)
  
  function search(e) {
    let nameTyped = e.target.value
    let productsBeforeSearch = [...products] //Anotar sobre Spread e sobre a referência de arrays
    
    //Remove os produtos que não correspondentes com a pesquisa
    const filteredProducts = productsBeforeSearch.filter(product => product.name.toLowerCase().includes(nameTyped.toLowerCase())) //Anotar sobre includes
    
    setProductsAfterSearch(filteredProducts)
  }
  
  return (
    <main>
      <input type="text" name="search" id="search" placeholder='Digite o nome do produto' onChange={search}/>  
      <Table productsDisplayed={productsAfterSearch}/>
    </main>
  )
}

export default App