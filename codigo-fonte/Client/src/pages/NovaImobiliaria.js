//Componentes
import Checkbox from '../assets/Checkbox'
import InputDefault from '../assets/InputDefault'
import FlexFormDiv from '../assets/FlexFormDiv'
//Libs
import { useState } from 'react'

const NovaImobiliaria = ()=> {

    const [pfpj, setPfpj] = useState(['CNPJ', '00.000.000/0000-00'])

    const [endereco, setEndereco] = useState({active: false, logradouro: '', bairro: '', cidade: '', uf: ''})

    const togglePfPj = () => {
      pfpj[0] === 'CNPJ' ? setPfpj(['CPF', '000.000.000-00']) : setPfpj(['CNPJ', '00.000.000/0000-00'])
    }

    const findAddress = async(cep)=> {
      const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const endereco = await data.json()
      setEndereco({active: true, logradouro: endereco.logradouro, bairro: endereco.bairro, cidade: endereco.cidade, uf: endereco.uf})
    }

    return (
        <>
          <div id={'page-info-div'}>
            <h1>Nova imobiliária</h1>
          </div>

          <form>

            <FlexFormDiv title={'Informações básicas'}>

              <InputDefault label={'Razão social'} input_width={'300px'} input_name={'nome'}/>

              <InputDefault label={'Apelido'} input_width={'245px'} input_name={'apelido'} input_length={'25'}/>

              <Checkbox toggle_func={togglePfPj} label={'Cadastrar com CPF'} input_name={'pfpj_toggle_form_ignore'}/>

              <InputDefault label={pfpj[0]} input_width={'152px'} input_name={'cpf_cnpj'} input_mask={pfpj[1]}/>

              <InputDefault label={'Inscrição Municipal'} input_width={'183px'} input_name={'inscricao_municipal'} input_length={'20'}/>

            </FlexFormDiv>

            <FlexFormDiv title={'Contato'}>

              <InputDefault label={'Celular 1'} input_width={'135px'} input_name={'fone1'} input_mask={'(00) 0 0000-0000'}/>
              <InputDefault label={'Celular 2'} input_width={'135px'} input_name={'fone2'} input_mask={'(00) 0 0000-0000'}/>
              <InputDefault label={'Celular 3'} input_width={'135px'} input_name={'fone3'} input_mask={'(00) 0 0000-0000'}/>
              <InputDefault label={'Telefone fixo'} input_width={'122px'} input_name={'fone4'} input_mask={'(00) 0000-0000'}/>

              <InputDefault label={'E-mail 1'} input_width={'250px'} input_name={'email1'} input_length={'50'}/>
              <InputDefault label={'E-mail 2'} input_width={'250px'} input_name={'email2'} input_length={'50'}/>

            </FlexFormDiv>

            <FlexFormDiv title={'Endereço'}>

              <InputDefault onblur_func={findAddress} label={'CEP'} input_width={'93px'} input_name={'cep'} input_mask={'00000-000'}/>

              <InputDefault input_value={endereco.logradouro} active={endereco.active} label={'Logradouro'} input_width={'250px'} input_name={'logradouro'} input_length={'60'}/>

              <InputDefault input_value={endereco.bairro} active={endereco.active} label={'Bairro'} input_width={'250px'} input_name={'bairro'} input_length={'35'}/>

              <InputDefault input_value={endereco.cidade} active={endereco.active} label={'Cidade'} input_name={'cidade'} input_length={'35'}/>

              <InputDefault input_value={endereco.uf} active={endereco.active} label={'UF'} input_width={'45px'} input_name={'uf'} input_mask={'aa'}/>

            </FlexFormDiv>


          </form>


        </>
      )
}

export default NovaImobiliaria
