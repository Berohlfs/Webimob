//Componentes
import Checkbox from '../assets/Checkbox'
import InputDefault from '../assets/InputDefault'
import FlexFormDiv from '../assets/FlexFormDiv'
//Libs
import { useState } from 'react'
import getCep from '../scripts/getCep'

const NovaImobiliaria = ()=> {

    const [pfpj, setPfpj] = useState(['CNPJ', '00.000.000/0000-00'])

    const togglePfPj = () => {
      pfpj[0] === 'CNPJ' ? setPfpj(['CPF', '000.000.000-00']) : setPfpj(['CNPJ', '00.000.000/0000-00'])
    }

    const [endereco, setEndereco] = useState({logradouro: null, bairro: null, cidade: null, uf: null})

    const fetchEndereco = (cep_string)=> {
      getCep(cep_string, setEndereco)
    }

    return (
        <>
          <div id={'page-info-div'}>
            <h1>Nova imobiliária</h1>
          </div>

          <form>

            <FlexFormDiv title={'Informações básicas'}>

              <InputDefault input_label={'Razão social'} input_width={'300px'} input_name={'nome'}/>

              <InputDefault input_label={'Apelido'} input_width={'245px'} input_name={'apelido'} input_length={'25'}/>

              <Checkbox toggle_func={togglePfPj} input_label={'Cadastrar com CPF'} input_name={'pfpj_toggle_form_ignore'}/>

              <InputDefault input_label={pfpj[0]} input_width={'152px'} input_name={'cpf_cnpj'} input_mask={pfpj[1]}/>

              <InputDefault input_label={'Inscrição Municipal'} input_width={'183px'} input_name={'inscricao_municipal'} input_length={'20'}/>

            </FlexFormDiv>

            <FlexFormDiv title={'Contato'}>

              <InputDefault input_label={'Celular 1'} input_width={'135px'} input_name={'fone1'} input_mask={'(00) 0 0000-0000'}/>
              <InputDefault input_label={'Celular 2'} input_width={'135px'} input_name={'fone2'} input_mask={'(00) 0 0000-0000'}/>
              <InputDefault input_label={'Celular 3'} input_width={'135px'} input_name={'fone3'} input_mask={'(00) 0 0000-0000'}/>
              <InputDefault input_label={'Telefone fixo'} input_width={'122px'} input_name={'fone4'} input_mask={'(00) 0000-0000'}/>

              <InputDefault input_label={'E-mail 1'} input_width={'250px'} input_name={'email1'} input_length={'50'}/>
              <InputDefault input_label={'E-mail 2'} input_width={'250px'} input_name={'email2'} input_length={'50'}/>

            </FlexFormDiv>

            <FlexFormDiv title={'Endereço'}>

              <InputDefault input_callback={fetchEndereco} input_label={'CEP'} input_width={'93px'} input_name={'cep'} input_mask={'00000-000'}/>

              <InputDefault input_dinamic_value={endereco.logradouro} input_label={'Logradouro'} input_width={'200px'} input_name={'logradouro'}/>

            </FlexFormDiv>

            <p>{endereco.logradouro},{endereco.bairro},{endereco.cidade},{endereco.uf}</p>
          </form>


        </>
      )
}

export default NovaImobiliaria
