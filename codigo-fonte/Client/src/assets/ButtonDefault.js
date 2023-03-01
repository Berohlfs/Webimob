//CSS
import './ButtonDefault.css'

const ButtonDefault = ({button_style=true, img_src='', label='', clickFunc=null, button_form='', button_type='submit'})=> {
    return (

            <button type={button_type} form={button_form} onClick={clickFunc} className={`button-default ${button_style===true ? 'button-default-positive' : button_style===false ? 'button-default-negative' : 'button-default-icon'}`}>

                {label}
                <img className={`${!img_src && 'img-display-none'}`} src={img_src} alt={''}/>

            </button>

    )
}

export default ButtonDefault
