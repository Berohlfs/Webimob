
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify"
import SearchBar from "../assets/SearchBar";
import TableCrud from "../assets/tables/table_crud/TableCrud";
import { Link } from "react-router-dom";
import mais from "../../img/detalhes.png";


function Imobiliarias(){

    const [imobiliarias,setImobiliarias]=useState([])
    const [busca, setBusca] = useState([])
    const [filtro, setFiltro] = useState('NOME')


    const getImobiliarias = async (filtro) =>{
        try{
            const res = await axios.get(`http://localhost:1324/imobiliarias?sort=${filtro}:asc`);
            setImobiliarias(res.data);
            setBusca(res.data)
        }catch (error) {
            toast.error(error);
        }
    }

    useEffect(()=>{
        getImobiliarias(filtro);
    },[filtro])//executa novamente quando muda os filtros

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:1324/imobiliarias/" + id)
      .then(({ data }) => {
        const newArray = imobiliarias.filter((imobiliaria) => imobiliaria.id !== id); 
        setImobiliarias(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));
      getImobiliarias(filtro)
  };

    const columns = [
        { label: "Código", accessor: "id"},
        { label: "Nome", accessor: "NOME", sortable:true},
        { label: "Apelido", accessor: "APELIDO",sortable:true },
        { label: "Parceiro", accessor: "PARCEIRO" },
    ];
      return( 
    <>
        <SearchBar imobiliarias={imobiliarias} setBusca={setBusca}/>
        <TableCrud
         handleDelete={handleDelete}
         setFiltro={setFiltro}
         columns={columns}
         data={busca}
         headerButton = {<Link className="a-button" to="novaImobiliaria">Adicionar</Link>}
         editLink = "detalhesImobiliaria"
        />
        
    </>
    
    )
}
export default Imobiliarias;