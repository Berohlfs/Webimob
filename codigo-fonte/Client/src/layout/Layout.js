//Imagens
import webimob_logo from '../images/logo-120x18.png'
import drag_icon from '../images/drag-icon-12x18.png'
//CSS
import './Header.css'
import './Nav.css'
import './Section.css'
//Componentes
import NavLiExpandable from '../assets/NavLiExpandable'
import NavLiDefault from '../assets/NavLiDefault'
//Libs
import { Outlet } from "react-router-dom";

const Layout = ({responsiveState, responsiveFunction})=> {
    return (

        <>
            <header>
                <img src={webimob_logo} alt={'Logo Webimob'}/>
            </header>

            <nav className={`menu ${responsiveState ? 'responsive-menu' : ''}`}>

                <div id={'toggle-responsiveness-div'} onClick={responsiveFunction}>

                    <img id={'toggle-img'} src={drag_icon} alt={'expandir/recolher'}/>

                </div>

                <NavLiDefault title={'Página inicial'} link={'/'}/>

                <NavLiExpandable title={'Produção'} array={[{name : 'Imobiliárias', link : '/novaimobiliaria'}]}/>

            </nav>

            <section className={`container ${responsiveState ? 'responsive-container' : ''}`}>

                <Outlet/>

            </section>


        </>

    )
}

export default Layout
