import { useRef } from 'react'
import './Menu.css'

const Menu = ({isResponsive, toggle}) => {
    return (
        <nav className={ isResponsive ? 'responsive-menu' : ''} onClick={toggle}>

        </nav>
    )
}

export default Menu
