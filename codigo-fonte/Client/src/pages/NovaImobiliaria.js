//Componentes
import Header from '../layouts/Header'
import Menu from '../layouts/Menu'
import Container from '../layouts/Container'
import InputDefault from '../assets/InputDefault'

const NovaImobiliaria = (props)=> {

    return (
        <>
          <Header title={'Nova imobiliária'}/>
          <Menu responsiveFunction={props.responsiveFunction} responsiveState={props.responsiveState} />
          <Container responsiveState={props.responsiveState}>

              {/* InputDefault props -> label, input_length, input_type, input_width, input_name, input_mask*/}

              <InputDefault label={'Razão social'} input_width={'300px'} input_name={'nome'}/>
              <InputDefault label={'Número'} input_length={''} input_width={'200px'} input_name={'numero'} input_mask={''}/>

          </Container>
        </>
      )
}

export default NovaImobiliaria
