import { useState } from "react";
import TableBodyCrud from "./TableBodyCrud";
import TableHeadCrud from './TableHeadCrud';
//import { useSortableTable } from "./useSortableTable";

const TableCrud = ({data,columns,headerButton,editLink,setFiltro, handleDelete, handleEdit}) =>{

    return(
        <>

        <div className="div-overflow-table">

            <table className="">

            <TableHeadCrud {...{ columns, headerButton, setFiltro}} />
            <TableBodyCrud {...{ columns, data, handleDelete, editLink, handleEdit}} />

            </table>
        </div>
        </>
    )
}

export default TableCrud;