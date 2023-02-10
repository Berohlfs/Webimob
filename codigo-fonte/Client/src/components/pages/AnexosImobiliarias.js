
import { useEffect, useState } from "react";
import Modal from "../assets/Modal"
import TableAnexos from "../assets/tables/table_anexos/TableAnexos";
import axios from "axios";
import {toast} from "react-toastify"

const AnexosImobiliarias = ({setAbreModal,id}) =>{

    const columns = [
            
        { label: "Código", accessor: "id" },
        { label: "Nome", accessor: "NOME"},
        { label: "Data", accessor: "createdAt" },
    ];

    const [anexos,setAnexos]= useState([])
    const getAnexos = async ()=>{
        try{
            const res = await axios.get(`http://localhost:1324/imobiliarias/files/${id}`);
                
            setAnexos(res.data);
        }catch (error) {
                toast.error(error);
        }
    }
    useEffect(()=>{
      getAnexos();
    },[])

    const handleDelete = async (filename) => {
        axios
          .delete("http://localhost:1324/files/" + filename)
          .then(({ data }) => {
            const newArray = anexos.filter((anexo) => anexo.id !== id); 
            setAnexos(newArray);
            toast.success(data);
            getAnexos();
          })
          .catch(({ data }) => toast.error(data));
      };
    return(
    <>
     <Modal
        conteudo={{
            body: 
            <TableAnexos id={id} handleDelete={handleDelete} columns={columns} data={anexos} getAnexos={getAnexos} setAnexos={setAnexos}/>, 
            
            // footer: <button onClick={()=>{setAbreModal(false)}} type="button">Ok</button>,
            title: "ANEXOS"
          }}

        fechaModal={setAbreModal} />
    </>
    )

}

export default AnexosImobiliarias