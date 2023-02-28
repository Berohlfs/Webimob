//Componentes
import Checkbox from '../assets/Checkbox'
import InputDefault from '../assets/InputDefault'
import FlexFormDiv from '../assets/FlexFormDiv'
import ButtonDefault from '../assets/ButtonDefault'
import InputSelectDefault from '../assets/InputSelectDefault'
//Libs
import { useState } from 'react'
import getCep from '../scripts/getCep'
import bancos from '../scripts/bancos'
import axios from 'axios'
//Images
import save_icon from '../images/save-icon-13x13.png'

const NovaImobiliaria = ()=> {

  const [pfpj, setPfpj] = useState(['CNPJ', '00.000.000/0000-00'])

  const togglePfPj = () => {
    pfpj[0] === 'CNPJ' ? setPfpj(['CPF', '000.000.000-00']) : setPfpj(['CNPJ', '00.000.000/0000-00'])
  }

  const [endereco, setEndereco] = useState({logradouro: null, bairro: null, cidade: null, uf: null})

  const fetchEndereco = (cep_string)=> {
    getCep(cep_string, setEndereco)
  }

  const postNovaImobiliaria = async(e)=> {
    if(!e.target.nome.value || !e.target.cpf_cnpj.value){
      return alert('Preencha os campos "Razão social" e "CPF/CNPJ".')
    }
    e.preventDefault()
    try{
      await axios.post(`http://192.168.0.99:1324/imobiliarias/`, {
        nome : e.target.nome.value,
        cpf_cnpj : e.target.cpf_cnpj.value,
        apelido : e.target.apelido.value,
        insc_municipal : e.target.insc_municipal.value,
        cep : e.target.cep.value,
        logradouro : e.target.logradouro.value,
        numero : e.target.numero.value,
        complemento : e.target.complemento.value,
        bairro : e.target.bairro.value,
        cidade : e.target.cidade.value,
        uf : e.target.uf.value,
        email1 : e.target.email1.value,
        email2 : e.target.email2.value,
        fone1 : e.target.fone1.value,
        fone2 : e.target.fone2.value,
        fone3 : e.target.fone3.value,
        fone4 : e.target.fone4.value
      })
      alert('Imobiliária cadastrada com sucesso!')
    }catch(erro){
      console.log(erro)
      alert('Erro de cadastro!')
    }

  }

  return (
    <>
      <div id={'page-info-div'}>
        <h1>Nova imobiliária</h1>
        <ButtonDefault label={'Salvar'} img_src={save_icon} button_form={'nova-imobiliaria-form'}/>
      </div>

      <form onSubmit={postNovaImobiliaria} id={'nova-imobiliaria-form'}>

        <FlexFormDiv title={'Informações básicas'}>

          <InputDefault input_label={'Razão social'} input_width={'300px'} input_name={'nome'} input_length={'60'}/>

          <InputDefault input_label={'Apelido'} input_width={'245px'} input_name={'apelido'} input_length={'30'}/>

          <Checkbox toggle_func={togglePfPj} input_label={'Cadastrar com CPF'} input_name={'pfpj_toggle_form_ignore'}/>

          <InputDefault input_label={pfpj[0]} input_width={'152px'} input_name={'cpf_cnpj'} input_mask={pfpj[1]}/>

          <InputDefault input_label={'Inscrição Municipal'} input_width={'183px'} input_name={'insc_municipal'} input_length={'20'}/>

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

          <InputDefault input_value={endereco.logradouro} input_label={'Logradouro'} input_width={'200px'} input_name={'logradouro'} input_length={'50'}/>

          <InputDefault input_label={'Número'} input_width={'73px'} input_name={'numero'} input_mask={'000000'}/>

          <InputDefault input_label={'Complemento'} input_width={'115px'} input_name={'complemento'} input_length={'15'}/>

          <InputDefault input_value={endereco.bairro} input_label={'Bairro'} input_width={'180px'} input_name={'bairro'} input_length={'25'}/>

          <InputDefault input_value={endereco.cidade} input_label={'Cidade'} input_width={'200px'} input_name={'cidade'} input_length={'40'}/>

          <InputDefault input_value={endereco.uf} input_label={'UF'} input_width={'93px'} input_name={'uf'} input_mask={'aa'}/>

        </FlexFormDiv>

        <FlexFormDiv wrap={false} title={'Dados bancários'} hr_display={false}>

          <InputDefault input_label={'Conta Corrente 1'} input_width={'170px'} input_name={'conta-corrente-1'} input_length={'20'}/>

          <InputDefault input_label={'Agência 1'} input_width={'120px'} input_name={'agencia-1'} input_length={'8'}/>

          <InputSelectDefault input_label={'Banco 1'} input_name={'banco1'} options_data={bancos} input_width={'300px'}/>

          <InputDefault input_label={'Descrição 1'} input_width={'300px'} input_name={'descricao-1'} input_length={'100'}/>

        </FlexFormDiv>

        <FlexFormDiv wrap={false} hr_display={false}>

          <InputDefault input_label={'Conta Corrente 2'} input_width={'170px'} input_name={'conta-corrente-2'} input_length={'20'}/>

          <InputDefault input_label={'Agência 2'} input_width={'120px'} input_name={'agencia-2'} input_length={'8'}/>

          <InputSelectDefault input_label={'Banco 2'} input_name={'banco2'} options_data={bancos} input_width={'300px'}/>

          <InputDefault input_label={'Descrição 2'} input_width={'300px'} input_name={'descricao-2'} input_length={'100'}/>

        </FlexFormDiv>

        <FlexFormDiv wrap={false}>

          <InputDefault input_label={'Conta Corrente 3'} input_width={'170px'} input_name={'conta-corrente-3'} input_length={'20'}/>

          <InputDefault input_label={'Agência 3'} input_width={'120px'} input_name={'agencia-3'} input_length={'8'}/>

          <InputSelectDefault input_label={'Banco 3'} input_name={'banco3'} options_data={bancos} input_width={'300px'}/>

          <InputDefault input_label={'Descrição 3'} input_width={'300px'} input_name={'descricao-3'} input_length={'100'}/>

        </FlexFormDiv>

      </form>

    </>
  )
}

export default NovaImobiliaria
