//Componentes
import ButtonDefault from '../assets/ButtonDefault'
import PageActions from '../assets/PageActions'
import LoadingAnimation from '../assets/LoadingAnimation'
//Images
import add_icon from '../images/add-icon-12x12.png'
//Libs
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const TabelaImobiliarias = ()=> {

    const navigate = useNavigate()

    const [loading_state, setLoadingState] = useState(true)

    const [imobiliarias_obj, setImobiliariasObj] = useState()

    const fetchImobiliarias = async ()=> {
        try{
            setLoadingState(true)
            const data = await fetch(`http://192.168.51.16:1324/imobiliarias`)
            const imobiliarias = await data.json()
            setLoadingState(false)
            setImobiliariasObj(imobiliarias)
        }catch(erro){
            console.log(erro)
            alert('ERRO: não foi possível carregar as imobiliárias.')
        }
    }

    return (
        <>
            <LoadingAnimation display={loading_state}/>

            <PageActions title={'Imobiliárias'}>

                <ButtonDefault label={'Nova'} img_src={add_icon} button_type={'button'} clickFunc={()=> navigate('/novaimobiliaria')}/>

            </PageActions>

            <p>{JSON.stringify(imobiliarias_obj)}</p>
            <button onClick={fetchImobiliarias}>fetch</button>
        </>
    )
}

export default TabelaImobiliarias
