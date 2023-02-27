import './Checkbox.css'

const Checkbox = ({toggle_func='', input_label='', input_name=''}) => {
    return (
        <div className={'checkbox-div'}>
            <input onInput={toggle_func == '' ? null : toggle_func} id={input_name} name={input_name} type={'checkbox'}/>
            <label htmlFor={input_name}>{input_label}</label>
        </div>
    )
}

export default Checkbox
