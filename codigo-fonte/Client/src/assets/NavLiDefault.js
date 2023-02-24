//CSS
import './NavLi.css'
//Libs
import { Link } from "react-router-dom";

const NavLiDefault = ({title, link})=> {

    return (
        <div className={`nav-div`}>
            <Link to={`${link}`}><p>{title}</p></Link>
        </div>
    )
}

export default NavLiDefault
