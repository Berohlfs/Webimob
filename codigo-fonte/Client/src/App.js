import './App.css';
import Header from './layouts/Header'
import Menu from './layouts/Menu'
import Container from './layouts/Container'

import { useState } from 'react'

function App() {
  const [responsiveness, setResponsiveness] = useState(false)
  const toggleResponsiveness = ()=> {
    responsiveness ? setResponsiveness(false) : setResponsiveness(true)
  }
  return (
    <>
      <Header/>
      <Menu isResponsive={responsiveness} toggle={toggleResponsiveness}/>
      <Container isResponsive={responsiveness}>

      </Container>
    </>
  )
}

export default App;
