//Componentes
import InputDefault from '../assets/InputDefault'

const NovaImobiliaria = (props)=> {

    return (
        <>
          {/* InputDefault props -> label, input_length, input_type, input_width, input_name, input_mask*/}

          <InputDefault label={'Razão social'} input_width={'300px'} input_name={'nome'}/>
          <InputDefault label={'Número'} input_length={''} input_width={'200px'} input_name={'numero'} input_mask={''}/>

        </>
      )
}

export default NovaImobiliaria
