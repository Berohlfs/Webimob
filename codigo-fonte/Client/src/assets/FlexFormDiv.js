import './FlexFormDiv.css'

const FlexFormDiv = ({title, children}) => {
    return(

        <>
            <h2 className={'flex-form-h2'}>{title}</h2>

            <div className={'flex-form-div'}>

                {children}


            </div>

            <hr className={'flex-form-hr'}/>

        </>

    )
}

export default FlexFormDiv
