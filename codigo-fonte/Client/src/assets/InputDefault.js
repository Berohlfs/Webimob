//CSS
import './InputDefault.css'
//Libs
import { useState, useRef } from 'react'
import { IMaskInput } from 'react-imask';

const InputDefault = ({label='', input_length='', input_type='text', input_width='200px' , input_name='', input_mask=''})=> {

    const [focused, setFocused] = useState(false)
    let inputEl = useRef()

    const toggle = ()=> {
        if(inputEl.current.value === ''){
            setFocused(!focused)
        }
    }

    return (
        <div style={{width : input_width}} className={'default-input-div'} onFocus={toggle} onBlur={toggle}>

            <label htmlFor={input_name} className={`unfocused ${focused ? 'focused' : ''}`}>{label}</label>

            <IMaskInput maxLength={input_length} type={input_type} id={input_name} mask={input_mask} name={input_name} inputRef={inputEl} />

        </div>
    )
}

export default InputDefault
