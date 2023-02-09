
import { Link } from "react-router-dom";
import mais from "../../../../img/detalhes.png";
import editar from "../../../../img/editar-dark.png"

const TableBodyCrud = ({ columns, data, handleDelete, editLink, handleEdit }) => {


    return (
     <tbody> 

      {data.map((data) => {
        
       return (
        
        <tr key={data.id}>
        <td>
            <button onClick={()=>{
            handleDelete(data.id)
            }} className="transparent-button">Excluir
            </button>
        </td>

            <td>
                {editLink?<Link
                className="" to={editLink+"/"+data.id}>
                <img src={mais} alt="mais"/>
               </Link>:<Link
                className="" onClick={()=>handleEdit(data.id)}>
               <img src={editar} alt="editar"/>
               </Link>}
                
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
   
   export default TableBodyCrud;