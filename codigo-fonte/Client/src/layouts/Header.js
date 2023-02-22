//Imagens
import webimob_logo from '../images/logo-120x18.png'
//Componentes
import './Header.css'

const Header = ({title})=> {
    return (
        <header>
            <img src={webimob_logo} alt={'Logo Webimob'}/>
            <h1>{title}</h1>
        </header>
    )
}

export default Header
