//CSS
import './PageActions.css'

const PageActions = ({title='', children})=> {
    return(
        <div id={'page-actions-div'}>
            <h1>{title}</h1>
            <div>
                {children}
            </div>
        </div>
    )
}

export default PageActions
