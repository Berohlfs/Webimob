import './NavLi.css'
import { useState } from 'react'
import expand_icon from '../images/expand-icon-15x9.png'

const NavLiExpandable = ({title, array})=> {

    const [expanded, setExpanded] = useState()

    const li_array = array.map((item)=> <a key={String(item.name)} href={item.link}><li>{item.name}</li></a>)

    const toggle = ()=> {
        expanded ? setExpanded(false) : setExpanded(true)
    }

    return (
        <div className={`nav-div ${expanded ? 'expanded-nav-div' : ''}`}>
            <p onClick={toggle}><img src={expand_icon} alt={'Mais'}/><span>{title}</span></p>
            <ul>
                {li_array}
            </ul>
        </div>
    )
}

export default NavLiExpandable
