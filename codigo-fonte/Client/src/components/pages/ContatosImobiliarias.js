
import { useEffect, useState } from "react";
import Modal from "../assets/Modal"
import TableCrud from "../assets/tables/table_crud/TableCrud";
import axios from "axios";
import {toast} from "react-toastify"
import { useRef } from "react";

const ContatosImobiliarias = ({setAbreModal,id}) =>{

    const ref = useRef()

    const columns = [
        { label: "Nome", accessor: "NOME"},
        { label: "Telefone", accessor: "TELEFONE"},
        { label: "Aniversário", accessor: "NASCIMENTO" },
    ];

    const [text, setText] = useState(false)
    
    const [contatos,setContatos]= useState([])
    const [edit, setEdit] = useState(0)
    
    

    const getContatos = async ()=>{
        try{
            const res = await axios.get(`http://localhost:1324/imobiliarias/contatos/${id}`);
            setContatos(res.data);
        }catch (error) {
            toast.error(error);
        }
    }


    useEffect(()=>{
      getContatos();
    },[])


    const handleDelete = async (id) => {
        axios
          .delete(`http://localhost:1324/contatos/${id}`)
          .then(({ data }) => {
            const newArray = contatos.filter((contato) => contato.id !== id); 
            setContatos(newArray);
            toast.success(data);
            getContatos();
          })
          .catch(({ data }) => toast.error(data));
      };


    const openText = () => {
      setText(!text)
    }

    const openAdicionar = () =>{
      openText();
      setEdit(0)
    }


    const handleEdit = (id) =>{
      setText(true)
      setEdit(id)
      try {
        axios.get(`http://localhost:1324/imobiliarias/contatos/detalhes/${id}`).then(res=>{
          const contato = ref.current;
          const contatoInfo = res.data
          contato.nome.value = contatoInfo.NOME
          contato.telefone.value = contatoInfo.TELEFONE
          contato.nascimento.value = contatoInfo.NASCIMENTO  
        })
      }catch(error){
        toast.error(error.response.data);
      }
    }


    const handleSubmit = async (e) =>{
      
      e.preventDefault();
      const contato = ref.current;
      
      if(
          !contato.nome.value
      ){
          return toast.warn('preencha todos os campos corretamente!')
      }
      if(edit){
        await axios
        .put(`http://localhost:1324/imobiliarias/contatos/${edit}`,{
        nome: contato.nome.value,
        telefone: contato.telefone.value,
        nascimento: contato.nascimento.value,
        })
        .then(({data})=>toast.success(data))
        .catch((error)=>{
            console.log(error)
            toast.warning(error.response.data)
        })

      }else{

        await axios
        .post(`http://localhost:1324/imobiliarias/contatos/${id}`,{
        nome: contato.nome.value,
        telefone: contato.telefone.value,
        nascimento: contato.nascimento.value,
        })
        .then(({data})=>toast.success(data))
        .catch((error)=>{
            console.log(error)
            toast.warning(error.response.data)
        })

      }

    openText();
    getContatos();
    }

    return(
    <>
     <Modal
        conteudo={{
           body: 
           <> {text &&(
           <div>
            <form ref={ref}onSubmit={handleSubmit}>

            <input name="nome" type="text" placeholder="Digite o Nome"/>
            <input name="telefone" type="text" placeholder="Digite o telefone"/>
            <input name="nascimento" type="date" placeholder="Digite a data de nascimento"/>
            <button>+</button>
            </form>

           </div>
          
 
            
            )}
            <TableCrud
             id={id}
             handleDelete={handleDelete}
             columns={columns}
             data={contatos}
             handleEdit = {handleEdit}
             headerButton={<button className="a-button" onClick={openAdicionar}>{text?"Cancelar":"Adicionar"}
             
             </button>}
             />
            </>,

            
// footer: <button onClick={()=>{setAbreModal(false)}} type="button">Ok</button>,
            title: "CONTATOS"
          }}

        fechaModal={setAbreModal} />
    </>
    )

}

export default ContatosImobiliarias