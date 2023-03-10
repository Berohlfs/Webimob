# Análise da situação atual

## Introdução

A Webimob é uma corretora de seguros digital especializada no ramo imobiliário. Fundada em 2019, a empresa nasceu dentro das instalações
da Wegman Corretora de Seguros (atual Interweg) com o objetivo de atender a crescente demanda por seguros imobiliários. Por ser uma corretora digital, um sistema web foi concebido e desenvolvido pelos sócios da empresa para facilitar e agilizar a contratação de seguros pelas imobiliárias para seus clientes.

É essencial ressaltar que o Sistema Webimob foi desenvolvido a partir do SAC, um outro sistema que também atua no ramo de seguros. Por esse motivo, inúmeras partes do SAC foram reaproveitadas para desenvolver o Sistema Webimob. No entanto, desde a sua concepção até o presente, o sistema permanece crescendo, criando suas prórprias demandas e, cada vez mais, exigindo sua independência. A situação atual da empresa requer o desenvolvimento de um novíssimo sistema, a fim de iniciar uma nova fase mais duradoura e produtiva.

Para tanto, é necessário apontar todas as atividades presentes dentro do Sistema Webimob atual. Neste documento, vamos listar cada um dessas atividades.

## Atividades

### Gerenciar imobiliárias

Essas atividades compoem um conjunto de processos responsáveis por manipular e acessar os dados das imobiliárias parceiras. Pode-se dizer que esses dados são a base para o funcionamento do sistema Webimob, considerando que o restante dos processos de produção dependem deles.

| ID | Atividade | Situação |
| --- | --- | --- |
| GI-1 | Mostrar imobiliárias em um tabela. | Em análise |
| GI-2 | Buscar imobiliárias por nome, apelido ou CNPJ. | Em análise |
| GI-3 | Ordenar as imobiliárias em ordem crescente ou decrescente partindo de cada coluna. | Em análise |
| GI-4 | Paginação da tabela de imobiliárias. | Em análise |
| GI-5 | Seleção múltipla de imobiliárias. | Em análise |
| GI-6 | Copiar regras ou planos de comissão de uma imobiliária. | Em análise |
| GI-7 | Mostrar imobiliárias inativas. | Em análise |
| GI-8 | Exportar relatório de imobiliárias em excel. | Em análise |
| GI-9 | Cadastrar nova imobiliária. | Em análise |
| GI-10 | Editar imobiliária. | Em análise |
| GI-11 | Excluir imobiliária. | Em análise |
| GI-12 | Gravar anotações sobre imobiliária. | Em análise |
| GI-13 | Gravar atendimentos da imobiliária. | Em análise |
| GI-14 | Anexar documentos da imobiliária. | Em análise |
| GI-15 | Gravar lista de contatos da imobiliária. | Em análise |
| GI-16 | Visualizar regras de comissão da imobiliária. | Em análise |
| GI-17 | Enviar e-mail para a imobiliária. | Em análise |
| GI-18 | Visualizar logs de usuário da imobiliária. | Em análise |
| GI-19 | Tranferência de documentos de uma imobiliária para outra. | Em análise |
| GI-20 | Desativar imobiliária. | Em análise |

### Gerenciar parceiros

Os parceiros de produção são redes de imobiliárias. Quando uma imobiliária vinculada a um parceiro fecha um seguro, o prêmio é repassado para o parceiro e para a imobiliária.

| ID | Atividade | Situação |
| --- | --- | --- |
| GP-1 | __*Herança*__ de **GI**, substituindo 'imobiliaria(s)' por 'parceiro(s)' (exceto GI-15). | Em análise |

### Gerenciar seguradoras

As atividades abaixo, além de salvar alguns dados essenciais das seguradoras, informam o seu status atual (ativa ou inativa).

| ID | Atividade | Situação |
| --- | --- | --- |
| GS-1 | __*Herança*__ de **GI**, substituindo 'imobiliaria(s)' por 'seguradora(s)' (exceto GI-6, 13 e 16). | Em análise |
| GS-2 | Cadastrar sucursais da seguradora | Em análise |
| GS-3 | Cadastrar relacionamentos com produtos | Em análise |

### Gerenciar ramos

Os ramos descrevem cada um produtos vendidos pela corretora.

| ID | Atividade | Situação |
| --- | --- | --- |
| GS-1 | __*Herança*__ de **GI**, substituindo 'imobiliaria(s)' por 'ramos(s)' (exceto GI-6 a 8, 12 a 17 e 19). | Em análise |
| GS-2 | Cadastrar relacionamentos com seguradoras | Em análise |

### Gerenciar ficha de corretora

A ficha da corretora armazena os dados essenciais da Webimob.

| ID | Atividade | Situação |
| --- | --- | --- |
| GFDC-1 | Salvar dados cadastrais da corretora. | Em análise |

### Gerenciar formulários para impressão

Os formulários para impressão são criados e utilizados para emitir as cotações do sistema.

| ID | Atividade | Situação |
| --- | --- | --- |
| GFPI-1 |  __*Herança*__ de **GI** apenas dos itens GI-1 a 5 e 9 a 11, substituindo 'imobiliaria(s)' por 'formulário(s)'. | Em análise |
| GFPI-2 | Editar o arquivo do formulário. | Em análise |

### Gerenciar grupos de usuários

Os grupos de usuários são conjuntos de logins que compartilham das mesma capacidades e permições.

| ID | Atividade | Situação |
| --- | --- | --- |
| GGDU-1 |  __*Herança*__ de **GI** apenas dos itens GI-1, 3, 4 e 9 a 11, substituindo 'imobiliaria(s)' por 'grupo(s) de usuários'. | Em análise |
| GGDU-2 | Configurar autorizações do grupo. | Em análise |
| GGDU-3 | Duplicar grupo. | Em análise |
| GGDU-2 | Exportar planilha de autorizações do grupo. | Em análise |

### Gerenciar usuários

Os usuários são representam os logins do sistema. Cada um deve se encaixar em um grupo de usuário.

| ID | Atividade | Situação |
| --- | --- | --- |
| GU-1 |  __*Herança*__ de **GI** apenas dos itens GI-1 a 5, 4 e 7 a 11, substituindo 'imobiliaria(s)' por 'grupo(s) de usuários'. | Em análise |
| GU-2 | Enviar mensagem para usuário. | Em análise |
| GU-3 | Vincular contas de e-mail ao usuário. | Em análise |
| GU-4 | Mostrar usuário conectados. | Em análise |

### Solicitar Suporte

A atividade abaixo conecta um usuário a um atendente Webimob.

| ID | Atividade | Situação |
| --- | --- | --- |
| SS-1 | Chamar atendente Webimob por Whatsapp. | Em análise |

## Atividades obsoletas

As atividades obsoletas são aquelas que não são utilizadas por qualquer usuário do sistema. Essas atividades, normalmente, foram criadas para atender alguma demanda do SAC mas não foram removidas durante o desenvolvimento do Sistema Webimob. Alternativamente, atividades obsoletas podem ser ideias antigas que não amadureceram e foram esquecidas.

1. Configurações > Tabelas de Produção > Oficinas > ... (*SAC*)
1. Configurações > Tabelas de Produção > Vendedores > ... (*Não utilizado*)
1. Configurações > Configurações gerais > Parametrização > ... (*Customização de corretoras parceiras. Entrará em desuso*)
1. Configurações > Atualizadores > ... (*SAC*)
1. Configurações > Controle de usuários > Horários de utilização > ... (*Não utilizado*)
