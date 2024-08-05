import React from 'react'
import './App.css'
import { Table } from './components/Table.jsx'

const App = () => {
  function search(e) {
    let nameTyped = e.target.value
    
    //Preciso de um array com todos os produtos
  }
  
  return (
    <main>
      <input type="text" name="search" id="search" placeholder='Digite o nome do produto' onChange={search}/>  
      <Table/>
    </main>
  )
}

export default App