//CSS
import './TableDefault.css'
//Libs
import axios from 'axios'
import config from '../scripts/config'

const TableDefault = ({headers=[], data=[], sortFunc=null, search='', sort_order='asc'})=> {

    const deleteItem = async (id)=> {
        await axios.delete(`http://${config.server_ip}/imobiliarias/:${id}`)
    }

    return(
        <table>
            <thead>
                <tr>
                    {headers.map((header)=>

                    <th key={`${header.attribute}${header.action_name}`}>

                        {header.attribute && <button onClick={header.attribute ? ()=> sortFunc(search, header.action, sort_order) : null}>{header.attribute}</button>}

                    </th>)}

                </tr>
            </thead>
            <tbody>
                {data.map((data_item)=>

                    <tr key={`${data_item.NOME}`}>

                        {headers.map((header)=>

                            header.attribute ?
                                <td key={`${header.attribute}${header.action_name}`}>{data_item[header.action]}</td> :
                                <td key={`${header.attribute}${header.action_name}`}><button onClick={()=> deleteItem(data_item.id)}>{header.action_name}</button></td>
                        )}

                    </tr>

                )}
            </tbody>
        </table>
    )
}

export default TableDefault
