//CSS
import './InputDefault.css'
//Libs
import { useState, useRef } from 'react'
import { IMaskInput } from 'react-imask';

const InputDefault = ({input_dinamic_value='', input_callback='', input_label='', input_length='', input_type='text', input_width='200px' , input_name='', input_mask=''})=> {

    const [focused, setFocused] = useState(false)

    const [current_value, setCurrentValue] = useState('')

    let inputEl = useRef()

    const toggle = ()=> {
        if(!inputEl.current.value){
            setFocused(!focused)
        }
    }

    const handleValue = (e)=> {
        setCurrentValue(e.target.value)
    }

    return (
        <div style={{width : input_width}} className={'default-input-div'} onFocus={toggle} onBlur={toggle}>

            <label htmlFor={input_name} className={`unfocused ${focused ? 'focused' : ''}`}>{input_label}</label>

            <IMaskInput
            onBlur={input_callback ? ()=>input_callback(inputEl.current.value) : null}
            maxLength={input_length}
            type={input_type}
            id={input_name}
            mask={input_mask}
            name={input_name}
            inputRef={inputEl}
            value={input_dinamic_value ? input_dinamic_value : current_value}
            onInput={handleValue}
        />

        </div>
    )
}

export default InputDefault
