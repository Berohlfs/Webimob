//CSS
import './App.css';
//Componentes
import NovaImobiliaria from './pages/NovaImobiliaria'
import PaginaInicial from './pages/PaginaInicial'
//Libs
import { useState } from 'react'

function App() {

  const [responsiveness, setResponsiveness] = useState(false)

  const toggleResponsiveness = ()=> {
    setResponsiveness(!responsiveness)
  }

  return (
    <>
      <NovaImobiliaria responsiveFunction={toggleResponsiveness} responsiveState={responsiveness}/>
    </>
  )
}

export default App;
