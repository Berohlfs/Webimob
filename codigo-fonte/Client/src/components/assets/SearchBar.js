import lupa from "../../img/lupa-13x13.png";

const SearchBar = ({imobiliarias, setBusca}) =>{

    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) =>{
        if (!e.target.value) return setBusca(imobiliarias)

        const arrayResultados = imobiliarias.filter(imobiliaria => imobiliaria.NOME.includes(e.target.value) || imobiliaria.CPF_CNPJ.includes(e.target.value) || imobiliaria.APELIDO.includes(e.target.value))

        setBusca(arrayResultados)
    }

    return(
        <form className="div-input div-input-round div-input-busca" onSubmit={handleSubmit}>
        <input
         type="text" 
         onChange={handleSearchChange} 
         placeholder="Pesquisar por nome, apelido ou CNPJ."/>

        <button>
            <img src={lupa} alt="lupa"/>
        </button>
    </form>

    )
}

export default SearchBar;