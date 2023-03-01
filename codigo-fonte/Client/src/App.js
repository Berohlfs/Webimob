//CSS
import './App.css';
//Componentes
import Layout from './layout/Layout'
import Imobiliaria from './pages/Imobiliaria'
import PaginaInicial from './pages/PaginaInicial'
import TabelaImobiliarias from './pages/TabelaImobiliarias'
//Libs7
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout/>}>

          <Route index element={<PaginaInicial/>} />
          <Route path={'novaimobiliaria'} element={<Imobiliaria/>} />
          <Route path={'tabelaimobiliarias'} element={<TabelaImobiliarias/>} />

        </Route>

      </Routes>

    </BrowserRouter>

  )
}

export default App;
