//CSS
import './TableDefault.css'
//Libs
import axios from 'axios'
import config from '../scripts/config'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const TableDefault = ({headers=[], data_array=[], sortFunc=null, search='', sort_order='asc'})=> {

    const navigate = useNavigate()

    const deleteItem = async (id)=> {
        try{
            await axios.delete(`http://${config.server_ip}/imobiliarias/${id}`)
            toast.success('Item excluído com sucesso.')
            sortFunc(search, 'id', sort_order)
        }catch(erro){
            console.log(erro)
            toast.error('Erro de exclusão.')
        }
    }

    const accessItem = ()=> {
        navigate('/novaimobiliaria')
    }

    return(
        <table>
            <thead>
                <tr>
                    <th key={'header-excluir'}></th>
                    <th key={'header-detalhes'}></th>
                    {headers.map((header)=>

                        <th key={header.title}><button onClick={()=> sortFunc(search, header.sorting_param, sort_order)}>{header.title}</button></th>

                    )}
                </tr>
            </thead>
            <tbody>
                {data_array.map((data_item)=>
                    <tr key={data_item.id}>

                        <td key={`${data_item.id}-second-action`}><button onClick={()=>accessItem(data_item.id)}>Detalhes</button></td>
                        <td key={`${data_item.id}-delete`}><button onClick={()=>deleteItem(data_item.id)}>Excluir</button></td>

                        {headers.map((header)=>

                            <td key={`${data_item.id}-${header.sorting_param}`}>{data_item[header.sorting_param]}</td>

                        )}

                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default TableDefault
