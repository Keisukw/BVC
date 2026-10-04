import { useState } from 'react'
import './App.css'
import Menu from './components/Menu.jsx'
import Header from './components/Header.jsx'
import Produtos from './components/produtos.jsx'

function App() {

  return (
    <main>
        <Menu />
        <Header />
        <Produtos />
    </main>
  )
}

export default App