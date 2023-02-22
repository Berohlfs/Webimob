//CSS
import './NavLi.css'

const NavLiDefault = ({title, link})=> {

    return (
        <div className={`nav-div`}>
            <a href={`${link}`}><p>{title}</p></a>
        </div>
    )
}

export default NavLiDefault
