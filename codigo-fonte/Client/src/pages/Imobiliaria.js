//Componentes
import Checkbox from '../assets/Checkbox'
import InputDefault from '../assets/InputDefault'
import FlexFormDiv from '../assets/FlexFormDiv'
import ButtonDefault from '../assets/ButtonDefault'
import InputSelectDefault from '../assets/InputSelectDefault'
import PageActions from '../assets/PageActions'
import LoadingAnimation from '../assets/LoadingAnimation'
//Libs
import { useState } from 'react'
import getCep from '../scripts/getCep'
import bancos from '../scripts/bancos'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
//Images
import save_icon from '../images/save-icon-13x13.png'
import close_icon from '../images/close-icon-14x14.png'

const Imobiliaria = ()=> {

  const navigate = useNavigate()

  const [loading_state, setLoadingState] = useState(true)

  const [pfpj, setPfpj] = useState(['CNPJ', '00.000.000/0000-00'])

  const togglePfPj = () => {
    pfpj[0] === 'CNPJ' ? setPfpj(['CPF', '000.000.000-00']) : setPfpj(['CNPJ', '00.000.000/0000-00'])
  }

  const [endereco, setEndereco] = useState({logradouro: null, bairro: null, cidade: null, uf: null})

  const fetchEndereco = (cep_string)=> {
    getCep(cep_string, setEndereco)
  }

  const postImobiliaria = async(e)=> {
    if(!e.target.nome.value || !e.target.cpf_cnpj.value){
      return alert('Preencha os campos "Razão social" e "CPF/CNPJ".')
    }
    e.preventDefault()
    try{
      setLoadingState(true)
      await axios.post(`http://192.168.51.16:1324/imobiliarias/`, {
        nome : e.target.nome.value,
        cpf_cnpj : e.target.cpf_cnpj.value,
        apelido : e.target.apelido.value,
        insc_municipal : e.target.insc_municipal.value,
        responsavel : e.target.responsavel.value,
        parceiro : e.target.parceiro.value,
        status : e.target.status.value,
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
      setLoadingState(false)
      alert('Imobiliária cadastrada com sucesso!')
    }catch(erro){
      console.log(erro)
      alert('Erro de cadastro!')
    }

  }

  return (
    <>
      <PageActions title={'Nova imobiliária'}>

        <ButtonDefault label={'Cancelar'} img_src={close_icon} button_type={'button'} button_style={false} clickFunc={()=> navigate('/tabelaimobiliarias')}/>
        <ButtonDefault label={'Salvar'} img_src={save_icon} button_form={'nova-imobiliaria-form'}/>

      </PageActions>

      <LoadingAnimation display={loading_state}/>

      <form onSubmit={postImobiliaria} id={'nova-imobiliaria-form'}>

        <FlexFormDiv title={'Informações básicas'}>

          <InputDefault input_label={'Razão social'} input_width={'300px'} input_name={'nome'} input_length={'60'}/>

          <InputDefault input_label={'Apelido'} input_width={'245px'} input_name={'apelido'} input_length={'30'}/>

          <Checkbox toggle_func={togglePfPj} input_label={'Cadastrar com CPF'} input_name={'pfpj_toggle_form_ignore'}/>

          <InputDefault input_label={pfpj[0]} input_width={'152px'} input_name={'cpf_cnpj'} input_mask={pfpj[1]}/>

          <InputDefault input_label={'Inscrição Municipal'} input_width={'183px'} input_name={'insc_municipal'} input_length={'20'}/>

          <InputDefault input_label={'Responsável Webimob'} input_width={'190px'} input_name={'responsavel'} input_length={'20'}/>

          <InputSelectDefault input_label={'Parceiro'} input_name={'parceiro'} options_data={[{value : 'DAREDE', label : 'DAREDE'}, {value : 'INMEDIAM', label : 'INMEDIAM'}, {value : 'Produção direta', label : 'Produção Direta'}]} input_width={'150px'}/>

          <InputSelectDefault input_label={'Status'} input_name={'status'} options_data={[{value : 'Inativa', label : 'Inativa'}, {value : 'Ativa', label : 'Ativa'}, {value : 'Em prospecção', label : 'Em prospecção'}]} input_width={'140px'}/>

        </FlexFormDiv>

        <FlexFormDiv title={'Contato'} hr_display={false}>

          <InputDefault input_label={'Celular 1'} input_width={'135px'} input_name={'fone1'} input_mask={'(00) 0 0000-0000'}/>

          <InputDefault input_label={'Celular 2'} input_width={'135px'} input_name={'fone2'} input_mask={'(00) 0 0000-0000'}/>

          <InputDefault input_label={'Celular 3'} input_width={'135px'} input_name={'fone3'} input_mask={'(00) 0 0000-0000'}/>

          <InputDefault input_label={'Telefone fixo'} input_width={'122px'} input_name={'fone4'} input_mask={'(00) 0000-0000'}/>

        </FlexFormDiv>

        <FlexFormDiv>

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

export default Imobiliaria
