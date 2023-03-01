import './LoadingAnimation.css'

const LoadingAnimation = ({display})=> {
    return (
        <div id={'loading-animation-div'} className={`${display ? '' : 'loading-animation-div-display-none'}`}>

        </div>
    )
}

export default LoadingAnimation
