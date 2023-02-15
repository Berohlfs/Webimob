import React, { useState } from 'react';
import axios from "axios";
import Cookies from "universal-cookie";

const cookies  = new Cookies();


function LoginPage() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const config = {
    method: "post",
    url: "http://localhost:1324/sessions",
    data: {
      usuario,
      senha,
    },
  };
 


  function handleUsuarioChange(event) {
    setUsuario(event.target.value);
  }

  function handleSenhaChange(event) {
    setSenha(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios(config).then((res)=>{
        cookies.set("TOKEN", res.data.token, {
            path: "/"
        })
        window.location.href = "/imobiliarias"
        console.log(res)
    })
    .catch((error)=>{
      console.log(error)
    })
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Usuario:
        <input type="usuario" value={usuario} onChange={handleUsuarioChange} />
      </label>
      <label>
        Senha:
        <input type="senha" value={senha} onChange={handleSenhaChange} />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginPage;
