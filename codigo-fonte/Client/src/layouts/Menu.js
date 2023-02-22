import './Menu.css'
import drag_icon from '../images/drag-icon-24x24.png'

const Menu = ({isResponsive, toggle}) => {
    return (
        <nav className={`menu ${isResponsive ? 'responsive-menu' : ''}`}>
            <div id={'toggle-div'}>
                <img id={'toggle-img'} src={drag_icon} alt={'expandir/recolher'} onClick={toggle}/>
            </div>
        </nav>
    )
}

export default Menu
