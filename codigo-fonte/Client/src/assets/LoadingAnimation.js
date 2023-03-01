import './LoadingAnimation.css'

const LoadingAnimation = ()=> {
    return (
        <div id={'loading-animation-div'}>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default LoadingAnimation
