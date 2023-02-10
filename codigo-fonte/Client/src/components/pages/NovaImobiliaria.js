import fogo from "../../img/fireicon-16.png"
import casa from "../../img/homeicon-16.png"
import dinheiro from "../../img/banknotes-16.png"
import save from "../../img/save-16.png"
import edit from "../../img/edit-16.png"
import cancel from "../../img/x-mark-16.png"
import arquivo from "../../img/text-file-3-16.png"
import contato from "../../img/contacts-16.png"
import anotacoes from "../../img/copywriting-16.png"

import { useAsyncError, useParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import CPFInput from "../assets/InputCPF"
import InputMask from "react-input-mask";


import AnexosImobiliarias from "./AnexosImobiliarias"
import ContatosImobiliarias from "./ContatosImobiliarias"
import AnotacoesImobiliarias from "./AnotacoesImobiliarias"


    



function NovaImobiliaria(props){

    const { id } = useParams()
    const ref = useRef()
    const [editar, setEditar] = useState(props.detalhes? true : false)

    const[abreModal,setAbreModal]= useState(false) 
    
    const getImobiliariaInfo =()=>{

        const imobiliariaInfo = ref.current; 
        try {
            axios.get(`http://localhost:1324/imobiliarias/${id}`)
            .then(async res=>{
                const imobiliaria = res.data

                imobiliariaInfo.nome.value = imobiliaria.NOME
                imobiliariaInfo.cpf_cnpj.value = imobiliaria.CPF_CNPJ
                imobiliariaInfo.interno.value = imobiliaria.INTERNO
                imobiliariaInfo.apelido.value = imobiliaria.APELIDO
                imobiliariaInfo.parceiro.value = imobiliaria.PARCEIRO
                imobiliariaInfo.insc_municipal.value = imobiliaria.INSC_MUNICIPAL
                imobiliariaInfo.cep.value = imobiliaria.CEP
                imobiliariaInfo.logradouro.value = imobiliaria.LOGRADOURO
                imobiliariaInfo.numero.value = imobiliaria.NUMERO
                imobiliariaInfo.complemento.value = imobiliaria.COMPLEMENTO
                imobiliariaInfo.cidade.value = imobiliaria.CIDADE
                imobiliariaInfo.uf.value = imobiliaria.UF
                imobiliariaInfo.email1.value = imobiliaria.email_imobiliarias[0].EMAIL
                imobiliariaInfo.email2.value = imobiliaria.email_imobiliarias[1].EMAIL
                imobiliariaInfo.fone1.value = imobiliaria.fone_imobiliarias[0].NUMERO
                imobiliariaInfo.fone2.value = imobiliaria.fone_imobiliarias[1].NUMERO
                imobiliariaInfo.fone3.value = imobiliaria.fone_imobiliarias[2].NUMERO

                console.log(imobiliaria)
            })
        } catch (error) {
            toast.error(error);
        }
    }

    useEffect(()=>{
        if(props.detalhes){
            getImobiliariaInfo()
        }
    },[])

    const toggleEditar = () =>{
        setEditar(!editar)
    }

    const handleSubmit = async (e) =>{

        e.preventDefault();//pra nao recarregar a pagina

        const imobiliariaInfo = ref.current;
        if(
            !imobiliariaInfo.nome.value||
            !imobiliariaInfo.cpf_cnpj.value
        ){
            return toast.warn('preencha todos os campos corretamente!')
        }

        if(props.detalhes){
            await axios
            .put(`http://localhost:1324/imobiliarias/${id}`,{
                nome: imobiliariaInfo.nome.value,
                cpf_cnpj: imobiliariaInfo.cpf_cnpj.value,
                interno: imobiliariaInfo.interno.value,
                apelido: imobiliariaInfo.apelido.value,
                parceiro: imobiliariaInfo.parceiro.value,
                insc_municipal: imobiliariaInfo.insc_municipal.value,
                cep: imobiliariaInfo.cep.value,
                logradouro: imobiliariaInfo.logradouro.value,
                numero: imobiliariaInfo.numero.value,
                complemento: imobiliariaInfo.complemento.value,
                cidade: imobiliariaInfo.cidade.value,
                uf: imobiliariaInfo.uf.value,
            })
            .then(({data})=>toast.success(data))
            .catch(({error})=>toast.error(error.response.data))

        }else{
            await axios
            .post("http://localhost:1324/imobiliarias/",{
            nome: imobiliariaInfo.nome.value,
            cpf_cnpj: imobiliariaInfo.cpf_cnpj.value,
            interno: imobiliariaInfo.interno.value,
            apelido: imobiliariaInfo.apelido.value,
            parceiro: imobiliariaInfo.parceiro.value,
            insc_municipal: imobiliariaInfo.insc_municipal.value,
            cep: imobiliariaInfo.cep.value,
            logradouro: imobiliariaInfo.logradouro.value,
            numero: imobiliariaInfo.numero.value,
            complemento: imobiliariaInfo.complemento.value,
            cidade: imobiliariaInfo.cidade.value,
            uf: imobiliariaInfo.uf.value,
            email1: imobiliariaInfo.email1.value,
            email2: imobiliariaInfo.email2.value,
            fone1: imobiliariaInfo.fone1.value,
            fone2: imobiliariaInfo.fone2.value,
            fone3: imobiliariaInfo.fone3.value,
            
        })
        .then(({data})=>toast.success(data))
        .catch((error)=>{
            console.log(error)
            toast.warning(error.response.data)
        })
        }
    }

    const checkCEP = (e)=>{
        const imobiliariaInfo = ref.current; 
        const cep = e.target.value.replace(/\D/g, '')
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res=>res.json())
        .then(data=>{

            if (data.erro){
                toast.warning("CEP não encontrado")
            }
            imobiliariaInfo.logradouro.value = data.logradouro || "Carregando..."
            imobiliariaInfo.cidade.value = data.localidade || "Carregando..."
            imobiliariaInfo.uf.value = data.uf|| "Carregando..."
            imobiliariaInfo.complemento.value = data.complemento || " " 
        }).catch(()=>{
            toast.error("Digite um CEP valido")
        })
    }


    return <>
    {abreModal === "anexos" ? <AnexosImobiliarias setAbreModal={setAbreModal} id={id} />:
    (abreModal === "contatos" ? <ContatosImobiliarias setAbreModal={setAbreModal} id={id} />:
    abreModal === "anotacoes" && <AnotacoesImobiliarias setAbreModal={setAbreModal} id={id} />)}

    {}
    
        <form ref={ref} onSubmit={handleSubmit}>

        {props.detalhes&&
            (<div class="div-hfill2">
                <button onClick={()=>{setAbreModal("anexos")}} type='button'className="button-edit">Anexos<img src={arquivo} alt=""/></button>
                <button onClick={()=>{setAbreModal("contatos")}} type='button'className="button-edit">Contatos<img src={contato} alt=""/></button>
                <button onClick={()=>{setAbreModal("anotacoes")}} type='button'className="button-edit">Anotações<img src={anotacoes} alt=""/></button>
            </div>)
        }

        <div class="div-hfill">



            {props.detalhes&&
                (   
                editar?
                <button type='button' onClick={toggleEditar} className="button-edit">Editar<img src={edit} alt=""/></button>:
                <button type='button' onClick={toggleEditar} className="button-edit">Cancelar<img src={cancel} alt=""/></button>)
            }           

            {!editar &&
            <button type="submit">Salvar<img src={save} alt=""/></button>
            }
        </div>
        
            <div className="texthr" style={{display:"flex"}}>
                <h2>Informações Básicas</h2>
                <hr/>
            </div>
            <div className="wideform">
                <div className="div-input">
                    <label htmlFor="">Nome</label>
                    <input type="text" name="nome" placeholder="Digite o nome da imobiliária." readOnly={editar}/>
                </div>

                <CPFInput id="pj" type="text" name="cpf_cnpj" readOnly={editar}/>

                <div className="div-input" style={{width:"200px"}}>
                    <label htmlFor="">Interno</label>
                    <select disabled={editar} name="interno" id="">
                        <option value="" selected disabled hidden>Escolha o usuário.</option>
                        <option value="Roberta">Roberta</option>
                        <option value="Leide">Leide</option>
                        <option value="Ana Paula">Ana Paula</option>
                        <option value="Wanessa">Wanessa</option>
                    </select>
                </div>
                <div className="div-input">
                    <label htmlFor="">Apelido</label>
                    <input name="apelido" type="text" placeholder="Digite um apelido para a imobiliária."  readOnly={editar}/>
                </div>
                <div className="div-input" style={{width:"225px"}}>
                    <label htmlFor="">Parceiro</label>
                    <select disabled={editar} name="parceiro" id="">
                        <option value="" selected disabled hidden>Escolha um parceiro.</option>
                        <option value="Produção direta">Produção direta</option>
                        <option value="DaRede">DaRede</option>
                    </select>
                </div>
                <div className="div-input">
                    <label htmlFor="">Incrição municipal</label>
                    <input readOnly={editar} name="insc_municipal" type="text" placeholder="Digite a incrição municipal."/>
                </div>
            </div>
            <div className="texthr">
                <h2>Comunicação</h2>
                <hr/>
            </div>
            <div className="wideform">
                <div className="div-input div-input-phone">
                    <label htmlFor="">Fone</label>
                    <InputMask mask="(99) 9 9999-9999" readOnly={editar} name="fone1" type="text" placeholder="Digite o fone 1." data-js="phone"/>
                </div>
                <div className="div-input div-input-phone">
                    <label htmlFor="">Fone</label>
                    <InputMask mask="(99) 9 9999-9999" readOnly={editar} name="fone2" type="text" placeholder="Digite o fone 2." data-js="phone"/>
                </div>
                <div className="div-input div-input-phone">
                    <label htmlFor="">Fone</label>
                    <InputMask mask="(99) 9 9999-9999" readOnly={editar} name="fone3" type="text" placeholder="Digite o fone 3." data-js="phone"/>
                </div>
                <div className="div-input">
                    <label htmlFor="">E-mail</label>
                    <input name="email1" readOnly={editar} type="text" placeholder="Digite o e-mail 1."/>
                </div>
                <div className="div-input">
                    <label htmlFor="">E-mail</label>
                    <input name="email2" readOnly={editar} type="text" placeholder="Digite o e-mail 2."/>
                </div>
            </div>
            <div className="texthr">
                <h2>Endereço</h2>
                <hr/>
            </div>
            <div className="wideform">
                <div className="div-input div-input-cep">
                    <label htmlFor="">CEP</label>
                    <input onBlur={checkCEP} readOnly={editar} name="cep" type="text" placeholder="Digite o CEP." data-js="cep"/>
                </div>
                <div className="div-input">
                    <label htmlFor="">Logradouro</label>
                    <input readOnly={editar} name="logradouro" type="text" placeholder="Digite o logradouro."/>
                </div>
                <div className="div-input div-input-number">
                    <label htmlFor="">Número</label>
                    <input readOnly={editar} name="numero" type="number" placeholder="Digite o número."/>
                </div>
                <div className="div-input">
                    <label htmlFor="">Complemento</label>
                    <input readOnly={editar} name="complemento" type="text" placeholder="Digite o complemento."/>
                </div>
                <div className="div-input">
                    <label htmlFor="">Cidade</label>
                    <input readOnly={editar} name="cidade" type="text" placeholder="Digite a cidade."/>
                </div>
                <div className="div-input div-input-phone">
                    <label htmlFor="">UF</label>
                    <select disabled={editar} name="uf" id="">
                        <option value="" selected disabled hidden>Escolha uma UF.</option>
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AM">AM</option>
                        <option value="AP">AP</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MG">MG</option>
                        <option value="MS">MS</option>
                        <option value="MT">MT</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="PR">PR</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="RS">RS</option>
                        <option value="SC">SC</option>
                        <option value="SE">SE</option>
                        <option value="SP">SP</option>
                        <option value="TO">TO</option>
                    </select>
                </div>
            </div>
            <div className="texthr">
                <h2>Contas Correntes</h2>
                <hr/>
            </div>
            <div className="div-overflow-table">
                <table className="table-cc">
                    <tr>
                        <th>Número</th>
                        <th>Agência</th>
                        <th>Banco</th>
                        <th>Detalhes</th>
                    </tr>
                    <tr>
                        <td>
                            <div className="div-input div-input-cep">
                                <label htmlFor="">Conta 1</label>
                                <input readOnly={editar} type="number"/>
                            </div>
                        </td>
                        <td>
                            <div className="div-input div-input-cep">
                                <label htmlFor="">Conta 1</label>
                                <input readOnly={editar} type="number"/>
                            </div>
                        </td>
                        <td>
                            <div className="div-input div-input-cnpj">
                                <label htmlFor="">Conta 1</label>
                                <select className="selectbanco" name="" id="">
                                    <option value="" selected disabled hidden></option>
                                    <option value="">.</option>
                                    <option value="001">001-BANCO DO BRASIL S.A. </option>
                                    <option value="003">003-BANCO DA AMAZONIA S.A. </option>
                                    <option value="004">004-BANCO DO NORDESTE DO BRASIL S.A. </option>
                                    <option value="007">007-BNDES (BANCO NACIONAL DO DESENVOLVIMENTO SOCIAL) </option>
                                    <option value="010">010-CREDICOAMO CR&#201;DITO RURAL COOPERATIVA </option>
                                    <option value="011">011-CREDIT SUISSE HG CORRETORA </option>
                                    <option value="012">012-BANCO INBURSA </option>
                                    <option value="013">013-SENSO CORR.CAMB.VAL.MOBILIARIOS S.A</option>
                                    <option value="014">014-NATIXIS BRASIL S.A. - BCO. MULTIPLO</option>
                                    <option value="015">015-LINK S.A CORR.CAMBIO, TIT E VALS MO</option>
                                    <option value="016">016-COOPERATIVA DE CR&#201;DITO M&#218;TUO DOS DESPACHANTES DE T
                                    </option>
                                    <option value="017">017-BNY MELLON BANCO S.A. </option>
                                    <option value="018">018-BANCO TRICURY S.A. </option>
                                    <option value="019">019-BANCO AZTECA DO BRASIL S.A </option>
                                    <option value="021">021-BANESTES S.A. BCO.EST.ESPIRITO SANT</option>
                                    <option value="024">024-BANCO BANDEPE S.A. </option>
                                    <option value="025">025-BANCO ALFA S.A. </option>
                                    <option value="027">027-BANCO DO EST. DE SANTA CATARINA S.A</option>
                                    <option value="029">029-BANCO ITA&#218; CONSIGNADO S.A. </option>
                                    <option value="033">033-BANCO SANTANDER (BRASIL) S.A. </option>
                                    <option value="036">036-BANCO BRADESCO BBI S.A. </option>
                                    <option value="037">037-BANCO DO EST. DO PARA S.A. </option>
                                    <option value="040">040-BANCO CARGILL S.A. </option>
                                    <option value="041">041-BCO.EST.R.GRANDE DO SUL S.A. </option>
                                    <option value="044">044-BANCO BVA S.A </option>
                                    <option value="045">045-BANCO OPPORTUNITY S.A </option>
                                    <option value="047">047-BANCO DO EST. DE SERGIPE S.A. </option>
                                    <option value="060">060-CONFIDENCE CORRETORA DE C MBIO S.A.</option>
                                    <option value="062">062-HIPERCARD BANCO MULTIPLO S.A. </option>
                                    <option value="063">063-BANCO IBI S.A.- BANCO MULTIPLO </option>
                                    <option value="064">064-GOLDMAN SACHS DO BRASIL BM S.A. </option>
                                    <option value="065">065-BANCO BRACCE S.A. </option>
                                    <option value="066">066-BANCO MORGAN STANLEY S.A. </option>
                                    <option value="069">069-BPN BRASIL BANCO MULTIPLO S.A. </option>
                                    <option value="070">070-BRB-BANCO DE BRASILIA S.A. </option>
                                    <option value="072">072-BANCO RURAL MAIS S.A. </option>
                                    <option value="074">074-BANCO J. SAFRA S.A. </option>
                                    <option value="075">075-BANCO CR2 S.A. </option>
                                    <option value="076">076-BANCO KDB DO BRASIL S.A. </option>
                                    <option value="077">077-BANCO INTERMEDIUM S.A. </option>
                                    <option value="078">078-BES INVEST. DO BRASIL S.A.-BCO.INVE</option>
                                    <option value="079">079-JBS BANCO S.A. </option>
                                    <option value="080">080-B&amp;T ASSOCIADOS CORRETORA DE CAMBIO </option>
                                    <option value="081">081-BBN BANCO BRASILEIRO DE NEGOCIOS </option>
                                    <option value="082">082-BANCO TOPAZIO S.A. </option>
                                    <option value="083">083-BANCO DA CHINA BRASIL S.A </option>
                                    <option value="084">084-UNICRED NORTE DO PARANA-COOPERATIVA</option>
                                    <option value="085">085-COOP CENTRAL CRED URBANO-CC CECRED </option>
                                    <option value="087">087-CC UNICRED CENTRAL SANTA CATARINA </option>
                                    <option value="088">088-BANCO RANDON S.A. </option>
                                    <option value="089">089-COOP DE CRED.RURAL DA REG DA MOGIAN</option>
                                    <option value="090">090-COOP.CENTRAL DE CRED.DO EST.SAO PAU</option>
                                    <option value="091">091-UNICRED CENTRAL RS-C.C.EC CRED </option>
                                    <option value="092">092-BRICKELL S.A. CRED.FINC.INVESTIMENT</option>
                                    <option value="093">093-POLOCRED SOC.CRED.MICROEMP.EMP.LTDA</option>
                                    <option value="094">094-BANCO PETRA S.A </option>
                                    <option value="095">095-BANCO CONFIDENCE DE CAMBIO S.A. </option>
                                    <option value="096">096-BANCO BM&amp;F SERV.LIQ.E CUSTODIA S.A.</option>
                                    <option value="097">097-COOP.C.CRED.NOROESTE BRAS.LTDA </option>
                                    <option value="098">098-CREDIALIANCA COOP CRED RURAL </option>
                                    <option value="099">099-COOP CENT.EC.CR.MUTUO UNICREDS PR/M</option>
                                    <option value="100">100-PLANNER CORRET.DE VALORES S.A </option>
                                    <option value="101">101-RENANSCENCA DIST.TIT.VAL.MOB.LTDA </option>
                                    <option value="102">102-XP INVEST.CORR.CAMB.VLS MOB.S.A. </option>
                                    <option value="103">103-EBS CAPITAL CORRETORA DE CAMBIO S.A</option>
                                    <option value="104">104-CAIXA ECONOMICA FEDERAL </option>
                                    <option value="105">105-LECCA CFI S.A. </option>
                                    <option value="107">107-BANCO BBM S.A. </option>
                                    <option value="108">108-PORTOCRED S.A CRED.FINANC E INVEST.</option>
                                    <option value="111">111-OLIVEIRA TRUST DIST TIT.VAL.MOBILIA</option>
                                    <option value="112">112-CENT COOP CRED BRASIL CENTRAL </option>
                                    <option value="113">113-MAGLIANO S.A COR.CAMB.VLS MOBLS. </option>
                                    <option value="114">114-CENTRAL COOP.EC.CR.MUTUO ESP.STO </option>
                                    <option value="115">115-ROTULA S/A CRED FINANC INVEST </option>
                                    <option value="117">117-ADVANCED CORRET.CAMBIO LTDA </option>
                                    <option value="118">118-STANDARD C.BANK BRASIL S.A. BI </option>
                                    <option value="119">119-BANCO WESTERN UNION DO BRASIL S.A </option>
                                    <option value="120">120-BANCO RODOBENS S.A. </option>
                                    <option value="121">121-BANCO AGIBANK S.A. </option>
                                    <option value="122">122-BANCO BERJ S.A. </option>
                                    <option value="124">124-BANCO WOORI BANK DO BRASIL S.A. </option>
                                    <option value="125">125-BRASIL PLURAL S.A BANCO </option>
                                    <option value="126">126-BR PARTNERS BANCO DE INVESTIMENTO S.A. </option>
                                    <option value="127">127-CODEPE CVC S.A. </option>
                                    <option value="128">128-MS BANK S.A BANCO DE C&#194;MBIO </option>
                                    <option value="129">129-UBS BRASIL BI S.A. </option>
                                    <option value="130">130-CARUANA SCFI </option>
                                    <option value="131">131-TULLETT PREBON BRASIL CVC LTDA </option>
                                    <option value="132">132-ICBC DO BRASIL BM S.A. </option>
                                    <option value="133">133-CRESOL CONFEDERA&#199;&#195;O </option>
                                    <option value="134">134-BGC LIQUIDEZ DTVM LTDA </option>
                                    <option value="136">136-UNICRED COOPERATIVA LTDA </option>
                                    <option value="137">137-MULTIMONEY CC LTDA </option>
                                    <option value="138">138-GET MONEY CC LTDA </option>
                                    <option value="139">139-INTESA SANPAOLO BRASIL S.A. </option>
                                    <option value="140">140-EASYNVEST – T&#205;TULO CV S.A. </option>
                                    <option value="142">142-BROKER BRASIL CC LTDA </option>
                                    <option value="143">143-TREVISO CC S.A. </option>
                                    <option value="144">144-BEXS BANCO DE CAMBIO S.A. </option>
                                    <option value="145">145-LEVYCAM CCV LTDA </option>
                                    <option value="146">146-GUITTA CC LTDA </option>
                                    <option value="149">149-FACTA S.A. CFI </option>
                                    <option value="151">151-BANCO NOSSA CAIXA S.A. </option>
                                    <option value="157">157-ICAP DO BRASIL CTVM LTDA </option>
                                    <option value="159">159-CASA DO CR&#201;DITO S.A. </option>
                                    <option value="163">163-COMMERZBANK BRASIL S.A BANCO M&#218;LTIPLO </option>
                                    <option value="169">169-BANCO OL&#201; BONSUCESSO CONSIGNADO S.A. </option>
                                    <option value="172">172-ALBATROSS CCV S.A. </option>
                                    <option value="173">173-BRL TRUST DTVM SA </option>
                                    <option value="174">174-PEFISA S.A. – CR&#201;DITO, FINANCIAMENTO E INVESTIMENT
                                    </option>
                                    <option value="177">177-GUIDE INVESTIMENTOS S.A. CORRETORA DE VALORES </option>
                                    <option value="180">180-CM CAPITAL MARKETS CCTVM LTDA </option>
                                    <option value="182">182-DACASA FINANCEIRA S/A </option>
                                    <option value="183">183-SOCRED S.A. </option>
                                    <option value="184">184-BANCO ITAU BBA S.A. </option>
                                    <option value="188">188-ATIVA S.A INVESTIMENTOS </option>
                                    <option value="189">189-HS FINANCEIRA </option>
                                    <option value="190">190-SERVICOOP </option>
                                    <option value="191">191-NOVA FUTURA CTVM LTDA </option>
                                    <option value="194">194-PARMETAL DTVM LTDA </option>
                                    <option value="196">196-BANCO FAIR CC S.A. </option>
                                    <option value="197">197-STONE PAGAMENTOS S.A. </option>
                                    <option value="204">204-BANCO BRADESCO CARTOES S.A. </option>
                                    <option value="208">208-BANCO BTG PACTUAL S.A. </option>
                                    <option value="212">212-BANCO MATONE S.A. </option>
                                    <option value="213">213-BANCO ARBI S.A. </option>
                                    <option value="214">214-BANCO DIBENS S.A. </option>
                                    <option value="217">217-BANCO JOHN DEERE S.A. </option>
                                    <option value="218">218-BANCO BONSUCESSO S.A. </option>
                                    <option value="222">222-BANCO CREDIT AGRICOLE BRASIL S.A. </option>
                                    <option value="224">224-BANCO FIBRA S.A. </option>
                                    <option value="225">225-BANCO BRASCAN S.A. </option>
                                    <option value="229">229-BANCO CRUZEIRO DO SUL S.A. </option>
                                    <option value="230">230-UNICARD BANCO MULTIPLO S.A. </option>
                                    <option value="233">233-BANCO CIFRA S.A </option>
                                    <option value="237">237-BANCO BRADESCO S.A. </option>
                                    <option value="241">241-BANCO CLASSICO S.A. </option>
                                    <option value="243">243-BANCO MAXIMA S.A. </option>
                                    <option value="246">246-BANCO ABC-BRASIL S.A. </option>
                                    <option value="248">248-BANCO BOAVISTA INTERATLANTICO S.A. </option>
                                    <option value="249">249-BANCO INVESTCRED UNIBANCO S.A. </option>
                                    <option value="250">250-BANCO SCHAHIN S.A. </option>
                                    <option value="253">253-BEXS CC S.A. </option>
                                    <option value="254">254-PARANA BANCO S.A. </option>
                                    <option value="259">259-MONEYCORP BANCO DE C&#194;MBIO S.A. </option>
                                    <option value="260">260-NU PAGAMENTOS S.A (NUBANK) </option>
                                    <option value="263">263-BANCO CACIQUE S.A. </option>
                                    <option value="265">265-BANCO FATOR S.A. </option>
                                    <option value="266">266-BANCO CEDULA S.A. </option>
                                    <option value="268">268-BARIGUI COMPANHIA HIPOTEC&#193;RIA </option>
                                    <option value="269">269-HSBC BANCO DE INVESTIMENTO </option>
                                    <option value="270">270-SAGITUR CC LTDA </option>
                                    <option value="271">271-IB CCTVM LTDA </option>
                                    <option value="272">272-AGK CORRETORA DE C&#194;MBIO S.A. </option>
                                    <option value="273">273-CCR DE S&#195;O MIGUEL DO OESTE </option>
                                    <option value="274">274-MONEY PLUS SOCIEDADE DE CR&#201;DITO AO MICROEMPREENDED
                                    </option>
                                    <option value="276">276-SENFF S.A. </option>
                                    <option value="278">278-GENIAL INVESTIMENTOS CVM S.A. </option>
                                    <option value="279">279-CCR DE PRIMAVERA DO LESTE </option>
                                    <option value="280">280-AVISTA S.A. </option>
                                    <option value="281">281-COOPERATIVA DE CR&#201;DITO RURAL COOPAVEL </option>
                                    <option value="283">283-RB CAPITAL INVESTIMENTOS DTVM LTDA </option>
                                    <option value="285">285-FRENTE CC LTDA </option>
                                    <option value="286">286-COOPERATIVA DE CR&#201;DITO RURAL DE DE OURO </option>
                                    <option value="288">288-CAROL DTVM LTDA </option>
                                    <option value="289">289-DECYSEO CORRETORA DE CAMBIO LTDA. </option>
                                    <option value="290">290-PAGSEGURO INTERNET S.A. </option>
                                    <option value="292">292-BS2 DISTRIBUIDORA DE T&#205;TULOS E INVESTIMENTOS </option>
                                    <option value="293">293-LASTRO RDV DTVM LTDA </option>
                                    <option value="296">296-VISION S.A. CORRETORA DE CAMBIO </option>
                                    <option value="298">298-VIP’S CC LTDA </option>
                                    <option value="299">299-SOROCRED&#160;&#160; CR&#201;DITO, FINANCIAMENTO E
                                        INVESTIMENTO S</option>
                                    <option value="300">300-BANCO DE LA NACION ARGENTINA </option>
                                    <option value="301">301-BPP INSTITUI&#199;&#195;O DE PAGAMENTOS S.A. </option>
                                    <option value="306">306-PORTOPAR DISTRIBUIDORA DE TITULOS E VALORES MOBILI</option>
                                    <option value="307">307-TERRA INVESTIMENTOS DISTRIBUIDORA DE T&#205;TULOS E VAL
                                    </option>
                                    <option value="309">309-CAMBIONET CORRETORA DE C&#194;MBIO LTDA. </option>
                                    <option value="310">310-VORTX DTVM LTDA </option>
                                    <option value="313">313-AMAZ&#212;NIA CORRETORA DE C&#194;MBIO LTDA. </option>
                                    <option value="315">315-PI DISTRIBUIDORA DE T&#205;TULOS E VALORES MOBILI&#193;RIOS
                                    </option>
                                    <option value="318">318-BANCO BMG S.A </option>
                                    <option value="319">319-OM DISTRIBUIDORA DE T&#205;TULOS E VALORES MOBILI&#193;RIOS
                                    </option>
                                    <option value="320">320-BANCO INDUSTRIAL E COMERCIAL S.A. </option>
                                    <option value="321">321-CREFAZ SOCIEDADE DE CR&#201;DITO AO MICROEMPREENDEDOR E
                                    </option>
                                    <option value="322">322-COOPERATIVA DE CR&#201;DITO RURAL DE ABELARDO LUZ – SUL
                                    </option>
                                    <option value="323">323-MERCADO PAGO – CONTA DO MERCADO LIVRE </option>
                                    <option value="324">324-CARTOS SOCIEDADE DE CR&#201;DITO DIRETO S.A. </option>
                                    <option value="325">325-&#211;RAMA DISTRIBUIDORA DE T&#205;TULOS E VALORES
                                        MOBILI&#193;RI</option>
                                    <option value="326">326-PARATI – CR&#201;DITO, FINANCIAMENTO E INVESTIMENTO S.A
                                    </option>
                                    <option value="329">329-QI SOCIEDADE DE CR&#201;DITO DIRETO S.A. </option>
                                    <option value="330">330-BANCO BARI DE INVESTIMENTOS E FINANCIAMENTOS S.A. </option>
                                    <option value="331">331-FRAM CAPITAL DISTRIBUIDORA DE T&#205;TULOS E VALORES MO
                                    </option>
                                    <option value="332">332-ACESSO SOLU&#199;&#213;ES DE PAGAMENTO S.A. </option>
                                    <option value="335">335-BANCO DIGIO S.A. </option>
                                    <option value="336">336-BANCO C6 S.A – C6 BANK </option>
                                    <option value="340">340-SUPER PAGAMENTOS S/A (SUPERDITAL) </option>
                                    <option value="341">341-ITAU UNIBANCO S.A. </option>
                                    <option value="342">342-CREDITAS SOCIEDADE DE CR&#201;DITO DIRETO S.A. </option>
                                    <option value="343">343-FFA SOCIEDADE DE CR&#201;DITO AO MICROEMPREENDEDOR E &#192;
                                    </option>
                                    <option value="347">347-BANCO SUDAMERIS BRASIL S.A. </option>
                                    <option value="348">348-BANCO XP S/A </option>
                                    <option value="349">349-AL5 S.A. CR&#201;DITO, FINANCIAMENTO E INVESTIMENTO
                                    </option>
                                    <option value="350">350-COOPERATIVA DE CR&#201;DITO RURAL DE PEQUENOS AGRICULTO
                                    </option>
                                    <option value="352">352-TORO CORRETORA DE T&#205;TULOS E VALORES MOBILI&#193;RIOS LT
                                    </option>
                                    <option value="354">354-NECTON INVESTIMENTOS S.A. CORRETORA DE VALORES MOB</option>
                                    <option value="355">355-&#211;TIMO SOCIEDADE DE CR&#201;DITO DIRETO S.A. </option>
                                    <option value="356">356-BANCO ABN AMRO REAL S.A. </option>
                                    <option value="359">359-ZEMA CR&#201;DITO, FINANCIAMENTO E INVESTIMENTO S/A
                                    </option>
                                    <option value="360">360-TRINUS CAPITAL DISTRIBUIDORA DE T&#205;TULOS E VALORES
                                    </option>
                                    <option value="362">362-CIELO S.A. </option>
                                    <option value="363">363-SOCOPA SOCIEDADE CORRETORA PAULISTA S.A. </option>
                                    <option value="364">364-GERENCIANET S.A. </option>
                                    <option value="365">365-SOLIDUS S.A. CORRETORA DE CAMBIO E VALORES MOBILIA</option>
                                    <option value="366">366-BANCO SOCIETE GENERALE BRASIL S.A. </option>
                                    <option value="367">367-VITREO DISTRIBUIDORA DE T&#205;TULOS E VALORES MOBILI&#193;R
                                    </option>
                                    <option value="368">368-BANCO CSF S.A. </option>
                                    <option value="370">370-BANCO WESTLB DO BRASIL S.A. </option>
                                    <option value="371">371-WARREN CORRETORA DE VALORES MOBILI&#193;RIOS E C&#194;MBIO L
                                    </option>
                                    <option value="373">373-UP.P SOCIEDADE DE EMPR&#201;STIMO ENTRE PESSOAS S.A.
                                    </option>
                                    <option value="374">374-REALIZE CR&#201;DITO, FINANCIAMENTO E INVESTIMENTO S.A.
                                    </option>
                                    <option value="376">376-BANCO J. P. MORGAN S.A. </option>
                                    <option value="377">377-MS SOCIEDADE DE CR&#201;DITO AO MICROEMPREENDEDOR E &#192; E
                                    </option>
                                    <option value="378">378-BBC LEASING S.A. – ARRENDAMENTO MERCANTIL </option>
                                    <option value="379">379-COOPERFORTE – COOPERATIVA DE ECONOMIA E CR&#201;DITO M&#218;
                                    </option>
                                    <option value="380">380-PICPAY SERVICOS S.A. </option>
                                    <option value="381">381-BANCO MERCEDES-BENZ DO BRASIL S.A. </option>
                                    <option value="382">382-FID&#218;CIA SOCIEDADE DE CR&#201;DITO AO MICROEMPREENDEDOR
                                    </option>
                                    <option value="383">383-BOLETOBANC&#193;RIO.COM TECNOLOGIA DE PAGAMENTOS LTDA.
                                    </option>
                                    <option value="384">384-GLOBAL FINAN&#199;AS SOCIEDADE DE CR&#201;DITO AO MICROEMPRE
                                    </option>
                                    <option value="387">387-BANCO TOYOTA DO BRASIL S.A. </option>
                                    <option value="389">389-BANCO MERCANTIL DO BRASIL S.A. </option>
                                    <option value="390">390-BANCO GM S.A. </option>
                                    <option value="391">391-COOPERATIVA DE CR&#201;DITO RURAL DE IBIAM – SULCREDI/I
                                    </option>
                                    <option value="393">393-BANCO VOLKSWAGEN S.A. </option>
                                    <option value="394">394-BCO BRADESCO FINANCIAMENTOS S.A </option>
                                    <option value="396">396-HUB PAGAMENTOS S.A. </option>
                                    <option value="397">397-LISTO SOCIEDADE DE CR&#201;DITO DIRETO S.A. </option>
                                    <option value="399">399-HSBC BANK BRASIL S.A. BCO. MULTIPLO</option>
                                    <option value="403">403-CORA SOCIEDADE DE CR&#201;DITO DIRETO S.A. </option>
                                    <option value="404">404-SUMUP SOCIEDADE DE CR&#201;DITO DIRETO S.A. </option>
                                    <option value="408">408-B&#212;NUSCRED SOCIEDADE DE CR&#201;DITO DIRETO S.A.
                                    </option>
                                    <option value="409">409-UNIBANCO-UNIAO BCOS BRASILEIROS S.A</option>
                                    <option value="412">412-BANCO CAPITAL S.A. </option>
                                    <option value="422">422-BANCO SAFRA S.A. </option>
                                    <option value="453">453-BANCO RURAL S.A. </option>
                                    <option value="456">456-BANCO DE TOKYO-MITSUBISHI UFJ BR S.</option>
                                    <option value="464">464-BANCO SUMITOMO MITSUI BRASILEIRO S.</option>
                                    <option value="473">473-BANCO CAIXA GERAL - BRASIL S.A. </option>
                                    <option value="477">477-CITIBANK N.A. </option>
                                    <option value="479">479-BANCO ITAUBANK S.A. </option>
                                    <option value="487">487-DEUTSCHE BANK S.A.-BANCO ALEMAO </option>
                                    <option value="488">488-JPMORGAN CHASE BANK </option>
                                    <option value="492">492-ING BANK N.V. </option>
                                    <option value="494">494-BANCO DE LA REP. OR. DEL URUGUAY </option>
                                    <option value="495">495-BANCO DE LA PROV. DE BUENOS AIRES </option>
                                    <option value="505">505-BANCO CREDIT SUISSE (BRASIL) S.A. </option>
                                    <option value="545">545-SENSO CCVM S.A. </option>
                                    <option value="600">600-BANCO LUSO BRASILEIRO S.A. </option>
                                    <option value="604">604-BANCO INDUSTRIAL DO BRASIL S.A. </option>
                                    <option value="610">610-BANCO VR S.A. </option>
                                    <option value="611">611-BANCO PAULISTA S.A. </option>
                                    <option value="612">612-BANCO GUANABARA S.A. </option>
                                    <option value="613">613-BANCO PECUNIA S.A. </option>
                                    <option value="623">623-BANCO PANAMERICANO S.A. </option>
                                    <option value="626">626-BANCO FICSA S.A. </option>
                                    <option value="630">630-BANCO INTERCAP S.A. </option>
                                    <option value="633">633-BANCO RENDIMENTO S.A. </option>
                                    <option value="634">634-BANCO TRIANGULO S.A. </option>
                                    <option value="637">637-BANCO SOFISA S.A. </option>
                                    <option value="638">638-BANCO PROSPER S.A. </option>
                                    <option value="641">641-BANCO ALVORADA S.A. </option>
                                    <option value="643">643-BANCO PINE S.A. </option>
                                    <option value="652">652-BANCO ITAU HOLDING FINANCEIRA S.A. </option>
                                    <option value="653">653-BANCO INDUSVAL S.A. </option>
                                    <option value="654">654-BANCO A.J.RENNER S.A. </option>
                                    <option value="655">655-BANCO VOTORANTIM S.A. </option>
                                    <option value="707">707-BANCO DAYCOVAL S.A. </option>
                                    <option value="712">712-BANCO OURINVEST S.A. </option>
                                    <option value="719">719-BANIF-BCO.INTERN.FUNCHAL (BR) S.A. </option>
                                    <option value="721">721-BANCO CREDIBEL S.A. </option>
                                    <option value="735">735-BANCO POTTENCIAL S.A. </option>
                                    <option value="739">739-BANCO BGN S.A. </option>
                                    <option value="740">740-BANCO BARCLAYS S.A. </option>
                                    <option value="741">741-BANCO RIBEIRAO PRETO S.A. </option>
                                    <option value="743">743-BANCO SEMEAR S.A. </option>
                                    <option value="745">745-BANCO CITIBANK S.A </option>
                                    <option value="746">746-BANCO MODAL S.A. </option>
                                    <option value="747">747-BANCO RABOBANK INTERNATIONAL BRASIL</option>
                                    <option value="748">748-BANCO COOPERATIVO SICREDI S.A. </option>
                                    <option value="749">749-BANCO SIMPLES S.A. </option>
                                    <option value="751">751-SCOTIABANK BRASIL S/A B.MULTIPLO </option>
                                    <option value="752">752-BANCO BNP PARIBAS BRASIL S.A. </option>
                                    <option value="753">753-NBC BANK BRASIL S.A.-BCO.MULTIPLO </option>
                                    <option value="754">754-BANCO SISTEMA S.A. </option>
                                    <option value="755">755-B.OF A.MERRRILL LYNCH B.MULT.S.A. </option>
                                    <option value="756">756-BANCO COOPERATIVO DO BRASIL S.A. </option>
                                    <option value="757">757-BANCO KEB DO BRASIL S.A. </option>
                                    <option value="901">901-CORRETORA SOUZA BARROS CAMB.TITULOS</option>
                                </select>
                            </div>
                        </td>
                        <td>
                            <div className="div-input">
                                <label htmlFor="">Conta 1</label>
                                <input readOnly={editar} type="text"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="div-input div-input-cep">
                                <label htmlFor="">Conta 2</label>
                                <input readOnly={editar} type="number"/>
                            </div>
                        </td>
                        <td>
                            <div className="div-input div-input-cep">
                                <label htmlFor="">Conta 2</label>
                                <input readOnly={editar} type="number"/>
                            </div>
                        </td>
                        <td>
                            <div className="div-input div-input-cnpj">
                                <label htmlFor="">Conta 2</label>
                                <select className="selectbanco" name="" id="">
                                    <option value="" selected disabled hidden></option>
                                    <option value="">.</option>
                                    <option value="001">001-BANCO DO BRASIL S.A. </option>
                                    <option value="003">003-BANCO DA AMAZONIA S.A. </option>
                                    <option value="004">004-BANCO DO NORDESTE DO BRASIL S.A. </option>
                                    <option value="007">007-BNDES (BANCO NACIONAL DO DESENVOLVIMENTO SOCIAL) </option>
                                    <option value="010">010-CREDICOAMO CR&#201;DITO RURAL COOPERATIVA </option>
                                    <option value="011">011-CREDIT SUISSE HG CORRETORA </option>
                                    <option value="012">012-BANCO INBURSA </option>
                                    <option value="013">013-SENSO CORR.CAMB.VAL.MOBILIARIOS S.A</option>
                                    <option value="014">014-NATIXIS BRASIL S.A. - BCO. MULTIPLO</option>
                                    <option value="015">015-LINK S.A CORR.CAMBIO, TIT E VALS MO</option>
                                    <option value="016">016-COOPERATIVA DE CR&#201;DITO M&#218;TUO DOS DESPACHANTES DE T
                                    </option>
                                    <option value="017">017-BNY MELLON BANCO S.A. </option>
                                    <option value="018">018-BANCO TRICURY S.A. </option>
                                    <option value="019">019-BANCO AZTECA DO BRASIL S.A </option>
                                    <option value="021">021-BANESTES S.A. BCO.EST.ESPIRITO SANT</option>
                                    <option value="024">024-BANCO BANDEPE S.A. </option>
                                    <option value="025">025-BANCO ALFA S.A. </option>
                                    <option value="027">027-BANCO DO EST. DE SANTA CATARINA S.A</option>
                                    <option value="029">029-BANCO ITA&#218; CONSIGNADO S.A. </option>
                                    <option value="033">033-BANCO SANTANDER (BRASIL) S.A. </option>
                                    <option value="036">036-BANCO BRADESCO BBI S.A. </option>
                                    <option value="037">037-BANCO DO EST. DO PARA S.A. </option>
                                    <option value="040">040-BANCO CARGILL S.A. </option>
                                    <option value="041">041-BCO.EST.R.GRANDE DO SUL S.A. </option>
                                    <option value="044">044-BANCO BVA S.A </option>
                                    <option value="045">045-BANCO OPPORTUNITY S.A </option>
                                    <option value="047">047-BANCO DO EST. DE SERGIPE S.A. </option>
                                    <option value="060">060-CONFIDENCE CORRETORA DE C MBIO S.A.</option>
                                    <option value="062">062-HIPERCARD BANCO MULTIPLO S.A. </option>
                                    <option value="063">063-BANCO IBI S.A.- BANCO MULTIPLO </option>
                                    <option value="064">064-GOLDMAN SACHS DO BRASIL BM S.A. </option>
                                    <option value="065">065-BANCO BRACCE S.A. </option>
                                    <option value="066">066-BANCO MORGAN STANLEY S.A. </option>
                                    <option value="069">069-BPN BRASIL BANCO MULTIPLO S.A. </option>
                                    <option value="070">070-BRB-BANCO DE BRASILIA S.A. </option>
                                    <option value="072">072-BANCO RURAL MAIS S.A. </option>
                                    <option value="074">074-BANCO J. SAFRA S.A. </option>
                                    <option value="075">075-BANCO CR2 S.A. </option>
                                    <option value="076">076-BANCO KDB DO BRASIL S.A. </option>
                                    <option value="077">077-BANCO INTERMEDIUM S.A. </option>
                                    <option value="078">078-BES INVEST. DO BRASIL S.A.-BCO.INVE</option>
                                    <option value="079">079-JBS BANCO S.A. </option>
                                    <option value="080">080-B&amp;T ASSOCIADOS CORRETORA DE CAMBIO </option>
                                    <option value="081">081-BBN BANCO BRASILEIRO DE NEGOCIOS </option>
                                    <option value="082">082-BANCO TOPAZIO S.A. </option>
                                    <option value="083">083-BANCO DA CHINA BRASIL S.A </option>
                                    <option value="084">084-UNICRED NORTE DO PARANA-COOPERATIVA</option>
                                    <option value="085">085-COOP CENTRAL CRED URBANO-CC CECRED </option>
                                    <option value="087">087-CC UNICRED CENTRAL SANTA CATARINA </option>
                                    <option value="088">088-BANCO RANDON S.A. </option>
                                    <option value="089">089-COOP DE CRED.RURAL DA REG DA MOGIAN</option>
                                    <option value="090">090-COOP.CENTRAL DE CRED.DO EST.SAO PAU</option>
                                    <option value="091">091-UNICRED CENTRAL RS-C.C.EC CRED </option>
                                    <option value="092">092-BRICKELL S.A. CRED.FINC.INVESTIMENT</option>
                                    <option value="093">093-POLOCRED SOC.CRED.MICROEMP.EMP.LTDA</option>
                                    <option value="094">094-BANCO PETRA S.A </option>
                                    <option value="095">095-BANCO CONFIDENCE DE CAMBIO S.A. </option>
                                    <option value="096">096-BANCO BM&amp;F SERV.LIQ.E CUSTODIA S.A.</option>
                                    <option value="097">097-COOP.C.CRED.NOROESTE BRAS.LTDA </option>
                                    <option value="098">098-CREDIALIANCA COOP CRED RURAL </option>
                                    <option value="099">099-COOP CENT.EC.CR.MUTUO UNICREDS PR/M</option>
                                    <option value="100">100-PLANNER CORRET.DE VALORES S.A </option>
                                    <option value="101">101-RENANSCENCA DIST.TIT.VAL.MOB.LTDA </option>
                                    <option value="102">102-XP INVEST.CORR.CAMB.VLS MOB.S.A. </option>
                                    <option value="103">103-EBS CAPITAL CORRETORA DE CAMBIO S.A</option>
                                    <option value="104">104-CAIXA ECONOMICA FEDERAL </option>
                                    <option value="105">105-LECCA CFI S.A. </option>
                                    <option value="107">107-BANCO BBM S.A. </option>
                                    <option value="108">108-PORTOCRED S.A CRED.FINANC E INVEST.</option>
                                    <option value="111">111-OLIVEIRA TRUST DIST TIT.VAL.MOBILIA</option>
                                    <option value="112">112-CENT COOP CRED BRASIL CENTRAL </option>
                                    <option value="113">113-MAGLIANO S.A COR.CAMB.VLS MOBLS. </option>
                                    <option value="114">114-CENTRAL COOP.EC.CR.MUTUO ESP.STO </option>
                                    <option value="115">115-ROTULA S/A CRED FINANC INVEST </option>
                                    <option value="117">117-ADVANCED CORRET.CAMBIO LTDA </option>
                                    <option value="118">118-STANDARD C.BANK BRASIL S.A. BI </option>
                                    <option value="119">119-BANCO WESTERN UNION DO BRASIL S.A </option>
                                    <option value="120">120-BANCO RODOBENS S.A. </option>
                                    <option value="121">121-BANCO AGIBANK S.A. </option>
                                    <option value="122">122-BANCO BERJ S.A. </option>
                                    <option value="124">124-BANCO WOORI BANK DO BRASIL S.A. </option>
                                    <option value="125">125-BRASIL PLURAL S.A BANCO </option>
                                    <option value="126">126-BR PARTNERS BANCO DE INVESTIMENTO S.A. </option>
                                    <option value="127">127-CODEPE CVC S.A. </option>
                                    <option value="128">128-MS BANK S.A BANCO DE C&#194;MBIO </option>
                                    <option value="129">129-UBS BRASIL BI S.A. </option>
                                    <option value="130">130-CARUANA SCFI </option>
                                    <option value="131">131-TULLETT PREBON BRASIL CVC LTDA </option>
                                    <option value="132">132-ICBC DO BRASIL BM S.A. </option>
                                    <option value="133">133-CRESOL CONFEDERA&#199;&#195;O </option>
                                    <option value="134">134-BGC LIQUIDEZ DTVM LTDA </option>
                                    <option value="136">136-UNICRED COOPERATIVA LTDA </option>
                                    <option value="137">137-MULTIMONEY CC LTDA </option>
                                    <option value="138">138-GET MONEY CC LTDA </option>
                                    <option value="139">139-INTESA SANPAOLO BRASIL S.A. </option>
                                    <option value="140">140-EASYNVEST – T&#205;TULO CV S.A. </option>
                                    <option value="142">142-BROKER BRASIL CC LTDA </option>
                                    <option value="143">143-TREVISO CC S.A. </option>
                                    <option value="144">144-BEXS BANCO DE CAMBIO S.A. </option>
                                    <option value="145">145-LEVYCAM CCV LTDA </option>
                                    <option value="146">146-GUITTA CC LTDA </option>
                                    <option value="149">149-FACTA S.A. CFI </option>
                                    <option value="151">151-BANCO NOSSA CAIXA S.A. </option>
                                    <option value="157">157-ICAP DO BRASIL CTVM LTDA </option>
                                    <option value="159">159-CASA DO CR&#201;DITO S.A. </option>
                                    <option value="163">163-COMMERZBANK BRASIL S.A BANCO M&#218;LTIPLO </option>
                                    <option value="169">169-BANCO OL&#201; BONSUCESSO CONSIGNADO S.A. </option>
                                    <option value="172">172-ALBATROSS CCV S.A. </option>
                                    <option value="173">173-BRL TRUST DTVM SA </option>
                                    <option value="174">174-PEFISA S.A. – CR&#201;DITO, FINANCIAMENTO E INVESTIMENT
                                    </option>
                                    <option value="177">177-GUIDE INVESTIMENTOS S.A. CORRETORA DE VALORES </option>
                                    <option value="180">180-CM CAPITAL MARKETS CCTVM LTDA </option>
                                    <option value="182">182-DACASA FINANCEIRA S/A </option>
                                    <option value="183">183-SOCRED S.A. </option>
                                    <option value="184">184-BANCO ITAU BBA S.A. </option>
                                    <option value="188">188-ATIVA S.A INVESTIMENTOS </option>
                                    <option value="189">189-HS FINANCEIRA </option>
                                    <option value="190">190-SERVICOOP </option>
                                    <option value="191">191-NOVA FUTURA CTVM LTDA </option>
                                    <option value="194">194-PARMETAL DTVM LTDA </option>
                                    <option value="196">196-BANCO FAIR CC S.A. </option>
                                    <option value="197">197-STONE PAGAMENTOS S.A. </option>
                                    <option value="204">204-BANCO BRADESCO CARTOES S.A. </option>
                                    <option value="208">208-BANCO BTG PACTUAL S.A. </option>
                                    <option value="212">212-BANCO MATONE S.A. </option>
                                    <option value="213">213-BANCO ARBI S.A. </option>
                                    <option value="214">214-BANCO DIBENS S.A. </option>
                                    <option value="217">217-BANCO JOHN DEERE S.A. </option>
                                    <option value="218">218-BANCO BONSUCESSO S.A. </option>
                                    <option value="222">222-BANCO CREDIT AGRICOLE BRASIL S.A. </option>
                                    <option value="224">224-BANCO FIBRA S.A. </option>
                                    <option value="225">225-BANCO BRASCAN S.A. </option>
                                    <option value="229">229-BANCO CRUZEIRO DO SUL S.A. </option>
                                    <option value="230">230-UNICARD BANCO MULTIPLO S.A. </option>
                                    <option value="233">233-BANCO CIFRA S.A </option>
                                    <option value="237">237-BANCO BRADESCO S.A. </option>
                                    <option value="241">241-BANCO CLASSICO S.A. </option>
                                    <option value="243">243-BANCO MAXIMA S.A. </option>
                                    <option value="246">246-BANCO ABC-BRASIL S.A. </option>
                                    <option value="248">248-BANCO BOAVISTA INTERATLANTICO S.A. </option>
                                    <option value="249">249-BANCO INVESTCRED UNIBANCO S.A. </option>
                                    <option value="250">250-BANCO SCHAHIN S.A. </option>
                                    <option value="253">253-BEXS CC S.A. </option>
                                    <option value="254">254-PARANA BANCO S.A. </option>
                                    <option value="259">259-MONEYCORP BANCO DE C&#194;MBIO S.A. </option>
                                    <option value="260">260-NU PAGAMENTOS S.A (NUBANK) </option>
                                    <option value="263">263-BANCO CACIQUE S.A. </option>
                                    <option value="265">265-BANCO FATOR S.A. </option>
                                    <option value="266">266-BANCO CEDULA S.A. </option>
                                    <option value="268">268-BARIGUI COMPANHIA HIPOTEC&#193;RIA </option>
                                    <option value="269">269-HSBC BANCO DE INVESTIMENTO </option>
                                    <option value="270">270-SAGITUR CC LTDA </option>
                                    <option value="271">271-IB CCTVM LTDA </option>
                                    <option value="272">272-AGK CORRETORA DE C&#194;MBIO S.A. </option>
                                    <option value="273">273-CCR DE S&#195;O MIGUEL DO OESTE </option>
                                    <option value="274">274-MONEY PLUS SOCIEDADE DE CR&#201;DITO AO MICROEMPREENDED
                                    </option>
                                    <option value="276">276-SENFF S.A. </option>
                                    <option value="278">278-GENIAL INVESTIMENTOS CVM S.A. </option>
                                    <option value="279">279-CCR DE PRIMAVERA DO LESTE </option>
                                    <option value="280">280-AVISTA S.A. </option>
                                    <option value="281">281-COOPERATIVA DE CR&#201;DITO RURAL COOPAVEL </option>
                                    <option value="283">283-RB CAPITAL INVESTIMENTOS DTVM LTDA </option>
                                    <option value="285">285-FRENTE CC LTDA </option>
                                    <option value="286">286-COOPERATIVA DE CR&#201;DITO RURAL DE DE OURO </option>
                                    <option value="288">288-CAROL DTVM LTDA </option>
                                    <option value="289">289-DECYSEO CORRETORA DE CAMBIO LTDA. </option>
                                    <option value="290">290-PAGSEGURO INTERNET S.A. </option>
                                    <option value="292">292-BS2 DISTRIBUIDORA DE T&#205;TULOS E INVESTIMENTOS </option>
                                    <option value="293">293-LASTRO RDV DTVM LTDA </option>
                                    <option value="296">296-VISION S.A. CORRETORA DE CAMBIO </option>
                                    <option value="298">298-VIP’S CC LTDA </option>
                                    <option value="299">299-SOROCRED&#160;&#160; CR&#201;DITO, FINANCIAMENTO E
                                        INVESTIMENTO S</option>
                                    <option value="300">300-BANCO DE LA NACION ARGENTINA </option>
                                    <option value="301">301-BPP INSTITUI&#199;&#195;O DE PAGAMENTOS S.A. </option>
                                    <option value="306">306-PORTOPAR DISTRIBUIDORA DE TITULOS E VALORES MOBILI</option>
                                    <option value="307">307-TERRA INVESTIMENTOS DISTRIBUIDORA DE T&#205;TULOS E VAL
                                    </option>
                                    <option value="309">309-CAMBIONET CORRETORA DE C&#194;MBIO LTDA. </option>
                                    <option value="310">310-VORTX DTVM LTDA </option>
                                    <option value="313">313-AMAZ&#212;NIA CORRETORA DE C&#194;MBIO LTDA. </option>
                                    <option value="315">315-PI DISTRIBUIDORA DE T&#205;TULOS E VALORES MOBILI&#193;RIOS
                                    </option>
                                    <option value="318">318-BANCO BMG S.A </option>
                                    <option value="319">319-OM DISTRIBUIDORA DE T&#205;TULOS E VALORES MOBILI&#193;RIOS
                                    </option>
                                    <option value="320">320-BANCO INDUSTRIAL E COMERCIAL S.A. </option>
                                    <option value="321">321-CREFAZ SOCIEDADE DE CR&#201;DITO AO MICROEMPREENDEDOR E
                                    </option>
                                    <option value="322">322-COOPERATIVA DE CR&#201;DITO RURAL DE ABELARDO LUZ – SUL
                                    </option>
                                    <option value="323">323-MERCADO PAGO – CONTA DO MERCADO LIVRE </option>
                                    <option value="324">324-CARTOS SOCIEDADE DE CR&#201;DITO DIRETO S.A. </option>
                                    <option value="325">325-&#211;RAMA DISTRIBUIDORA DE T&#205;TULOS E VALORES
                                        MOBILI&#193;RI</option>
                                    <option value="326">326-PARATI – CR&#201;DITO, FINANCIAMENTO E INVESTIMENTO S.A
                                    </option>
                                    <option value="329">329-QI SOCIEDADE DE CR&#201;DITO DIRETO S.A. </option>
                                    <option value="330">330-BANCO BARI DE INVESTIMENTOS E FINANCIAMENTOS S.A. </option>
                                    <option value="331">331-FRAM CAPITAL DISTRIBUIDORA DE T&#205;TULOS E VALORES MO
                                    </option>
                                    <option value="332">332-ACESSO SOLU&#199;&#213;ES DE PAGAMENTO S.A. </option>
                                    <option value="335">335-BANCO DIGIO S.A. </option>
                                    <option value="336">336-BANCO C6 S.A – C6 BANK </option>
                                    <option value="340">340-SUPER PAGAMENTOS S/A (SUPERDITAL) </option>
                                    <option value="341">341-ITAU UNIBANCO S.A. </option>
                                    <option value="342">342-CREDITAS SOCIEDADE DE CR&#201;DITO DIRETO S.A. </option>
                                    <option value="343">343-FFA SOCIEDADE DE CR&#201;DITO AO MICROEMPREENDEDOR E &#192;
                                    </option>
                                    <option value="347">347-BANCO SUDAMERIS BRASIL S.A. </option>
                                    <option value="348">348-BANCO XP S/A </option>
                                    <option value="349">349-AL5 S.A. CR&#201;DITO, FINANCIAMENTO E INVESTIMENTO
                                    </option>
                                    <option value="350">350-COOPERATIVA DE CR&#201;DITO RURAL DE PEQUENOS AGRICULTO
                                    </option>
                                    <option value="352">352-TORO CORRETORA DE T&#205;TULOS E VALORES MOBILI&#193;RIOS LT
                                    </option>
                                    <option value="354">354-NECTON INVESTIMENTOS S.A. CORRETORA DE VALORES MOB</option>
                                    <option value="355">355-&#211;TIMO SOCIEDADE DE CR&#201;DITO DIRETO S.A. </option>
                                    <option value="356">356-BANCO ABN AMRO REAL S.A. </option>
                                    <option value="359">359-ZEMA CR&#201;DITO, FINANCIAMENTO E INVESTIMENTO S/A
                                    </option>
                                    <option value="360">360-TRINUS CAPITAL DISTRIBUIDORA DE T&#205;TULOS E VALORES
                                    </option>
                                    <option value="362">362-CIELO S.A. </option>
                                    <option value="363">363-SOCOPA SOCIEDADE CORRETORA PAULISTA S.A. </option>
                                    <option value="364">364-GERENCIANET S.A. </option>
                                    <option value="365">365-SOLIDUS S.A. CORRETORA DE CAMBIO E VALORES MOBILIA</option>
                                    <option value="366">366-BANCO SOCIETE GENERALE BRASIL S.A. </option>
                                    <option value="367">367-VITREO DISTRIBUIDORA DE T&#205;TULOS E VALORES MOBILI&#193;R
                                    </option>
                                    <option value="368">368-BANCO CSF S.A. </option>
                                    <option value="370">370-BANCO WESTLB DO BRASIL S.A. </option>
                                    <option value="371">371-WARREN CORRETORA DE VALORES MOBILI&#193;RIOS E C&#194;MBIO L
                                    </option>
                                    <option value="373">373-UP.P SOCIEDADE DE EMPR&#201;STIMO ENTRE PESSOAS S.A.
                                    </option>
                                    <option value="374">374-REALIZE CR&#201;DITO, FINANCIAMENTO E INVESTIMENTO S.A.
                                    </option>
                                    <option value="376">376-BANCO J. P. MORGAN S.A. </option>
                                    <option value="377">377-MS SOCIEDADE DE CR&#201;DITO AO MICROEMPREENDEDOR E &#192; E
                                    </option>
                                    <option value="378">378-BBC LEASING S.A. – ARRENDAMENTO MERCANTIL </option>
                                    <option value="379">379-COOPERFORTE – COOPERATIVA DE ECONOMIA E CR&#201;DITO M&#218;
                                    </option>
                                    <option value="380">380-PICPAY SERVICOS S.A. </option>
                                    <option value="381">381-BANCO MERCEDES-BENZ DO BRASIL S.A. </option>
                                    <option value="382">382-FID&#218;CIA SOCIEDADE DE CR&#201;DITO AO MICROEMPREENDEDOR
                                    </option>
                                    <option value="383">383-BOLETOBANC&#193;RIO.COM TECNOLOGIA DE PAGAMENTOS LTDA.
                                    </option>
                                    <option value="384">384-GLOBAL FINAN&#199;AS SOCIEDADE DE CR&#201;DITO AO MICROEMPRE
                                    </option>
                                    <option value="387">387-BANCO TOYOTA DO BRASIL S.A. </option>
                                    <option value="389">389-BANCO MERCANTIL DO BRASIL S.A. </option>
                                    <option value="390">390-BANCO GM S.A. </option>
                                    <option value="391">391-COOPERATIVA DE CR&#201;DITO RURAL DE IBIAM – SULCREDI/I
                                    </option>
                                    <option value="393">393-BANCO VOLKSWAGEN S.A. </option>
                                    <option value="394">394-BCO BRADESCO FINANCIAMENTOS S.A </option>
                                    <option value="396">396-HUB PAGAMENTOS S.A. </option>
                                    <option value="397">397-LISTO SOCIEDADE DE CR&#201;DITO DIRETO S.A. </option>
                                    <option value="399">399-HSBC BANK BRASIL S.A. BCO. MULTIPLO</option>
                                    <option value="403">403-CORA SOCIEDADE DE CR&#201;DITO DIRETO S.A. </option>
                                    <option value="404">404-SUMUP SOCIEDADE DE CR&#201;DITO DIRETO S.A. </option>
                                    <option value="408">408-B&#212;NUSCRED SOCIEDADE DE CR&#201;DITO DIRETO S.A.
                                    </option>
                                    <option value="409">409-UNIBANCO-UNIAO BCOS BRASILEIROS S.A</option>
                                    <option value="412">412-BANCO CAPITAL S.A. </option>
                                    <option value="422">422-BANCO SAFRA S.A. </option>
                                    <option value="453">453-BANCO RURAL S.A. </option>
                                    <option value="456">456-BANCO DE TOKYO-MITSUBISHI UFJ BR S.</option>
                                    <option value="464">464-BANCO SUMITOMO MITSUI BRASILEIRO S.</option>
                                    <option value="473">473-BANCO CAIXA GERAL - BRASIL S.A. </option>
                                    <option value="477">477-CITIBANK N.A. </option>
                                    <option value="479">479-BANCO ITAUBANK S.A. </option>
                                    <option value="487">487-DEUTSCHE BANK S.A.-BANCO ALEMAO </option>
                                    <option value="488">488-JPMORGAN CHASE BANK </option>
                                    <option value="492">492-ING BANK N.V. </option>
                                    <option value="494">494-BANCO DE LA REP. OR. DEL URUGUAY </option>
                                    <option value="495">495-BANCO DE LA PROV. DE BUENOS AIRES </option>
                                    <option value="505">505-BANCO CREDIT SUISSE (BRASIL) S.A. </option>
                                    <option value="545">545-SENSO CCVM S.A. </option>
                                    <option value="600">600-BANCO LUSO BRASILEIRO S.A. </option>
                                    <option value="604">604-BANCO INDUSTRIAL DO BRASIL S.A. </option>
                                    <option value="610">610-BANCO VR S.A. </option>
                                    <option value="611">611-BANCO PAULISTA S.A. </option>
                                    <option value="612">612-BANCO GUANABARA S.A. </option>
                                    <option value="613">613-BANCO PECUNIA S.A. </option>
                                    <option value="623">623-BANCO PANAMERICANO S.A. </option>
                                    <option value="626">626-BANCO FICSA S.A. </option>
                                    <option value="630">630-BANCO INTERCAP S.A. </option>
                                    <option value="633">633-BANCO RENDIMENTO S.A. </option>
                                    <option value="634">634-BANCO TRIANGULO S.A. </option>
                                    <option value="637">637-BANCO SOFISA S.A. </option>
                                    <option value="638">638-BANCO PROSPER S.A. </option>
                                    <option value="641">641-BANCO ALVORADA S.A. </option>
                                    <option value="643">643-BANCO PINE S.A. </option>
                                    <option value="652">652-BANCO ITAU HOLDING FINANCEIRA S.A. </option>
                                    <option value="653">653-BANCO INDUSVAL S.A. </option>
                                    <option value="654">654-BANCO A.J.RENNER S.A. </option>
                                    <option value="655">655-BANCO VOTORANTIM S.A. </option>
                                    <option value="707">707-BANCO DAYCOVAL S.A. </option>
                                    <option value="712">712-BANCO OURINVEST S.A. </option>
                                    <option value="719">719-BANIF-BCO.INTERN.FUNCHAL (BR) S.A. </option>
                                    <option value="721">721-BANCO CREDIBEL S.A. </option>
                                    <option value="735">735-BANCO POTTENCIAL S.A. </option>
                                    <option value="739">739-BANCO BGN S.A. </option>
                                    <option value="740">740-BANCO BARCLAYS S.A. </option>
                                    <option value="741">741-BANCO RIBEIRAO PRETO S.A. </option>
                                    <option value="743">743-BANCO SEMEAR S.A. </option>
                                    <option value="745">745-BANCO CITIBANK S.A </option>
                                    <option value="746">746-BANCO MODAL S.A. </option>
                                    <option value="747">747-BANCO RABOBANK INTERNATIONAL BRASIL</option>
                                    <option value="748">748-BANCO COOPERATIVO SICREDI S.A. </option>
                                    <option value="749">749-BANCO SIMPLES S.A. </option>
                                    <option value="751">751-SCOTIABANK BRASIL S/A B.MULTIPLO </option>
                                    <option value="752">752-BANCO BNP PARIBAS BRASIL S.A. </option>
                                    <option value="753">753-NBC BANK BRASIL S.A.-BCO.MULTIPLO </option>
                                    <option value="754">754-BANCO SISTEMA S.A. </option>
                                    <option value="755">755-B.OF A.MERRRILL LYNCH B.MULT.S.A. </option>
                                    <option value="756">756-BANCO COOPERATIVO DO BRASIL S.A. </option>
                                    <option value="757">757-BANCO KEB DO BRASIL S.A. </option>
                                    <option value="901">901-CORRETORA SOUZA BARROS CAMB.TITULOS</option>
                                </select>
                            </div>
                        </td>
                        <td>
                            <div className="div-input">
                                <label htmlFor="">Conta 2</label>
                                <input readOnly={editar} type="text"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="div-input div-input-cep">
                                <label htmlFor="">Conta 3</label>
                                <input readOnly={editar} type="number"/>
                            </div>
                        </td>
                        <td>
                            <div className="div-input div-input-cep">
                                <label htmlFor="">Conta 3</label>
                                <input readOnly={editar} type="number"/>
                            </div>
                        </td>
                        <td>
                            <div className="div-input div-input-cnpj">
                                <label htmlFor="">Conta 3</label>
                                <select className="selectbanco" name="" id="">
                                    <option value="" selected disabled hidden></option>
                                    <option value="">.</option>
                                    <option value="001">001-BANCO DO BRASIL S.A. </option>
                                    <option value="003">003-BANCO DA AMAZONIA S.A. </option>
                                    <option value="004">004-BANCO DO NORDESTE DO BRASIL S.A. </option>
                                    <option value="007">007-BNDES (BANCO NACIONAL DO DESENVOLVIMENTO SOCIAL) </option>
                                    <option value="010">010-CREDICOAMO CR&#201;DITO RURAL COOPERATIVA </option>
                                    <option value="011">011-CREDIT SUISSE HG CORRETORA </option>
                                    <option value="012">012-BANCO INBURSA </option>
                                    <option value="013">013-SENSO CORR.CAMB.VAL.MOBILIARIOS S.A</option>
                                    <option value="014">014-NATIXIS BRASIL S.A. - BCO. MULTIPLO</option>
                                    <option value="015">015-LINK S.A CORR.CAMBIO, TIT E VALS MO</option>
                                    <option value="016">016-COOPERATIVA DE CR&#201;DITO M&#218;TUO DOS DESPACHANTES DE T
                                    </option>
                                    <option value="017">017-BNY MELLON BANCO S.A. </option>
                                    <option value="018">018-BANCO TRICURY S.A. </option>
                                    <option value="019">019-BANCO AZTECA DO BRASIL S.A </option>
                                    <option value="021">021-BANESTES S.A. BCO.EST.ESPIRITO SANT</option>
                                    <option value="024">024-BANCO BANDEPE S.A. </option>
                                    <option value="025">025-BANCO ALFA S.A. </option>
                                    <option value="027">027-BANCO DO EST. DE SANTA CATARINA S.A</option>
                                    <option value="029">029-BANCO ITA&#218; CONSIGNADO S.A. </option>
                                    <option value="033">033-BANCO SANTANDER (BRASIL) S.A. </option>
                                    <option value="036">036-BANCO BRADESCO BBI S.A. </option>
                                    <option value="037">037-BANCO DO EST. DO PARA S.A. </option>
                                    <option value="040">040-BANCO CARGILL S.A. </option>
                                    <option value="041">041-BCO.EST.R.GRANDE DO SUL S.A. </option>
                                    <option value="044">044-BANCO BVA S.A </option>
                                    <option value="045">045-BANCO OPPORTUNITY S.A </option>
                                    <option value="047">047-BANCO DO EST. DE SERGIPE S.A. </option>
                                    <option value="060">060-CONFIDENCE CORRETORA DE C MBIO S.A.</option>
                                    <option value="062">062-HIPERCARD BANCO MULTIPLO S.A. </option>
                                    <option value="063">063-BANCO IBI S.A.- BANCO MULTIPLO </option>
                                    <option value="064">064-GOLDMAN SACHS DO BRASIL BM S.A. </option>
                                    <option value="065">065-BANCO BRACCE S.A. </option>
                                    <option value="066">066-BANCO MORGAN STANLEY S.A. </option>
                                    <option value="069">069-BPN BRASIL BANCO MULTIPLO S.A. </option>
                                    <option value="070">070-BRB-BANCO DE BRASILIA S.A. </option>
                                    <option value="072">072-BANCO RURAL MAIS S.A. </option>
                                    <option value="074">074-BANCO J. SAFRA S.A. </option>
                                    <option value="075">075-BANCO CR2 S.A. </option>
                                    <option value="076">076-BANCO KDB DO BRASIL S.A. </option>
                                    <option value="077">077-BANCO INTERMEDIUM S.A. </option>
                                    <option value="078">078-BES INVEST. DO BRASIL S.A.-BCO.INVE</option>
                                    <option value="079">079-JBS BANCO S.A. </option>
                                    <option value="080">080-B&amp;T ASSOCIADOS CORRETORA DE CAMBIO </option>
                                    <option value="081">081-BBN BANCO BRASILEIRO DE NEGOCIOS </option>
                                    <option value="082">082-BANCO TOPAZIO S.A. </option>
                                    <option value="083">083-BANCO DA CHINA BRASIL S.A </option>
                                    <option value="084">084-UNICRED NORTE DO PARANA-COOPERATIVA</option>
                                    <option value="085">085-COOP CENTRAL CRED URBANO-CC CECRED </option>
                                    <option value="087">087-CC UNICRED CENTRAL SANTA CATARINA </option>
                                    <option value="088">088-BANCO RANDON S.A. </option>
                                    <option value="089">089-COOP DE CRED.RURAL DA REG DA MOGIAN</option>
                                    <option value="090">090-COOP.CENTRAL DE CRED.DO EST.SAO PAU</option>
                                    <option value="091">091-UNICRED CENTRAL RS-C.C.EC CRED </option>
                                    <option value="092">092-BRICKELL S.A. CRED.FINC.INVESTIMENT</option>
                                    <option value="093">093-POLOCRED SOC.CRED.MICROEMP.EMP.LTDA</option>
                                    <option value="094">094-BANCO PETRA S.A </option>
                                    <option value="095">095-BANCO CONFIDENCE DE CAMBIO S.A. </option>
                                    <option value="096">096-BANCO BM&amp;F SERV.LIQ.E CUSTODIA S.A.</option>
                                    <option value="097">097-COOP.C.CRED.NOROESTE BRAS.LTDA </option>
                                    <option value="098">098-CREDIALIANCA COOP CRED RURAL </option>
                                    <option value="099">099-COOP CENT.EC.CR.MUTUO UNICREDS PR/M</option>
                                    <option value="100">100-PLANNER CORRET.DE VALORES S.A </option>
                                    <option value="101">101-RENANSCENCA DIST.TIT.VAL.MOB.LTDA </option>
                                    <option value="102">102-XP INVEST.CORR.CAMB.VLS MOB.S.A. </option>
                                    <option value="103">103-EBS CAPITAL CORRETORA DE CAMBIO S.A</option>
                                    <option value="104">104-CAIXA ECONOMICA FEDERAL </option>
                                    <option value="105">105-LECCA CFI S.A. </option>
                                    <option value="107">107-BANCO BBM S.A. </option>
                                    <option value="108">108-PORTOCRED S.A CRED.FINANC E INVEST.</option>
                                    <option value="111">111-OLIVEIRA TRUST DIST TIT.VAL.MOBILIA</option>
                                    <option value="112">112-CENT COOP CRED BRASIL CENTRAL </option>
                                    <option value="113">113-MAGLIANO S.A COR.CAMB.VLS MOBLS. </option>
                                    <option value="114">114-CENTRAL COOP.EC.CR.MUTUO ESP.STO </option>
                                    <option value="115">115-ROTULA S/A CRED FINANC INVEST </option>
                                    <option value="117">117-ADVANCED CORRET.CAMBIO LTDA </option>
                                    <option value="118">118-STANDARD C.BANK BRASIL S.A. BI </option>
                                    <option value="119">119-BANCO WESTERN UNION DO BRASIL S.A </option>
                                    <option value="120">120-BANCO RODOBENS S.A. </option>
                                    <option value="121">121-BANCO AGIBANK S.A. </option>
                                    <option value="122">122-BANCO BERJ S.A. </option>
                                    <option value="124">124-BANCO WOORI BANK DO BRASIL S.A. </option>
                                    <option value="125">125-BRASIL PLURAL S.A BANCO </option>
                                    <option value="126">126-BR PARTNERS BANCO DE INVESTIMENTO S.A. </option>
                                    <option value="127">127-CODEPE CVC S.A. </option>
                                    <option value="128">128-MS BANK S.A BANCO DE C&#194;MBIO </option>
                                    <option value="129">129-UBS BRASIL BI S.A. </option>
                                    <option value="130">130-CARUANA SCFI </option>
                                    <option value="131">131-TULLETT PREBON BRASIL CVC LTDA </option>
                                    <option value="132">132-ICBC DO BRASIL BM S.A. </option>
                                    <option value="133">133-CRESOL CONFEDERA&#199;&#195;O </option>
                                    <option value="134">134-BGC LIQUIDEZ DTVM LTDA </option>
                                    <option value="136">136-UNICRED COOPERATIVA LTDA </option>
                                    <option value="137">137-MULTIMONEY CC LTDA </option>
                                    <option value="138">138-GET MONEY CC LTDA </option>
                                    <option value="139">139-INTESA SANPAOLO BRASIL S.A. </option>
                                    <option value="140">140-EASYNVEST – T&#205;TULO CV S.A. </option>
                                    <option value="142">142-BROKER BRASIL CC LTDA </option>
                                    <option value="143">143-TREVISO CC S.A. </option>
                                    <option value="144">144-BEXS BANCO DE CAMBIO S.A. </option>
                                    <option value="145">145-LEVYCAM CCV LTDA </option>
                                    <option value="146">146-GUITTA CC LTDA </option>
                                    <option value="149">149-FACTA S.A. CFI </option>
                                    <option value="151">151-BANCO NOSSA CAIXA S.A. </option>
                                    <option value="157">157-ICAP DO BRASIL CTVM LTDA </option>
                                    <option value="159">159-CASA DO CR&#201;DITO S.A. </option>
                                    <option value="163">163-COMMERZBANK BRASIL S.A BANCO M&#218;LTIPLO </option>
                                    <option value="169">169-BANCO OL&#201; BONSUCESSO CONSIGNADO S.A. </option>
                                    <option value="172">172-ALBATROSS CCV S.A. </option>
                                    <option value="173">173-BRL TRUST DTVM SA </option>
                                    <option value="174">174-PEFISA S.A. – CR&#201;DITO, FINANCIAMENTO E INVESTIMENT
                                    </option>
                                    <option value="177">177-GUIDE INVESTIMENTOS S.A. CORRETORA DE VALORES </option>
                                    <option value="180">180-CM CAPITAL MARKETS CCTVM LTDA </option>
                                    <option value="182">182-DACASA FINANCEIRA S/A </option>
                                    <option value="183">183-SOCRED S.A. </option>
                                    <option value="184">184-BANCO ITAU BBA S.A. </option>
                                    <option value="188">188-ATIVA S.A INVESTIMENTOS </option>
                                    <option value="189">189-HS FINANCEIRA </option>
                                    <option value="190">190-SERVICOOP </option>
                                    <option value="191">191-NOVA FUTURA CTVM LTDA </option>
                                    <option value="194">194-PARMETAL DTVM LTDA </option>
                                    <option value="196">196-BANCO FAIR CC S.A. </option>
                                    <option value="197">197-STONE PAGAMENTOS S.A. </option>
                                    <option value="204">204-BANCO BRADESCO CARTOES S.A. </option>
                                    <option value="208">208-BANCO BTG PACTUAL S.A. </option>
                                    <option value="212">212-BANCO MATONE S.A. </option>
                                    <option value="213">213-BANCO ARBI S.A. </option>
                                    <option value="214">214-BANCO DIBENS S.A. </option>
                                    <option value="217">217-BANCO JOHN DEERE S.A. </option>
                                    <option value="218">218-BANCO BONSUCESSO S.A. </option>
                                    <option value="222">222-BANCO CREDIT AGRICOLE BRASIL S.A. </option>
                                    <option value="224">224-BANCO FIBRA S.A. </option>
                                    <option value="225">225-BANCO BRASCAN S.A. </option>
                                    <option value="229">229-BANCO CRUZEIRO DO SUL S.A. </option>
                                    <option value="230">230-UNICARD BANCO MULTIPLO S.A. </option>
                                    <option value="233">233-BANCO CIFRA S.A </option>
                                    <option value="237">237-BANCO BRADESCO S.A. </option>
                                    <option value="241">241-BANCO CLASSICO S.A. </option>
                                    <option value="243">243-BANCO MAXIMA S.A. </option>
                                    <option value="246">246-BANCO ABC-BRASIL S.A. </option>
                                    <option value="248">248-BANCO BOAVISTA INTERATLANTICO S.A. </option>
                                    <option value="249">249-BANCO INVESTCRED UNIBANCO S.A. </option>
                                    <option value="250">250-BANCO SCHAHIN S.A. </option>
                                    <option value="253">253-BEXS CC S.A. </option>
                                    <option value="254">254-PARANA BANCO S.A. </option>
                                    <option value="259">259-MONEYCORP BANCO DE C&#194;MBIO S.A. </option>
                                    <option value="260">260-NU PAGAMENTOS S.A (NUBANK) </option>
                                    <option value="263">263-BANCO CACIQUE S.A. </option>
                                    <option value="265">265-BANCO FATOR S.A. </option>
                                    <option value="266">266-BANCO CEDULA S.A. </option>
                                    <option value="268">268-BARIGUI COMPANHIA HIPOTEC&#193;RIA </option>
                                    <option value="269">269-HSBC BANCO DE INVESTIMENTO </option>
                                    <option value="270">270-SAGITUR CC LTDA </option>
                                    <option value="271">271-IB CCTVM LTDA </option>
                                    <option value="272">272-AGK CORRETORA DE C&#194;MBIO S.A. </option>
                                    <option value="273">273-CCR DE S&#195;O MIGUEL DO OESTE </option>
                                    <option value="274">274-MONEY PLUS SOCIEDADE DE CR&#201;DITO AO MICROEMPREENDED
                                    </option>
                                    <option value="276">276-SENFF S.A. </option>
                                    <option value="278">278-GENIAL INVESTIMENTOS CVM S.A. </option>
                                    <option value="279">279-CCR DE PRIMAVERA DO LESTE </option>
                                    <option value="280">280-AVISTA S.A. </option>
                                    <option value="281">281-COOPERATIVA DE CR&#201;DITO RURAL COOPAVEL </option>
                                    <option value="283">283-RB CAPITAL INVESTIMENTOS DTVM LTDA </option>
                                    <option value="285">285-FRENTE CC LTDA </option>
                                    <option value="286">286-COOPERATIVA DE CR&#201;DITO RURAL DE DE OURO </option>
                                    <option value="288">288-CAROL DTVM LTDA </option>
                                    <option value="289">289-DECYSEO CORRETORA DE CAMBIO LTDA. </option>
                                    <option value="290">290-PAGSEGURO INTERNET S.A. </option>
                                    <option value="292">292-BS2 DISTRIBUIDORA DE T&#205;TULOS E INVESTIMENTOS </option>
                                    <option value="293">293-LASTRO RDV DTVM LTDA </option>
                                    <option value="296">296-VISION S.A. CORRETORA DE CAMBIO </option>
                                    <option value="298">298-VIP’S CC LTDA </option>
                                    <option value="299">299-SOROCRED&#160;&#160; CR&#201;DITO, FINANCIAMENTO E
                                        INVESTIMENTO S</option>
                                    <option value="300">300-BANCO DE LA NACION ARGENTINA </option>
                                    <option value="301">301-BPP INSTITUI&#199;&#195;O DE PAGAMENTOS S.A. </option>
                                    <option value="306">306-PORTOPAR DISTRIBUIDORA DE TITULOS E VALORES MOBILI</option>
                                    <option value="307">307-TERRA INVESTIMENTOS DISTRIBUIDORA DE T&#205;TULOS E VAL
                                    </option>
                                    <option value="309">309-CAMBIONET CORRETORA DE C&#194;MBIO LTDA. </option>
                                    <option value="310">310-VORTX DTVM LTDA </option>
                                    <option value="313">313-AMAZ&#212;NIA CORRETORA DE C&#194;MBIO LTDA. </option>
                                    <option value="315">315-PI DISTRIBUIDORA DE T&#205;TULOS E VALORES MOBILI&#193;RIOS
                                    </option>
                                    <option value="318">318-BANCO BMG S.A </option>
                                    <option value="319">319-OM DISTRIBUIDORA DE T&#205;TULOS E VALORES MOBILI&#193;RIOS
                                    </option>
                                    <option value="320">320-BANCO INDUSTRIAL E COMERCIAL S.A. </option>
                                    <option value="321">321-CREFAZ SOCIEDADE DE CR&#201;DITO AO MICROEMPREENDEDOR E
                                    </option>
                                    <option value="322">322-COOPERATIVA DE CR&#201;DITO RURAL DE ABELARDO LUZ – SUL
                                    </option>
                                    <option value="323">323-MERCADO PAGO – CONTA DO MERCADO LIVRE </option>
                                    <option value="324">324-CARTOS SOCIEDADE DE CR&#201;DITO DIRETO S.A. </option>
                                    <option value="325">325-&#211;RAMA DISTRIBUIDORA DE T&#205;TULOS E VALORES
                                        MOBILI&#193;RI</option>
                                    <option value="326">326-PARATI – CR&#201;DITO, FINANCIAMENTO E INVESTIMENTO S.A
                                    </option>
                                    <option value="329">329-QI SOCIEDADE DE CR&#201;DITO DIRETO S.A. </option>
                                    <option value="330">330-BANCO BARI DE INVESTIMENTOS E FINANCIAMENTOS S.A. </option>
                                    <option value="331">331-FRAM CAPITAL DISTRIBUIDORA DE T&#205;TULOS E VALORES MO
                                    </option>
                                    <option value="332">332-ACESSO SOLU&#199;&#213;ES DE PAGAMENTO S.A. </option>
                                    <option value="335">335-BANCO DIGIO S.A. </option>
                                    <option value="336">336-BANCO C6 S.A – C6 BANK </option>
                                    <option value="340">340-SUPER PAGAMENTOS S/A (SUPERDITAL) </option>
                                    <option value="341">341-ITAU UNIBANCO S.A. </option>
                                    <option value="342">342-CREDITAS SOCIEDADE DE CR&#201;DITO DIRETO S.A. </option>
                                    <option value="343">343-FFA SOCIEDADE DE CR&#201;DITO AO MICROEMPREENDEDOR E &#192;
                                    </option>
                                    <option value="347">347-BANCO SUDAMERIS BRASIL S.A. </option>
                                    <option value="348">348-BANCO XP S/A </option>
                                    <option value="349">349-AL5 S.A. CR&#201;DITO, FINANCIAMENTO E INVESTIMENTO
                                    </option>
                                    <option value="350">350-COOPERATIVA DE CR&#201;DITO RURAL DE PEQUENOS AGRICULTO
                                    </option>
                                    <option value="352">352-TORO CORRETORA DE T&#205;TULOS E VALORES MOBILI&#193;RIOS LT
                                    </option>
                                    <option value="354">354-NECTON INVESTIMENTOS S.A. CORRETORA DE VALORES MOB</option>
                                    <option value="355">355-&#211;TIMO SOCIEDADE DE CR&#201;DITO DIRETO S.A. </option>
                                    <option value="356">356-BANCO ABN AMRO REAL S.A. </option>
                                    <option value="359">359-ZEMA CR&#201;DITO, FINANCIAMENTO E INVESTIMENTO S/A
                                    </option>
                                    <option value="360">360-TRINUS CAPITAL DISTRIBUIDORA DE T&#205;TULOS E VALORES
                                    </option>
                                    <option value="362">362-CIELO S.A. </option>
                                    <option value="363">363-SOCOPA SOCIEDADE CORRETORA PAULISTA S.A. </option>
                                    <option value="364">364-GERENCIANET S.A. </option>
                                    <option value="365">365-SOLIDUS S.A. CORRETORA DE CAMBIO E VALORES MOBILIA</option>
                                    <option value="366">366-BANCO SOCIETE GENERALE BRASIL S.A. </option>
                                    <option value="367">367-VITREO DISTRIBUIDORA DE T&#205;TULOS E VALORES MOBILI&#193;R
                                    </option>
                                    <option value="368">368-BANCO CSF S.A. </option>
                                    <option value="370">370-BANCO WESTLB DO BRASIL S.A. </option>
                                    <option value="371">371-WARREN CORRETORA DE VALORES MOBILI&#193;RIOS E C&#194;MBIO L
                                    </option>
                                    <option value="373">373-UP.P SOCIEDADE DE EMPR&#201;STIMO ENTRE PESSOAS S.A.
                                    </option>
                                    <option value="374">374-REALIZE CR&#201;DITO, FINANCIAMENTO E INVESTIMENTO S.A.
                                    </option>
                                    <option value="376">376-BANCO J. P. MORGAN S.A. </option>
                                    <option value="377">377-MS SOCIEDADE DE CR&#201;DITO AO MICROEMPREENDEDOR E &#192; E
                                    </option>
                                    <option value="378">378-BBC LEASING S.A. – ARRENDAMENTO MERCANTIL </option>
                                    <option value="379">379-COOPERFORTE – COOPERATIVA DE ECONOMIA E CR&#201;DITO M&#218;
                                    </option>
                                    <option value="380">380-PICPAY SERVICOS S.A. </option>
                                    <option value="381">381-BANCO MERCEDES-BENZ DO BRASIL S.A. </option>
                                    <option value="382">382-FID&#218;CIA SOCIEDADE DE CR&#201;DITO AO MICROEMPREENDEDOR
                                    </option>
                                    <option value="383">383-BOLETOBANC&#193;RIO.COM TECNOLOGIA DE PAGAMENTOS LTDA.
                                    </option>
                                    <option value="384">384-GLOBAL FINAN&#199;AS SOCIEDADE DE CR&#201;DITO AO MICROEMPRE
                                    </option>
                                    <option value="387">387-BANCO TOYOTA DO BRASIL S.A. </option>
                                    <option value="389">389-BANCO MERCANTIL DO BRASIL S.A. </option>
                                    <option value="390">390-BANCO GM S.A. </option>
                                    <option value="391">391-COOPERATIVA DE CR&#201;DITO RURAL DE IBIAM – SULCREDI/I
                                    </option>
                                    <option value="393">393-BANCO VOLKSWAGEN S.A. </option>
                                    <option value="394">394-BCO BRADESCO FINANCIAMENTOS S.A </option>
                                    <option value="396">396-HUB PAGAMENTOS S.A. </option>
                                    <option value="397">397-LISTO SOCIEDADE DE CR&#201;DITO DIRETO S.A. </option>
                                    <option value="399">399-HSBC BANK BRASIL S.A. BCO. MULTIPLO</option>
                                    <option value="403">403-CORA SOCIEDADE DE CR&#201;DITO DIRETO S.A. </option>
                                    <option value="404">404-SUMUP SOCIEDADE DE CR&#201;DITO DIRETO S.A. </option>
                                    <option value="408">408-B&#212;NUSCRED SOCIEDADE DE CR&#201;DITO DIRETO S.A.
                                    </option>
                                    <option value="409">409-UNIBANCO-UNIAO BCOS BRASILEIROS S.A</option>
                                    <option value="412">412-BANCO CAPITAL S.A. </option>
                                    <option value="422">422-BANCO SAFRA S.A. </option>
                                    <option value="453">453-BANCO RURAL S.A. </option>
                                    <option value="456">456-BANCO DE TOKYO-MITSUBISHI UFJ BR S.</option>
                                    <option value="464">464-BANCO SUMITOMO MITSUI BRASILEIRO S.</option>
                                    <option value="473">473-BANCO CAIXA GERAL - BRASIL S.A. </option>
                                    <option value="477">477-CITIBANK N.A. </option>
                                    <option value="479">479-BANCO ITAUBANK S.A. </option>
                                    <option value="487">487-DEUTSCHE BANK S.A.-BANCO ALEMAO </option>
                                    <option value="488">488-JPMORGAN CHASE BANK </option>
                                    <option value="492">492-ING BANK N.V. </option>
                                    <option value="494">494-BANCO DE LA REP. OR. DEL URUGUAY </option>
                                    <option value="495">495-BANCO DE LA PROV. DE BUENOS AIRES </option>
                                    <option value="505">505-BANCO CREDIT SUISSE (BRASIL) S.A. </option>
                                    <option value="545">545-SENSO CCVM S.A. </option>
                                    <option value="600">600-BANCO LUSO BRASILEIRO S.A. </option>
                                    <option value="604">604-BANCO INDUSTRIAL DO BRASIL S.A. </option>
                                    <option value="610">610-BANCO VR S.A. </option>
                                    <option value="611">611-BANCO PAULISTA S.A. </option>
                                    <option value="612">612-BANCO GUANABARA S.A. </option>
                                    <option value="613">613-BANCO PECUNIA S.A. </option>
                                    <option value="623">623-BANCO PANAMERICANO S.A. </option>
                                    <option value="626">626-BANCO FICSA S.A. </option>
                                    <option value="630">630-BANCO INTERCAP S.A. </option>
                                    <option value="633">633-BANCO RENDIMENTO S.A. </option>
                                    <option value="634">634-BANCO TRIANGULO S.A. </option>
                                    <option value="637">637-BANCO SOFISA S.A. </option>
                                    <option value="638">638-BANCO PROSPER S.A. </option>
                                    <option value="641">641-BANCO ALVORADA S.A. </option>
                                    <option value="643">643-BANCO PINE S.A. </option>
                                    <option value="652">652-BANCO ITAU HOLDING FINANCEIRA S.A. </option>
                                    <option value="653">653-BANCO INDUSVAL S.A. </option>
                                    <option value="654">654-BANCO A.J.RENNER S.A. </option>
                                    <option value="655">655-BANCO VOTORANTIM S.A. </option>
                                    <option value="707">707-BANCO DAYCOVAL S.A. </option>
                                    <option value="712">712-BANCO OURINVEST S.A. </option>
                                    <option value="719">719-BANIF-BCO.INTERN.FUNCHAL (BR) S.A. </option>
                                    <option value="721">721-BANCO CREDIBEL S.A. </option>
                                    <option value="735">735-BANCO POTTENCIAL S.A. </option>
                                    <option value="739">739-BANCO BGN S.A. </option>
                                    <option value="740">740-BANCO BARCLAYS S.A. </option>
                                    <option value="741">741-BANCO RIBEIRAO PRETO S.A. </option>
                                    <option value="743">743-BANCO SEMEAR S.A. </option>
                                    <option value="745">745-BANCO CITIBANK S.A </option>
                                    <option value="746">746-BANCO MODAL S.A. </option>
                                    <option value="747">747-BANCO RABOBANK INTERNATIONAL BRASIL</option>
                                    <option value="748">748-BANCO COOPERATIVO SICREDI S.A. </option>
                                    <option value="749">749-BANCO SIMPLES S.A. </option>
                                    <option value="751">751-SCOTIABANK BRASIL S/A B.MULTIPLO </option>
                                    <option value="752">752-BANCO BNP PARIBAS BRASIL S.A. </option>
                                    <option value="753">753-NBC BANK BRASIL S.A.-BCO.MULTIPLO </option>
                                    <option value="754">754-BANCO SISTEMA S.A. </option>
                                    <option value="755">755-B.OF A.MERRRILL LYNCH B.MULT.S.A. </option>
                                    <option value="756">756-BANCO COOPERATIVO DO BRASIL S.A. </option>
                                    <option value="757">757-BANCO KEB DO BRASIL S.A. </option>
                                    <option value="901">901-CORRETORA SOUZA BARROS CAMB.TITULOS</option>
                                </select>
                            </div>
                        </td>
                        <td>
                            <div className="div-input">
                                <label htmlFor="">Conta 3</label>
                                <input readOnly={editar} type="text"/>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="texthr">
                <h2>Código nas Seguradoras</h2>
                <hr/>
            </div>
            <div className="div-overflow-table">
                <table className="table-cc">
                    <tr>
                        <th>Seguradora</th>
                        <th>Incêndio</th>
                        <th>Fiança</th>
                    </tr>
                    <tr>
                        <td>Porto Seguro</td>
                        <td>
                            <div className="div-input div-input-number">
                                <label htmlFor=""><img src={fogo} alt="incendio"/></label>
                                <input readOnly={editar} type="number" placeholder="Digite o código."/>
                            </div>
                        </td>
                        <td>
                            <div className="div-input div-input-number">
                                <label htmlFor=""><img src={casa} alt="fiança"/></label>
                                <input readOnly={editar} type="number" placeholder="Digite o código."/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Tokio Marine</td>
                        <td>
                            <div className="div-input div-input-number">
                                <label htmlFor=""><img src={fogo} alt="incendio"/></label>
                                <input readOnly={editar} type="number" placeholder="Digite o código."/>
                            </div>
                        </td>
                        <td>
                            <div className="div-input div-input-number">
                                <label htmlFor=""><img src={casa} alt="fiança"/></label>
                                <input readOnly={editar} type="number" placeholder="Digite o código."/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Liberty</td>
                        <td>
                            <div className="div-input div-input-number">
                                <label htmlFor=""><img src={fogo} alt="incendio"/></label>
                                <input readOnly={editar} type="number" placeholder="Digite o código."/>
                            </div>
                        </td>
                        <td>
                            <div className="div-input div-input-number">
                                <label htmlFor=""><img src={casa} alt="fiança"/></label>
                                <input readOnly={editar} type="number" placeholder="Digite o código."/>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="texthr">
                <h2>Configurações de Cotação</h2>
                <hr/>
            </div>

            <div className="div-overflow-table">
                <table className="table-cc">
                    <tr>
                        <th>Produto</th>
                        <th>Seguradora</th>
                        <th>Comissão corretor<span style={{fontSize:"12px"}}>(%)</span></th>
                        <th>Pró-labore imobiliária<span style={{fontSize:"12px"}}>(%)</span></th>
                    </tr>
                    <tr>
                        <td>Incêndio</td>
                        <td>
                            <div className="div-input div-input-number">
                                <label htmlFor=""><img src={fogo} alt="incendio"/></label>
                               
                                <select name="" id="">
                                    <option value="" selected hidden>Porto Seguro</option>
                                    <option value="">Pottencial</option>
                                    <option value="">Tokio Marine</option>
                                    <option value="">Too Seguros</option>
                                </select>
                            </div>
                        </td>
                        <td>
                            <div className="div-input div-input-number">
                                <label htmlFor=""><img src={casa} alt="fiança"/></label>
                                <input readOnly={editar} type="number" placeholder="Digite o código."/>
                            </div>
                        </td>
                        <td>
                            <div className="div-input div-input-number">
                                <label htmlFor=""><img src={casa} alt="fiança"/></label>
                                <input readOnly={editar} type="number" placeholder="Digite o código."/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Fiança</td>
                        <td>
                            <div className="div-input div-input-number">
                                <label htmlFor=""><img src={casa} alt="incendio"/></label>
                                <select name="" id="">
                                    <option value="" selected hidden>Multianálise</option>
                                    <option value="">Porto Seguro</option>
                                    <option value="">Pottencial</option>
                                    <option value="">Tokio Marine</option>
                                    <option value="">Too Seguros</option>
                                </select>
                            </div>
                        </td>
                        <td>
                            <div className="div-input div-input-number">
                                <label htmlFor=""><img src={casa} alt="fiança"/></label>
                                <input readOnly={editar} type="number" placeholder="Digite o código."/>
                            </div>
                        </td>
                        <td>
                            <div className="div-input div-input-number">
                                <label htmlFor=""><img src={dinheiro} alt="fiança"/></label>
                                <input readOnly={editar} type="number" placeholder="Digite o código."/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Capitalização</td>
                        <td>
                            <div className="div-input div-input-number">
                                <label htmlFor=""><img src={dinheiro} alt="incendio"/></label>
                                <select name="" id="">
                                    <option value="" selected hidden disabled></option>
                                    <option value="">Porto Seguro</option>
                                    <option value="">Pottencial</option>
                                    <option value="">Tokio Marine</option>
                                    <option value="">Brasilcap</option>
                                </select>
                            </div>
                        </td>
                        <td>
                            <div className="div-input div-input-number">
                                <label htmlFor=""><img src={casa} alt="fiança"/></label>
                                <input readOnly={editar} type="number" placeholder="Digite o código."/>
                            </div>
                        </td>
                    </tr>
                </table>

            </div>
        </form>


    

       
    </>
}
export default NovaImobiliaria;