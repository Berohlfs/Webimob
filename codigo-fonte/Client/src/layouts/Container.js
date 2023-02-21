import './Container.css'

const Container = ({isResponsive})=> {
    return (
        <section id='main' className={ isResponsive ? 'responsive-container' : ''}>

        </section>
    )
}

export default Container
