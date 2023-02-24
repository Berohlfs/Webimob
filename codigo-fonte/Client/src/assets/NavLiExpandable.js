//CSS
import './NavLi.css'
//Imagens
import expand_icon from '../images/expand-icon-15x9.png'
//Libs
import { useState } from 'react'
import { Link } from "react-router-dom";

const NavLiExpandable = ({title, array})=> {

    const [expanded, setExpanded] = useState(false)

    const toggle = ()=> {
        setExpanded(!expanded)
    }

    return (

        <div className={`nav-div ${expanded ? 'expanded-nav-div' : ''}`}>

            <p onClick={toggle}><img src={expand_icon} alt={'Mais'}/><span>{title}</span></p>

            <ul>
                {array.map((item)=> <Link key={String(item.name)} to={item.link}><li>{item.name}</li></Link>)}
            </ul>

        </div>

    )
}

export default NavLiExpandable
