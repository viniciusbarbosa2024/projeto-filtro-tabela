import React from 'react'
import { useState } from 'react'
import './App.css'

//Componente referente a tabela
import { Table } from './components/Table.jsx'

//Objeto com todos os produtos da tabela
import products from './components/products.js'

const App = () => {
  //Refere-se ao array com os produtos que correspondem a pesquisa (inicialmente contém todos os produtos)
  const [productsAfterSearch,setProductsAfterSearch] = useState(products)
  
  //Função para fazer a pesquisa na tabela
  function search(e) {
    let nameTyped = e.target.value
    //Cópia do array products
    let productsBeforeSearch = [...products] //Anotar sobre Spread e sobre a referência de arrays
    
    //Remove os produtos que não correspondem com a pesquisa
    const filteredProducts = productsBeforeSearch.filter(product => product.name.toLowerCase().includes(nameTyped.toLowerCase())) //Anotar sobre includes
    
    //Atualiza o array de acordo com os produtos que correspondem a pesquisa para ser enviado como prop para o componente Table
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