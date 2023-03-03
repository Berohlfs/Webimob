//Componentes
import ButtonDefault from '../assets/ButtonDefault'
import PageActions from '../assets/PageActions'
import SearchBar from '../assets/SearchBar'
import TableDefault from '../assets/TableDefault'
//Images
import add_icon from '../images/add-icon-12x12.png'
//Libs
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import config from '../scripts/config'
import { toast } from 'react-toastify'

const TabelaImobiliarias = ({loadingFunc})=> {

    const navigate = useNavigate()

    const [search_value, setSearchValue] = useState('')

    const [imobiliarias, setImobiliarias] = useState([])

    const [asc_desc, setAscDesc] = useState('asc')

    useEffect(()=>{
        fetchImobiliarias(search_value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleSearchValue = (e)=> {
        setSearchValue(e.target.value)
    }

    const fetchImobiliarias = async (busca='', sort_type='NOME', sort_order='asc')=> {
        let route
        if(!busca){
             route = `http://${config.server_ip}/imobiliarias?sort=${sort_type}:${sort_order}`
        }else{
             route = `http://${config.server_ip}/imobiliarias?SEARCH=${busca}&&sort=${sort_type}:${sort_order}`
        }
        try{
            loadingFunc(true)
            const data = await fetch(route)
            const imobiliarias = await data.json()
            loadingFunc(false)
            setImobiliarias(imobiliarias)
            setAscDesc(asc_desc === 'asc' ? 'desc' : 'asc')
        }catch(erro){
            loadingFunc(false)
            console.log(erro)
            toast.error('Não foi possível carregar as imobiliárias.')
        }
    }

    return (

        <>
            <PageActions title={'Imobiliárias'}>

                <ButtonDefault label={'Nova imobiliária'} img_src={add_icon} button_type={'button'} clickFunc={()=> navigate('/novaimobiliaria')}/>

            </PageActions>

            <SearchBar searchFunc={()=> fetchImobiliarias(search_value)} handleFunc={handleSearchValue} placeholder={'Buscar por nome CPF ou CNPJ.'}/>

            <TableDefault
            headers={[
                {attribute:'', route_param:'id', action_name:'Excluir'},
                {attribute:'', route_param:'id', action_name:'Detalhes'},
                {attribute:'ID', route_param:'id', action_name:''},
                {attribute:'Nome', route_param:'NOME', action_name:''},
                {attribute:'Apelido', route_param:'APELIDO', action_name:''},
                {attribute:'Parceiro', route_param:'PARCEIRO', action_name:''}]}
            data_array={imobiliarias}
            search={search_value}
            sortFunc={fetchImobiliarias}
            sort_order={asc_desc}
            />

        </>

    )
}

export default TabelaImobiliarias
