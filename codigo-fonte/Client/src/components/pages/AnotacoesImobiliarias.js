
import { useEffect, useState } from "react";
import Modal from "../assets/Modal"
import TableCrud from "../assets/tables/table_crud/TableCrud";
import axios from "axios";
import {toast} from "react-toastify"
import { useRef } from "react";

const AnotacoesImobiliarias = ({setAbreModal,id}) =>{



    const [anotacoes, setAnotacoes] = useState('')
    var teste;
    const getAnotacoes = async ()=>{
        try{
            const res = await axios.get(`http://localhost:1324/imobiliarias/anotacoes/${id}`);
            
            setAnotacoes(res.data.ANOTACOES);


            console.log(anotacoes)
        }catch (error) {
            toast.error("Não foi possivel acessar anotações.");
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
        } catch (error) {
         toast.error("Não foi possível salvar as anotações.")
        }
    }


    return(
    <>
     <Modal
        conteudo={{
            body:<textarea onChange={(e) => setAnotacoes(e.target.value)} placeholder="Digite aqui suas anotações...">{anotacoes}</textarea> ,

            footer: <button onClick={handleSubmit} type="button">Salvar</button>,
            title: "ANOTAÇÕES"
          }}

        fechaModal={setAbreModal} />
    </>
    )

}

export default AnotacoesImobiliarias