
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import download from "downloadjs"


const TableBodyAnexos = ({ columns, data, handleDelete }) => {

    

    //const idSelected = columns[0].accessor

    const handleDownload = async (originalname, path) => {// metodo de download generico modularizar depois


      const url = `http://localhost:1324/files/${path}`;
      try{
      const res = await axios({
          url, 
          method: 'GET',
          responseType: 'blob', 
      });  

      download(res.data, originalname)
      toast.success("Download realizado com sucesso!")
      }catch (error) {
          toast.error("não foi possivel fazer o download de " + originalname);
      }
    }



    return (
     <tbody> 

      {data.map((data) => {
        
       return (
        
        <tr key={data.id}>
            
        
        <td><button onClick={()=>{
          handleDelete(data.PATH)}} className="transparent-button">Excluir</button>
        </td>

        <td>
          <button onClick={()=>{handleDownload(data.NOME,data.PATH)}}>Download</button>
        </td> 
        {columns.map(({ accessor }) => {  
          const tData = data[accessor] ? data[accessor] : " ";
          return <td key={accessor}>{tData} </td> ;
         })}
        </tr>
       );
      })}
     </tbody>
    );
   };
   
   export default TableBodyAnexos;