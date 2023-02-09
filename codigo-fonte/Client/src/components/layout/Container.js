
import style from "./Container.modules.css"

function Container(props){
    return(
        <div className="container">{props.children}</div>
    )
}

export default Container