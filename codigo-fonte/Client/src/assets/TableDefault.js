//CSS
import './TableDefault.css'
//Libs
import axios from 'axios'
import config from '../scripts/config'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
//Images
import delete_icon from '../images/delete-icon-16x16.png'
import edit_icon from '../images/edit-icon-16x16.png'

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

                    {headers.map((header)=>

                        <th key={header.title}><button onClick={()=> sortFunc(search, header.sorting_param, sort_order)}>{header.title}</button></th>

                    )}

                    <th key={'header-excluir'}></th>
                    <th key={'header-detalhes'}></th>

                </tr>
            </thead>
            <tbody>
                {data_array.map((data_item)=>
                    <tr key={data_item.id}>

                        {headers.map((header)=>

                            <td key={`${data_item.id}-${header.sorting_param}`}>{data_item[header.sorting_param]}</td>

                        )}

                        <td key={`${data_item.id}-second-action`}>
                            <button onClick={()=>accessItem(data_item.id)}>
                                <img className={'second-action-image'} src={edit_icon} alt={'detalhes'}/>
                            </button>
                        </td>

                        <td key={`${data_item.id}-delete`}>
                            <button onClick={()=>deleteItem(data_item.id)}>
                                <img className={'delete-image'} src={delete_icon} alt={'excluir'}/>
                            </button>
                        </td>

                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default TableDefault
