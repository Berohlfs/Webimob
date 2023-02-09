
import React from "react";
import InputMask from "react-input-mask";
import { useState } from "react";


 function CPFInput(props){

    const [change, setChange] = useState(true)


    return(    
    <div className="div-input div-input-cnpj">
        <label style={{cursor: "pointer"}} onClick={()=> setChange(true)}  htmlFor="">CPNJ</label>
        <label style={{cursor: "pointer"}} onClick={()=> setChange(false)}  htmlFor="">CPF</label>

        {change?
            <InputMask  mask="99.999.999/9999-99" id="input_cpf_cnpj" type={props.type} value={props.value} name={props.name} placeholder='Digite o CNPJ' onChange={props.onChange} disabled={change===false && true} readOnly={props.readOnly}/>:
            <InputMask mask="999.999.999-99" id="input_cpf_cnpj" type={props.type} value={props.value} name={props.name} placeholder='Digite o CPF' onChange={props.onChange} readOnly={props.readOnly}
            disabled={change===true && true}/>
        }

    </div>
)

};




export default CPFInput;