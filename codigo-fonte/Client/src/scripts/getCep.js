const getCep = async(cep, stateSetter)=> {
    cep = cep.replace('-','')
    if(cep.length !== 8){
        return alert('O CEP deve conter 8 números.')
    }
    try{
        stateSetter({logradouro: '...' , bairro: '...' , cidade: '...' , uf: '...' })
        const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const endereco = await data.json()
        if(endereco.erro){
            stateSetter({logradouro: '' , bairro: '' , cidade: '' , uf: '' })
            alert('CEP não encontrado.')
        }
        else{
            stateSetter({logradouro: endereco.logradouro, bairro: endereco.bairro, cidade: endereco.localidade, uf: endereco.uf})
        }
    }catch(erro){
        return 'Erro de busca.'
    }
}

export default getCep
