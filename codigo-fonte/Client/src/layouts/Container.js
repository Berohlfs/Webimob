//Componentes
import './Container.css'

const Container = (props)=> {

    return (
        <section id='main' className={`container ${props.responsiveState ? 'responsive-container' : ''}`}>

            {props.children}
            
        </section>
    )

}

export default Container
