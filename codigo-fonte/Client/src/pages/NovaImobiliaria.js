//Componentes
import InputDefault from '../assets/InputDefault'

const NovaImobiliaria = ()=> {

    return (
        <>
          <div id={'page-info-div'}>
            <h1>Nova imobiliária</h1>
          </div>

          {/* InputDefault props -> label, input_length, input_type, input_width, input_name, input_mask*/}
          <form>

            <InputDefault label={'Razão social'} input_width={'300px'} input_name={'nome'}/>
            <InputDefault label={'Número'} input_length={''} input_width={'200px'} input_name={'numero'} input_mask={''}/>
            
          </form>


        </>
      )
}

export default NovaImobiliaria
