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
                    {headers.map((header)=>

                    <th key={`${header.attribute}${header.action_name}`}>

                        {header.attribute &&

                        <button onClick={header.attribute ? ()=> sortFunc(search, header.route_param, sort_order) : null}>{header.attribute}</button>}

                    </th>)}

                </tr>
            </thead>
            <tbody>
                {data_array.map((data_obj)=>

                    <tr key={`${data_obj.id}`}>

                        {headers.map((header)=>

                            <td key={`${header.action_name}${header.attribute}`}>

                                {header.attribute ?

                                data_obj[header.route_param] :

                                <button onClick={header.action_name === 'Excluir' ? ()=> deleteItem(data_obj[header.route_param]) : ()=> accessItem()}>{header.action_name}</button>}

                            </td>

                        )}

                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default TableDefault
