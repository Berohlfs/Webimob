//CSS
import './NavLi.css'
//Imagens
import expand_icon from '../images/expand-icon-15x9.png'
//Libs
import { useState } from 'react'

const NavLiExpandable = ({title, array})=> {

    const li_array = array.map((item)=> <a key={String(item.name)} href={item.link}><li>{item.name}</li></a>)

    const [expanded, setExpanded] = useState(false)
    
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
