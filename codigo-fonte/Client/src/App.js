//CSS
import './App.css';
//Componentes
import Layout from './layout/Layout'
import NovaImobiliaria from './pages/NovaImobiliaria'
//Libs
import { useState } from 'react'

function App() {

  const [responsiveness, setResponsiveness] = useState(false)

  const toggleResponsiveness = ()=> {
    setResponsiveness(!responsiveness)
  }

  return (
    <Layout title={'Nova imobiliária'} responsiveState={responsiveness} responsiveFunction={toggleResponsiveness}>

      <NovaImobiliaria/>

    </Layout>
  )
}

export default App;
