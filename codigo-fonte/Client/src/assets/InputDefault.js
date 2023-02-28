//CSS
import './InputDefault.css'
//Libs
import { useState, useRef } from 'react'
import { IMaskInput } from 'react-imask';

const InputDefault = ({input_value=null, input_callback='', input_label='', input_length='', input_width='200px' , input_name='', input_mask=''})=> {

    const [focused, setFocused] = useState(false)

    let inputEl = useRef()

    const toggle = ()=> {
        if(!inputEl.current.value){
            setFocused(!focused)
        }
    }

    const addValue = ()=> {
        inputEl.current.value = input_value
    }

    if(input_value !== null){
        toggle()
        addValue()
    }

    return (
        <div style={{width : input_width}} className={'default-input-div'} onFocus={toggle} onBlur={toggle}>

            <label htmlFor={input_name} className={`unfocused ${focused ? 'focused' : ''}`}>{input_label}</label>

            <IMaskInput
            onBlur={input_callback ? ()=>input_callback(inputEl.current.value) : null}
            maxLength={input_length}
            id={input_name}
            mask={input_mask}
            name={input_name}
            inputRef={inputEl}
        />

        </div>
    )
}

export default InputDefault
