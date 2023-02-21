import './App.css';
import Header from './layouts/Header'
import Menu from './layouts/Menu'
import Container from './layouts/Container'

import { useState } from 'react'

function App() {
  const [responsiveBool, setResponsiveBool] = useState(false)
  const toggleResponsiveness = ()=> {
    responsiveBool ? setResponsiveBool(false) : setResponsiveBool(true)
  }
  return (
    <>
      <Header/>
      <Menu isResponsive={responsiveBool} toggle={toggleResponsiveness}/>
      <Container isResponsive={responsiveBool}>

      </Container>
    </>
  )
}

export default App;
