//CSS
import './SearchBar.css'
//Images
import search_icon from '../images/search-icon-13x12.png'

const SearchBar = ({placeholder, searchFunc})=> {
    return (
        <div className={'search-bar-div'}>

            <input placeholder={placeholder}/>

            <button type={'submit'} onClick={searchFunc}><img src={search_icon} alt={'lupa'}/></button>

        </div>
    )
}

export default SearchBar
