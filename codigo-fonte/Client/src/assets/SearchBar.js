//CSS
import './SearchBar.css'
//Images
import search_icon from '../images/search-icon-13x12.png'

const SearchBar = ({searchFunc=null, placeholder='', handleFunc=null})=> {
    return (
        <div className={'search-bar-div'}>

            <input placeholder={placeholder} onInput={handleFunc}/>

            <button onClick={searchFunc}><img src={search_icon} alt={'lupa'}/></button>

        </div>
    )
}

export default SearchBar
