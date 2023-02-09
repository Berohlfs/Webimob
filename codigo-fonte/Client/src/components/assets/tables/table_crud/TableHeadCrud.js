import { Link } from "react-router-dom";
import reload from "../../../../img/reload.png";
const TableHeadCrud = ({ columns, headerButton, setFiltro }) => {


  const handleSorting=(filtro)=>{
    setFiltro(filtro)
  }


    return (
     <thead>
        
      <tr>
      <th>
        <img src={reload} alt="recarregar" className="reload"/>
      </th>
      <th>
        {headerButton}
      </th>
       {columns.map(({label, accessor, sortable}) => {
        return (
        <th key={accessor}
        onClick={sortable ? () => {handleSorting(accessor)}:null}>
        {label}
        </th>
        )
       })}
      </tr>
     </thead>
    );
   };
   
   export default TableHeadCrud;