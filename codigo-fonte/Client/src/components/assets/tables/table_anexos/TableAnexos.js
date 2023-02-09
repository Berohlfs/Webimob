import { useState } from "react";

import TableBodyAnexos from './TableBodyAnexos';
import TableHeadAnexos from './TableHeadAnexos';
//import { useSortableTable } from "./useSortableTable";

const TableAnexos = ({data,columns,id,setAnexos,getAnexos,handleDelete}) =>{





    return(
        <>
        <div className="div-overflow-table">

            <table className="">

            <TableHeadAnexos {...{ columns, id, getAnexos}} />
            <TableBodyAnexos {...{ columns, data, handleDelete, setAnexos}} />

            </table>
        </div>
        </>
    )
}

export default TableAnexos;