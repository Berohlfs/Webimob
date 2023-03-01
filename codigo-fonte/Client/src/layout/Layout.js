//Imagens
import webimob_logo from '../images/logo-120x18.png'
import vertical_more_icon from '../images/vertical-more-icon-8x20.png'
//CSS
import './Header.css'
import './Nav.css'
import './Section.css'
//Componentes
import NavLiExpandable from '../assets/NavLiExpandable'
import NavLiDefault from '../assets/NavLiDefault'
//Libs
import { Outlet } from "react-router-dom";
import { useState } from 'react'

const Layout = ()=> {

    const [responsiveness, setResponsiveness] = useState(false)

    const toggleResponsiveness = ()=> {
        setResponsiveness(!responsiveness)
    }

    return (

        <>
            <header>
                <img src={webimob_logo} alt={'Logo Webimob'}/>
            </header>

            <nav className={`menu ${responsiveness ? 'responsive-menu' : ''}`}>

                <div id={'toggle-responsiveness-div'} onClick={toggleResponsiveness}>

                    <img id={'toggle-img'} src={vertical_more_icon} alt={'expandir/recolher'}/>

                </div>

                <NavLiDefault title={'Página inicial'} link={'/'}/>

                <NavLiExpandable title={'Produção'} array={[{name : 'Imobiliárias', link : '/tabelaimobiliarias'}]}/>

            </nav>

            <section className={`container ${responsiveness ? 'responsive-container' : ''}`}>

                <Outlet/>

            </section>


        </>

    )
}

export default Layout
