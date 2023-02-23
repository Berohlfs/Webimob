//Componentes
import Header from '../layouts/Header'
import Menu from '../layouts/Menu'
import Container from '../layouts/Container'
import InputMasked from '../assets/InputMasked'
import InputDefault from '../assets/InputDefault'

const NovaImobiliaria = (props)=> {
    return (
        <>
          <Header title={'Nova imobiliária'}/>
          <Menu responsiveFunction={props.responsiveFunction} responsiveState={props.responsiveState} />
          <Container responsiveState={props.responsiveState}>

            <InputMasked label={'CPF'} size={123} input_name={'cpf'} input_mask={'999.999.999-99'}/>
            <InputMasked label={'CPF'} size={123} input_name={'cpf'} input_mask={'999.999.999-99'}/>
            <InputDefault label={'Razão Social'} size={300} input_name={'Razão Social'}/>

          </Container>
        </>
      )
}

export default NovaImobiliaria
