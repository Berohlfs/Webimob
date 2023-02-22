import './Menu.css'
import drag_icon from '../images/drag-icon-12x18.png'
import NavLiExpandable from '../assets/NavLiExpandable'
import NavLiDefault from '../assets/NavLiDefault'

const Menu = ({isResponsive, toggle}) => {
    return (
        <nav className={`menu ${isResponsive ? 'responsive-menu' : ''}`}>
            <div id={'toggle-div'} onClick={toggle}>
                <img id={'toggle-img'} src={drag_icon} alt={'expandir/recolher'}/>
            </div>

            <NavLiDefault title={'Página inicial'} link={'https://instagram.com'}/>

            <NavLiDefault title={'Cotações'} link={'https://instagram.com'}/>

            <NavLiDefault title={'Propostas'} link={'https://instagram.com'}/>

            <NavLiDefault title={'Apólices'} link={'https://instagram.com'}/>

            <NavLiDefault title={'Imobiliárias'} link={'https://instagram.com'}/>

            <NavLiExpandable title={'Relatórios'} array={[{name : 'Exe1', link : 'https://instagram.com'},{name : 'Ex2', link : 'https://instagram.com'}]}/>

            <NavLiExpandable title={'Logs'} array={[{name : 'Exe1', link : 'https://instagram.com'},{name : 'Ex2', link : 'https://instagram.com'}]}/>

        </nav>
    )
}

export default Menu
