//CSS
import './App.css';
//Componentes
import Imobiliarias from './pages/Imobiliarias'
//Libs
import { useState } from 'react'

function App() {

  const [responsiveness, setResponsiveness] = useState(false)

  const toggleResponsiveness = ()=> {
    responsiveness ? setResponsiveness(false) : setResponsiveness(true)
  }

  return (
    <>
      <Imobiliarias responsiveFunction={toggleResponsiveness} responsiveState={responsiveness}/>
    </>
  )
}

export default App;
