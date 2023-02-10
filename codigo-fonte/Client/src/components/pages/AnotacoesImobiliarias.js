
import { useEffect, useState } from "react";
import Modal from "../assets/Modal"
import axios from "axios";
import {toast} from "react-toastify"
import { useRef } from "react";

const AnotacoesImobiliarias = ({setAbreModal,id}) =>{



    const [anotacoes, setAnotacoes] = useState('')
    const [change, setChange] = useState(false)
    const ref = useRef()

    const getAnotacoes = async ()=>{

        const textBoxValue = ref.current
        try{
            
            const res = await axios.get(`http://localhost:1324/imobiliarias/anotacoes/${id}`);
            
            const response = res.data.ANOTACOES
            textBoxValue.textAnotacoes.value = response
            console.log(response)
            
        }catch (error) {
            toast.error("Não foi possivel acessar anotações." + error);
        }
    }

    useEffect(()=>{
        getAnotacoes();
    },[])

    const handleSubmit = async () =>{
        try {
            await axios.put(`http://localhost:1324/imobiliarias/anotacoes/${id}`,{
                anotacoes
            });
            toast.success("Anotações salvas com sucesso.")
            setChange(false)
        } catch (error) {
         toast.error("Não foi possível salvar as anotações.")
        }
    }

    const handleChange = (e) =>{
        setAnotacoes(e.target.value)
        setChange(true)
    }


    return(
    <>
     <Modal
        conteudo={{
            body:<form ref={ref}><textarea name="textAnotacoes" onChange={handleChange} placeholder="Digite aqui suas anotações..."></textarea ></form> ,

            
            footer: change?<button onClick={handleSubmit} type="button">Salvar</button>:"",
            title: "ANOTAÇÕES"
          }}

        fechaModal={setAbreModal} />
    </>
    )

}

export default AnotacoesImobiliarias