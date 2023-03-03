const bancos = [
    {
    "value": "001",
    "label": "001 - Banco do Brasil S.A."
    },
    {
    "value": "003",
    "label": "003 - Banco da Amazônia S.A."
    },
    {
    "value": "004",
    "label": "004 - Banco do Nordeste do Brasil S.A."
    },
    {
    "value": "007",
    "label": "007 - Banco Nacional de Desenvolvimento Econômico e Social BNDES"
    },
    {
    "value": "010",
    "label": "010 - Credicoamo Crédito Rural Cooperativa"
    },
    {
    "value": "011",
    "label": "011 - Credit Suisse Hedging-Griffo Corretora de Valores S.A."
    },
    {
    "value": "012",
    "label": "012 - Banco Inbursa S.A."
    },
    {
    "value": "014",
    "label": "014 - Natixis Brasil S.A. Banco Múltiplo"
    },
    {
    "value": "015",
    "label": "015 - UBS Brasil Corretora de Câmbio, Títulos e Valores Mobiliários S.A."
    },
    {
    "value": "016",
    "label": "016 - Coop de Créd. Mútuo dos Despachantes de Trânsito de SC e Rio Grande do Sul"
    },
    {
    "value": "017",
    "label": "017 - BNY Mellon Banco S.A."
    },
    {
    "value": "018",
    "label": "018 - Banco Tricury S.A."
    },
    {
    "value": "021",
    "label": "021 - Banestes S.A. Banco do Estado do Espírito Santo"
    },
    {
    "value": "024",
    "label": "024 - Banco Bandepe S.A."
    },
    {
    "value": "025",
    "label": "025 - Banco Alfa S.A."
    },
    {
    "value": "029",
    "label": "029 - Banco Itaú Consignado S.A."
    },
    {
    "value": "033",
    "label": "033 - Banco Santander (Brasil) S. A."
    },
    {
    "value": "036",
    "label": "036 - Banco Bradesco BBI S.A."
    },
    {
    "value": "037",
    "label": "037 - Banco do Estado do Pará S.A."
    },
    {
    "value": "040",
    "label": "040 - Banco Cargill S.A."
    },
    {
    "value": "041",
    "label": "041 - Banco do Estado do Rio Grande do Sul S.A."
    },
    {
    "value": "047",
    "label": "047 - Banco do Estado de Sergipe S.A."
    },
    {
    "value": "060",
    "label": "060 - Confidence Corretora de Câmbio S.A."
    },
    {
    "value": "062",
    "label": "062 - Hipercard Banco Múltiplo S.A."
    },
    {
    "value": "063",
    "label": "063 - Banco Bradescard S.A."
    },
    {
    "value": "064",
    "label": "064 - Goldman Sachs do Brasil  Banco Múltiplo S. A."
    },
    {
    "value": "065",
    "label": "065 - Banco AndBank (Brasil) S.A."
    },
    {
    "value": "066",
    "label": "066 - Banco Morgan Stanley S. A."
    },
    {
    "value": "069",
    "label": "069 - Banco Crefisa S.A."
    },
    {
    "value": "070",
    "label": "070 - Banco de Brasília S.A."
    },
    {
    "value": "074",
    "label": "074 - Banco J. Safra S.A."
    },
    {
    "value": "075",
    "label": "075 - Banco ABN Amro S.A."
    },
    {
    "value": "076",
    "label": "076 - Banco KDB do Brasil S.A."
    },
    {
    "value": "077",
    "label": "077 - Banco Inter S.A."
    },
    {
    "value": "078",
    "label": "078 - Haitong Banco de Investimento do Brasil S.A."
    },
    {
    "value": "079",
    "label": "079 - Banco Original do Agronegócio S.A."
    },
    {
    "value": "080",
    "label": "080 - BT Corretora de Câmbio Ltda."
    },
    {
    "value": "081",
    "label": "081 - BBN Banco Brasileiro de Negocios S.A."
    },
    {
    "value": "082",
    "label": "082 - Banco Topazio S.A."
    },
    {
    "value": "083",
    "label": "083 - Banco da China Brasil S.A."
    },
    {
    "value": "084",
    "label": "084 - Uniprime Norte do Paraná - Cooperativa de Crédito Ltda."
    },
    {
    "value": "085",
    "label": "085 - Cooperativa Central de Crédito Urbano - Cecred"
    },
    {
    "value": "089",
    "label": "089 - Cooperativa de Crédito Rural da Região da Mogiana"
    },
    {
    "value": "091",
    "label": "091 - Central de Cooperativas de Economia e Crédito Mútuo do Est RS - Unicred"
    },
    {
    "value": "092",
    "label": "092 - BRK S.A. Crédito, Financiamento e Investimento"
    },
    {
    "value": "093",
    "label": "093 - Pólocred Sociedade de Crédito ao Microempreendedor e à Empresa de Pequeno Porte"
    },
    {
    "value": "094",
    "label": "094 - Banco Finaxis S.A."
    },
    {
    "value": "095",
    "label": "095 - Banco Confidence de Câmbio S.A."
    },
    {
    "value": "096",
    "label": "096 - Banco BMFBovespa de Serviços de Liquidação e Custódia S/A"
    },
    {
    "value": "097",
    "label": "097 - Cooperativa Central de Crédito Noroeste Brasileiro Ltda - CentralCredi"
    },
    {
    "value": "098",
    "label": "098 - Credialiança Cooperativa de Crédito Rural"
    },
    {
    "value": "099",
    "label": "099 - Uniprime Central – Central Interestadual de Cooperativas de Crédito Ltda."
    },
    {
    "value": "100",
    "label": "100 - Planner Corretora de Valores S.A."
    },
    {
    "value": "101",
    "label": "101 - Renascença Distribuidora de Títulos e Valores Mobiliários Ltda."
    },
    {
    "value": "102",
    "label": "102 - XP Investimentos Corretora de Câmbio Títulos e Valores Mobiliários S.A."
    },
    {
    "value": "104",
    "label": "104 - Caixa Econômica Federal"
    },
    {
    "value": "105",
    "label": "105 - Lecca Crédito, Financiamento e Investimento S/A"
    },
    {
    "value": "107",
    "label": "107 - Banco Bocom BBM S.A."
    },
    {
    "value": "108",
    "label": "108 - PortoCred S.A. Crédito, Financiamento e Investimento"
    },
    {
    "value": "111",
    "label": "111 - Oliveira Trust Distribuidora de Títulos e Valores Mobiliários S.A."
    },
    {
    "value": "113",
    "label": "113 - Magliano S.A. Corretora de Cambio e Valores Mobiliarios"
    },
    {
    "value": "114",
    "label": "114 - Central Cooperativa de Crédito no Estado do Espírito Santo - CECOOP"
    },
    {
    "value": "117",
    "label": "117 - Advanced Corretora de Câmbio Ltda."
    },
    {
    "value": "118",
    "label": "118 - Standard Chartered Bank (Brasil) S.A. Banco de Investimento"
    },
    {
    "value": "119",
    "label": "119 - Banco Western Union do Brasil S.A."
    },
    {
    "value": "120",
    "label": "120 - Banco Rodobens SA"
    },
    {
    "value": "121",
    "label": "121 - Banco Agibank S.A."
    },
    {
    "value": "122",
    "label": "122 - Banco Bradesco BERJ S.A."
    },
    {
    "value": "124",
    "label": "124 - Banco Woori Bank do Brasil S.A."
    },
    {
    "value": "125",
    "label": "125 - Brasil Plural S.A. Banco Múltiplo"
    },
    {
    "value": "126",
    "label": "126 - BR Partners Banco de Investimento S.A."
    },
    {
    "value": "127",
    "label": "127 - Codepe Corretora de Valores e Câmbio S.A."
    },
    {
    "value": "128",
    "label": "128 - MS Bank S.A. Banco de Câmbio"
    },
    {
    "value": "129",
    "label": "129 - UBS Brasil Banco de Investimento S.A."
    },
    {
    "value": "130",
    "label": "130 - Caruana S.A. Sociedade de Crédito, Financiamento e Investimento"
    },
    {
    "value": "131",
    "label": "131 - Tullett Prebon Brasil Corretora de Valores e Câmbio Ltda."
    },
    {
    "value": "132",
    "label": "132 - ICBC do Brasil Banco Múltiplo S.A."
    },
    {
    "value": "133",
    "label": "133 - Confederação Nacional das Cooperativas Centrais de Crédito e Economia Familiar e"
    },
    {
    "value": "134",
    "label": "134 - BGC Liquidez Distribuidora de Títulos e Valores Mobiliários Ltda."
    },
    {
    "value": "135",
    "label": "135 - Gradual Corretora de Câmbio, Títulos e Valores Mobiliários S.A."
    },
    {
    "value": "136",
    "label": "136 - Confederação Nacional das Cooperativas Centrais Unicred Ltda – Unicred do Brasil"
    },
    {
    "value": "137",
    "label": "137 - Multimoney Corretora de Câmbio Ltda"
    },
    {
    "value": "138",
    "label": "138 - Get Money Corretora de Câmbio S.A."
    },
    {
    "value": "139",
    "label": "139 - Intesa Sanpaolo Brasil S.A. - Banco Múltiplo"
    },
    {
    "value": "140",
    "label": "140 - Easynvest - Título Corretora de Valores SA"
    },
    {
    "value": "142",
    "label": "142 - Broker Brasil Corretora de Câmbio Ltda."
    },
    {
    "value": "143",
    "label": "143 - Treviso Corretora de Câmbio S.A."
    },
    {
    "value": "144",
    "label": "144 - Bexs Banco de Câmbio S.A."
    },
    {
    "value": "145",
    "label": "145 - Levycam - Corretora de Câmbio e Valores Ltda."
    },
    {
    "value": "146",
    "label": "146 - Guitta Corretora de Câmbio Ltda."
    },
    {
    "value": "149",
    "label": "149 - Facta Financeira S.A. - Crédito Financiamento e Investimento"
    },
    {
    "value": "157",
    "label": "157 - ICAP do Brasil Corretora de Títulos e Valores Mobiliários Ltda."
    },
    {
    "value": "159",
    "label": "159 - Casa do Crédito S.A. Sociedade de Crédito ao Microempreendedor"
    },
    {
    "value": "163",
    "label": "163 - Commerzbank Brasil S.A. - Banco Múltiplo"
    },
    {
    "value": "169",
    "label": "169 - Banco Olé Bonsucesso Consignado S.A."
    },
    {
    "value": "172",
    "label": "172 - Albatross Corretora de Câmbio e Valores S.A"
    },
    {
    "value": "173",
    "label": "173 - BRL Trust Distribuidora de Títulos e Valores Mobiliários S.A."
    },
    {
    "value": "174",
    "label": "174 - Pernambucanas Financiadora S.A. Crédito, Financiamento e Investimento"
    },
    {
    "value": "177",
    "label": "177 - Guide Investimentos S.A. Corretora de Valores"
    },
    {
    "value": "180",
    "label": "180 - CM Capital Markets Corretora de Câmbio, Títulos e Valores Mobiliários Ltda."
    },
    {
    "value": "182",
    "label": "182 - Dacasa Financeira S/A - Sociedade de Crédito, Financiamento e Investimento"
    },
    {
    "value": "183",
    "label": "183 - Socred S.A. - Sociedade de Crédito ao Microempreendedor"
    },
    {
    "value": "184",
    "label": "184 - Banco Itaú BBA S.A."
    },
    {
    "value": "188",
    "label": "188 - Ativa Investimentos S.A. Corretora de Títulos Câmbio e Valores"
    },
    {
    "value": "189",
    "label": "189 - HS Financeira S/A Crédito, Financiamento e Investimentos"
    },
    {
    "value": "190",
    "label": "190 - Cooperativa de Economia e Crédito Mútuo dos Servidores Públicos Estaduais do Rio"
    },
    {
    "value": "191",
    "label": "191 - Nova Futura Corretora de Títulos e Valores Mobiliários Ltda."
    },
    {
    "value": "194",
    "label": "194 - Parmetal Distribuidora de Títulos e Valores Mobiliários Ltda."
    },
    {
    "value": "196",
    "label": "196 - Fair Corretora de Câmbio S.A."
    },
    {
    "value": "197",
    "label": "197 - Stone Pagamentos S.A."
    },
    {
    "value": "204",
    "label": "204 - Banco Bradesco Cartões S.A."
    },
    {
    "value": "208",
    "label": "208 - Banco BTG Pactual S.A."
    },
    {
    "value": "212",
    "label": "212 - Banco Original S.A."
    },
    {
    "value": "213",
    "label": "213 - Banco Arbi S.A."
    },
    {
    "value": "217",
    "label": "217 - Banco John Deere S.A."
    },
    {
    "value": "218",
    "label": "218 - Banco BS2 S.A."
    },
    {
    "value": "222",
    "label": "222 - Banco Credit Agrícole Brasil S.A."
    },
    {
    "value": "224",
    "label": "224 - Banco Fibra S.A."
    },
    {
    "value": "233",
    "label": "233 - Banco Cifra S.A."
    },
    {
    "value": "237",
    "label": "237 - Banco Bradesco S.A."
    },
    {
    "value": "241",
    "label": "241 - Banco Clássico S.A."
    },
    {
    "value": "243",
    "label": "243 - Banco Máxima S.A."
    },
    {
    "value": "246",
    "label": "246 - Banco ABC Brasil S.A."
    },
    {
    "value": "249",
    "label": "249 - Banco Investcred Unibanco S.A."
    },
    {
    "value": "250",
    "label": "250 - BCV - Banco de Crédito e Varejo S/A"
    },
    {
    "value": "253",
    "label": "253 - Bexs Corretora de Câmbio S/A"
    },
    {
    "value": "254",
    "label": "254 - Parana Banco S. A."
    },
    {
    "value": "260",
    "label": "260 - Nu Pagamentos S.A."
    },
    {
    "value": "265",
    "label": "265 - Banco Fator S.A."
    },
    {
    "value": "266",
    "label": "266 - Banco Cédula S.A."
    },
    {
    "value": "268",
    "label": "268 - Barigui Companhia Hipotecária"
    },
    {
    "value": "269",
    "label": "269 - HSBC Brasil S.A. Banco de Investimento"
    },
    {
    "value": "271",
    "label": "271 - IB Corretora de Câmbio, Títulos e Valores Mobiliários Ltda."
    },
    {
    "value": "300",
    "label": "300 - Banco de la Nacion Argentina"
    },
    {
    "value": "318",
    "label": "318 - Banco BMG S.A."
    },
    {
    "value": "320",
    "label": "320 - China Construction Bank (Brasil) Banco Múltiplo S/A"
    },
    {
    "value": "341",
    "label": "341 - Itaú Unibanco  S.A."
    },
    {
    "value": "366",
    "label": "366 - Banco Société Générale Brasil S.A."
    },
    {
    "value": "370",
    "label": "370 - Banco Mizuho do Brasil S.A."
    },
    {
    "value": "376",
    "label": "376 - Banco J. P. Morgan S. A."
    },
    {
    "value": "389",
    "label": "389 - Banco Mercantil do Brasil S.A."
    },
    {
    "value": "394",
    "label": "394 - Banco Bradesco Financiamentos S.A."
    },
    {
    "value": "399",
    "label": "399 - Kirton Bank S.A. - Banco Múltiplo"
    },
    {
    "value": "412",
    "label": "412 - Banco Capital S. A."
    },
    {
    "value": "422",
    "label": "422 - Banco Safra S.A."
    },
    {
    "value": "456",
    "label": "456 - Banco MUFG Brasil S.A."
    },
    {
    "value": "464",
    "label": "464 - Banco Sumitomo Mitsui Brasileiro S.A."
    },
    {
    "value": "473",
    "label": "473 - Banco Caixa Geral - Brasil S.A."
    },
    {
    "value": "477",
    "label": "477 - Citibank N.A."
    },
    {
    "value": "479",
    "label": "479 - Banco ItauBank S.A."
    },
    {
    "value": "487",
    "label": "487 - Deutsche Bank S.A. - Banco Alemão"
    },
    {
    "value": "488",
    "label": "488 - JPMorgan Chase Bank, National Association"
    },
    {
    "value": "492",
    "label": "492 - ING Bank N.V."
    },
    {
    "value": "494",
    "label": "494 - Banco de La Republica Oriental del Uruguay"
    },
    {
    "value": "495",
    "label": "495 - Banco de La Provincia de Buenos Aires"
    },
    {
    "value": "505",
    "label": "505 - Banco Credit Suisse (Brasil) S.A."
    },
    {
    "value": "545",
    "label": "545 - Senso Corretora de Câmbio e Valores Mobiliários S.A."
    },
    {
    "value": "600",
    "label": "600 - Banco Luso Brasileiro S.A."
    },
    {
    "value": "604",
    "label": "604 - Banco Industrial do Brasil S.A."
    },
    {
    "value": "610",
    "label": "610 - Banco VR S.A."
    },
    {
    "value": "611",
    "label": "611 - Banco Paulista S.A."
    },
    {
    "value": "612",
    "label": "612 - Banco Guanabara S.A."
    },
    {
    "value": "613",
    "label": "613 - Omni Banco S.A."
    },
    {
    "value": "623",
    "label": "623 - Banco Pan S.A."
    },
    {
    "value": "626",
    "label": "626 - Banco Ficsa S. A."
    },
    {
    "value": "630",
    "label": "630 - Banco Intercap S.A."
    },
    {
    "value": "633",
    "label": "633 - Banco Rendimento S.A."
    },
    {
    "value": "634",
    "label": "634 - Banco Triângulo S.A."
    },
    {
    "value": "637",
    "label": "637 - Banco Sofisa S. A."
    },
    {
    "value": "641",
    "label": "641 - Banco Alvorada S.A."
    },
    {
    "value": "643",
    "label": "643 - Banco Pine S.A."
    },
    {
    "value": "652",
    "label": "652 - Itaú Unibanco Holding S.A."
    },
    {
    "value": "653",
    "label": "653 - Banco Indusval S. A."
    },
    {
    "value": "654",
    "label": "654 - Banco A. J. Renner S.A."
    },
    {
    "value": "655",
    "label": "655 - Banco Votorantim S.A."
    },
    {
    "value": "707",
    "label": "707 - Banco Daycoval S.A."
    },
    {
    "value": "712",
    "label": "712 - Banco Ourinvest S.A."
    },
    {
    "value": "719",
    "label": "719 - Banif - Bco Internacional do Funchal (Brasil) S.A."
    },
    {
    "value": "735",
    "label": "735 - Banco Neon S.A."
    },
    {
    "value": "739",
    "label": "739 - Banco Cetelem S.A."
    },
    {
    "value": "741",
    "label": "741 - Banco Ribeirão Preto S.A."
    },
    {
    "value": "743",
    "label": "743 - Banco Semear S.A."
    },
    {
    "value": "745",
    "label": "745 - Banco Citibank S.A."
    },
    {
    "value": "746",
    "label": "746 - Banco Modal S.A."
    },
    {
    "value": "747",
    "label": "747 - Banco Rabobank International Brasil S.A."
    },
    {
    "value": "748",
    "label": "748 - Banco Cooperativo Sicredi S. A."
    },
    {
    "value": "751",
    "label": "751 - Scotiabank Brasil S.A. Banco Múltiplo"
    },
    {
    "value": "752",
    "label": "752 - Banco BNP Paribas Brasil S.A."
    },
    {
    "value": "753",
    "label": "753 - Novo Banco Continental S.A. - Banco Múltiplo"
    },
    {
    "value": "754",
    "label": "754 - Banco Sistema S.A."
    },
    {
    "value": "755",
    "label": "755 - Bank of America Merrill Lynch Banco Múltiplo S.A."
    },
    {
    "value": "756",
    "label": "756 - Banco Cooperativo do Brasil S/A - Bancoob"
    },
    {
    "value": "757",
    "label": "757 - Banco Keb Hana do Brasil S. A."
    }
]

export default bancos
