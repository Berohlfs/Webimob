//CSS
import './InputDefault.css'

const InputSelectDefault = ({options_data={}, input_label='lala', input_width='200px' , input_name='d'})=> {

    return (
        <div style={{width : input_width}} className={'default-input-div'}>

            <select id={input_name} name={input_name}>

                <option key={'default'} disabled hidden>{input_label}</option>

                {options_data.map((item)=> <option key={item.label} value={item.value}>{item.value} - {item.label}</option>)}

            </select>

        </div>
    )

}

export default InputSelectDefault
