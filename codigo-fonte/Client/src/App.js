import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Imobiliarias from "./components/pages/Imobiliarias";
import Header from "./components/layout/Header";
import SideBar from "./components/layout/SideBar";
import {toast, ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

import Container from "./components/layout/Container";
import NovaImobiliaria from "./components/pages/NovaImobiliaria";
import Login from "./components/pages/Login";
import RotasProtegidas from "./components/pages/RotasProtegidas";


function App() {




  return (

    <Router>
    <Header />
    <SideBar /> 
    <Container>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/login" element= {<Login />} />
        <RotasProtegidas path="/imobiliarias" element= {<Imobiliarias />} />
        <Route path="/imobiliarias/novaImobiliaria" element= {<NovaImobiliaria />} />
        <Route path="/imobiliarias/detalhesImobiliaria/:id" element= {<NovaImobiliaria detalhes={true}/>} />
      </Routes> 
    </Container>
    <ToastContainer autoClose={3000} position={toast.POSITION.TOP_CENTER}/>
    </Router> 
  );
}

export default App;
