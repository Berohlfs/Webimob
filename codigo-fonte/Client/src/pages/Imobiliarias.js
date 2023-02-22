//Componentes
import Header from '../layouts/Header'
import Menu from '../layouts/Menu'
import Container from '../layouts/Container'

const Imobiliarias = (props)=> {
    return (
        <>
          <Header title={'PÁGINA INICIAL'}/>
          <Menu responsiveFunction={props.responsiveFunction} responsiveState={props.responsiveState} />
          <Container responsiveState={props.responsiveState}>


            lalala


          </Container>
        </>
      )
}

export default Imobiliarias
