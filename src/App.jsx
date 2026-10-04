import { useState } from 'react'
import './App.css'
import Menu from './components/Menu.jsx'
import Header from './components/Header.jsx'
import Produtos from './components/produtos.jsx'
import NossosServicos from './components/NossosServicos.jsx'
import SobreNos from './components/SobreNos.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <main>
        <Menu />
        <Header />
        <Produtos />
        <NossosServicos />
        <SobreNos />
        <Contato 
          backgroundImage={'../bg-contato.png'}
        />
        <Footer />
    </main>
  )
}

export default App