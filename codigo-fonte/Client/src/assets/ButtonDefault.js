//CSS
import './ButtonDefault.css'

const ButtonDefault = ({label='Salvar', style='', img_src='', img_alt=''})=> {
    return (
            <button className={`button-default ${style===true ? 'button-default-positive' : style===false ? 'button-default-negative' : 'button-default-icon'}`}>

                {label}
                <img className={`${!img_src && 'button-default-img-hidden'}`} src={img_src} alt={img_alt}/>

            </button>
    )
}

export default ButtonDefault
