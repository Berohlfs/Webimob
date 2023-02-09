# Sumário
- Requisitos funcionais
- Requisitos não-funcionais

***

# Requisitos funcionais

## Imobiliárias

| ID | Nome | Descricão do requisito | Regras de negócio | Interface visual | 
| --- | --- | --- | --- | --- |
| RF1.1 | CRUD de imobiliária | O usuário pode cadastrar uma nova imobiliária na base de dados ou excluir uma já existente, assim como alterar seus dados cadastrais quando for necessário | [imobiliarias-RDN](regras-de-negocio/imobiliarias-RDN.md) | |
| RF1.2 | CRUD de anexo | O usuário pode anexar arquivos a uma imobiliária ou excluir arquivos previamente anexados | ... | |
| RF1.3 | CRUD de contato | O usuário pode criar, excluir e alterar contatos vinculados a uma imobiliária | ... | |
| RF1.4 | Anotações | O usuário pode escrever anotações vinculadas a uma imobiliária dentro de um bloco de notas | ... | |
| RF1.5 | Busca por imobiliária | O usuário pode buscar por imobiliárias por meio de CNPJ/CPF, nome e apelido | ... | |


***

# Requisitos não-funcionais

## Tecnologias

| ID | Descrição do requisito | Info | 
| --- | --- | --- |
| RNF1.1 | O Node.js será o interpretar de JavaScript utilizado para desenvolver o back-end | [nodejs.org](https://nodejs.org/en/) |
| RNF1.2 | O React.js será a biblioteca de JavaScript utilizada para desenvolver o front-end | [reactjs.org](https://pt-br.reactjs.org/) |
| RNF1.3 | O MySQL será o sistema gerenciador de banco de dados | [mysql.com](https://www.mysql.com/) |
| RNF1.4 | O Express.js será o framework do Node.js aplicado para suportar o roteamento do back-end | [expressjs.com](https://expressjs.com/pt-br/) |
| RNF1.5 | O Sequelize será o Object Relational Mapper (ORM) utilizado para efetuar a comunicação entre o back-end e o banco de dados | [sequelize.org](https://sequelize.org/) |
| RNF1.6 | O Yarn será o instalador de pacotes Node.js | [nmpjs.com](https://www.npmjs.com/) / [Pacote NPM (front-end)](../codigo-fonte/Client/package.json) / [Pacote NPM (back-end)](../codigo-fonte/Server/package.json)|

## API's

| ID | Descrição do requisito | Info | 
| --- | --- | --- |
| RNF2.1 | A API utilizada para busca de CEP será a ViaCEP | [viacep.com.br](https://viacep.com.br/) |

***
