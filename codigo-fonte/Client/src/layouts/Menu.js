import './Menu.css'
import expand_icon from '../images/expand-icon-24x15.png'

const Menu = ({isResponsive, toggle}) => {
    return (
        <nav className={`menu ${isResponsive ? 'responsive-menu' : ''}`}>
            <div id={'toggle-div'}>
                <img className={`shrink-menu-icon ${isResponsive ? 'expand-menu-icon' : ''}`} src={expand_icon} alt={'expandir/recolher'} onClick={toggle}/>
            </div>

        </nav>
    )
}

export default Menu
