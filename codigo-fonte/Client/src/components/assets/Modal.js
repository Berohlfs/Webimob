import style from "./Modal.modules.css"


const Modal = ({fechaModal,conteudo})=>{

    return(
    <div className="modalBackground">
        <div className="modalContainer">
            

        <div className="modalHeader">
        
            <h1>
                {conteudo.title}
            </h1>
            <button className="close-button"  onClick={()=>{
                fechaModal(false)
            }}>&times;</button>
        </div>
        <div className="modalBody">{conteudo.body}</div>
        <div className="modalFooter">{conteudo.footer}</div>


        </div>
    </div>)


}

export default Modal