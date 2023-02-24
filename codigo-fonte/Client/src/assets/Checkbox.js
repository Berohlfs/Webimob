import './Checkbox.css'

const Checkbox = ({toggle_func='', label='', input_name=''}) => {
    return (
        <div className={'checkbox-div'}>
            <input onInput={toggle_func == '' ? null : toggle_func} id={input_name} name={input_name} type={'checkbox'}/>
            <label htmlFor={input_name}>{label}</label>
        </div>
    )
}

export default Checkbox
