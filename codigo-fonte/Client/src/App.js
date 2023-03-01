//CSS
import './App.css';
//Componentes
import Layout from './layout/Layout'
import LoadingAnimation from './assets/LoadingAnimation'
import Imobiliaria from './pages/Imobiliaria'
import PaginaInicial from './pages/PaginaInicial'
import TabelaImobiliarias from './pages/TabelaImobiliarias'
//Libs
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const [loading_state, setLoadingState] = useState(false)

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Layout/>}>

            <Route index element={<PaginaInicial/>} />

            <Route path={'novaimobiliaria'} element={<Imobiliaria loadingFunc={setLoadingState}/>} />

            <Route path={'tabelaimobiliarias'} element={<TabelaImobiliarias loadingFunc={setLoadingState}/>} />

          </Route>

        </Routes>

      </BrowserRouter>

      {loading_state && <LoadingAnimation/>}

      <ToastContainer position={"top-center"} autoClose={3000}/>
    </>
  )
}

export default App;
