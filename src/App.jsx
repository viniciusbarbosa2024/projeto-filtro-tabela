import React from 'react'
import './App.css'
import { Table } from './components/Table'

const App = () => {
  return (
    <main>
      <input type="text" name="search" id="search" placeholder='Digite o nome do produto' />  
      <Table/>
    </main>
  )
}

export default App