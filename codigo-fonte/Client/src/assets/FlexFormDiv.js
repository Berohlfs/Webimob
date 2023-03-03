import './FlexFormDiv.css'

const FlexFormDiv = ({title, wrap=true, children, hr_display=true}) => {
    return(

        <>
            <h2 className={'flex-form-h2'}>{title}</h2>

            <div className={`flex-form-div ${wrap ? '' : 'flex-form-div-nowrap'}`}>

                {children}


            </div>

            <hr className={`flex-form-hr ${hr_display ? '' : 'flex-form-hr-display-none'}`}/>

        </>

    )
}

export default FlexFormDiv
