//Componentes
import Header from '../layouts/Header'
import Menu from '../layouts/Menu'
import Container from '../layouts/Container'

const PaginaInicial = (props)=> {
    return (
        <>
          <Header title={'Página Inicial'}/>
          <Menu responsiveFunction={props.responsiveFunction} responsiveState={props.responsiveState} />
          <Container responsiveState={props.responsiveState}>


          </Container>
        </>
      )
}

export default PaginaInicial
