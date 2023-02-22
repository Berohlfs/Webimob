import Header from '../layouts/Header'
import Menu from '../layouts/Menu'
import Container from '../layouts/Container'

const Imobiliarias = ({responsiveFunction, responsiveBool})=> {
    return (
        <>
          <Header title={'PÁGINA INICIAL'}/>
          <Menu isResponsive={responsiveBool} toggle={responsiveFunction}/>
          <Container isResponsive={responsiveBool}>


            lalala


          </Container>
        </>
      )
}

export default Imobiliarias
