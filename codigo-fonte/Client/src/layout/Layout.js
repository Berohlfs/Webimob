//Imagens
import webimob_logo from '../images/logo-120x18.png'
import drag_icon from '../images/drag-icon-12x18.png'
//CSS
import './Header.css'
import './Menu.css'
import './Container.css'
//Componentes
import NavLiExpandable from '../assets/NavLiExpandable'
import NavLiDefault from '../assets/NavLiDefault'

const Layout = ({title, responsiveState, responsiveFunction, children})=> {
    return (

        <>
            <header>
                <img src={webimob_logo} alt={'Logo Webimob'}/>
                <h1>{title}</h1>
            </header>

            <nav className={`menu ${responsiveState ? 'responsive-menu' : ''}`}>

                <div id={'toggle-div'} onClick={responsiveFunction}>

                    <img id={'toggle-img'} src={drag_icon} alt={'expandir/recolher'}/>

                </div>

                <NavLiDefault title={'Página inicial'} link={'https://instagram.com'}/>

                <NavLiDefault title={'Cotações'} link={'https://instagram.com'}/>

                <NavLiDefault title={'Propostas'} link={'https://instagram.com'}/>

                <NavLiDefault title={'Apólices'} link={'https://instagram.com'}/>

                <NavLiExpandable title={'Produção'} array={[{name : 'Imobiliárias', link : 'https://instagram.com'}]}/>

            </nav>

            <section id='main' className={`container ${responsiveState ? 'responsive-container' : ''}`}>

                {children}

            </section>
        </>

    )
}

export default Layout
