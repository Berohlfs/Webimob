
import {Link} from "react-router-dom"
import style from "./SideBar.modules.css"
import mais from "../../img/mais.png"




function SideBar(){
    return(
        <>

        <nav>
        <ul className="navlist">

        <li>
            <Link to="/">
                Início
            </Link>
            </li>
            
        </ul>
        <ul className="navlist">
            <li>Cotações</li>
            <li>Propostas</li>
            <li>Apólices</li>
            <li>Faturas Empresariais<img src={mais} alt="Mais"/></li>
            <li>Sinistros<img src={mais} alt="Mais"/></li>
            <hr/>
        </ul>
        <ul className="navlist">
            <li>Financeiro<img src={mais} alt="Mais"/></li>
            <hr/>
        </ul>
        <ul className="navlist">
            <li>Meus Relatórios</li>
            <li>Gráficos de Produção</li>
            <li>Gráficos de Cotações</li>
            <hr/>
        </ul>
        <ul className="navlist">
            <li>Eventos do Sistema<img src={mais} alt="Mais"/></li>
            <li><Link to="/imobiliarias">Configurações</Link><img src={mais} alt="Mais"/></li>
            <hr/>
        </ul>
        <ul className="navlist">
            <li>Contatos</li>
            <hr/>
        </ul>
        <ul className="navlist">
            <li>Suporte</li>
            <hr/>
        </ul>
    </nav>



        
        
        
        
        </>
    )
}

export default SideBar