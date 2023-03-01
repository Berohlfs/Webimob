//Componentes
import ButtonDefault from '../assets/ButtonDefault'
import PageActions from '../assets/PageActions'
//Images
import add_icon from '../images/add-icon-12x12.png'
//Libs
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import config from '../scripts/config'

const TabelaImobiliarias = ({loadingFunc})=> {

    const navigate = useNavigate()

    const [imobiliarias_obj, setImobiliariasObj] = useState()

    const fetchImobiliarias = async ()=> {
        try{
            loadingFunc(true)
            const data = await fetch(`http://${config.server_ip}/imobiliarias`)
            const imobiliarias = await data.json()
            loadingFunc(false)
            setImobiliariasObj(imobiliarias)
        }catch(erro){
            loadingFunc(false)
            console.log(erro)
            alert('ERRO: não foi possível carregar as imobiliárias.')
        }
    }

    return (
        <>
            <PageActions title={'Imobiliárias'}>

                <ButtonDefault label={'Nova'} img_src={add_icon} button_type={'button'} clickFunc={()=> navigate('/novaimobiliaria')}/>

            </PageActions>

            <p>{JSON.stringify(imobiliarias_obj)}</p>
            <button onClick={fetchImobiliarias}>fetch</button>
        </>
    )
}

export default TabelaImobiliarias
