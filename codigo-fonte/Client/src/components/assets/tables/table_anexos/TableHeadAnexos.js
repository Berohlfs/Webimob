import { useRef } from 'react';
import {toast} from "react-toastify"

const TableHeadAnexos = ({ columns,id,getAnexos}) => {

  const filesElement = useRef(null);

  const sendFile = async () => {
    const dataForm = new FormData();
    for (const file of filesElement.current.files) {
      dataForm.append('file', file);
    }
    const res = await fetch(`http://localhost:1324/imobiliarias/files/${id}`, { 
      method: 'POST',
      body: dataForm,
    });
    const data = await res.json();
    toast.success(data)
    getAnexos();
  };
    return (
     <thead>
        
      <tr>
        <th>    
        <input type="file" ref={filesElement} />
        
       </th>
       <th>
       <button type='button' onClick={sendFile}>Send file</button>

       </th>
       {columns.map(({label, accessor}) => {
        return  <th key={accessor}>{label}</th>;
       })}
      </tr>
     </thead>
    );
   };
   export default TableHeadAnexos;