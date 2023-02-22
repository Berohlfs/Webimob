import './Container.css'

const Container = ({isResponsive})=> {
    return (
        <section id='main' className={`container ${isResponsive ? 'responsive-container' : ''}`}>
            
        </section>
    )
}

export default Container
