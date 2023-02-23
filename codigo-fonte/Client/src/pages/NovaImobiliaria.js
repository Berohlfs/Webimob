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

              <InputDefault label={'Razão social'} input_width={'300px'} input_name={'nome'}/>

          </Container>
        </>
      )
}

export default NovaImobiliaria
