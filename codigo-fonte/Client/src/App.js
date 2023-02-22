import './App.css';

import Imobiliarias from './pages/Imobiliarias'

import { useState } from 'react'

function App() {
  const [responsiveness, setResponsiveness] = useState(false)
  const toggleResponsiveness = ()=> {
    responsiveness ? setResponsiveness(false) : setResponsiveness(true)
  }

  return (
    <>
      <Imobiliarias responsiveFunction={toggleResponsiveness} responsiveBool={responsiveness}/>
    </>
  )
}

export default App;
