//CSS
import './InputMaskedDefault.css'
//Libs
import { useState, useRef } from 'react'

const InputDefault = ({label, size, input_name})=> {

    const [focused, setFocused] = useState(false)
    let inputEl = useRef()

    const toggle = ()=> {
        if(inputEl.current.value === ''){
            focused ? setFocused(false) : setFocused(true)
        }
    }

    return (
        <div style={{width : size}} id={'default-input-div'} onFocus={toggle} onBlur={toggle}>

            <label className={`unfocused ${focused ? 'focused' : ''}`}>{label}</label>

            <input style={{width : size}} name={input_name} ref={inputEl}/>

        </div>
    )
}

export default InputDefault
