//CSS
import './InputMaskedDefault.css'
//Libs
import { useState, useRef } from 'react'
import InputMask from 'react-input-mask';

const InputMasked = ({label, size, input_name, input_mask})=> {

    const [focused, setFocused] = useState(false)
    let inputEl = useRef()

    const toggle = ()=> {
        if(!(/[ A-Za-z]/.test(inputEl.current.value) || /[0-9]/.test(inputEl.current.value))){
            focused ? setFocused(false) : setFocused(true)
        }
    }

    return (
        <div style={{width : size}} id={'default-input-div'} onFocus={toggle} onBlur={toggle}>

            <label className={`unfocused ${focused ? 'focused' : ''}`}>{label}</label>

            <InputMask mask={input_mask} name={input_name} ref={inputEl}>

            </InputMask>

        </div>
    )
}

export default InputMasked
