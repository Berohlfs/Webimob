//CSS
import './App.css';
//Componentes
import Layout from './layout/Layout'
import NovaImobiliaria from './pages/NovaImobiliaria'
import PaginaInicial from './pages/PaginaInicial'
//Libs7
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout/>}>

          <Route index element={<PaginaInicial/>} />
          <Route path={'novaimobiliaria'} element={<NovaImobiliaria/>} />

        </Route>

      </Routes>

    </BrowserRouter>

  )
}

export default App;
