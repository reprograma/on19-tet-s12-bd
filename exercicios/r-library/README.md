# Introdução a Banco de Dados:

Professora: Gaia Maria 
Aula realizada em: 29-10-2022

## Temas abordados durante a aula, parte teórica:

- Apresentação sobre a origem dos arquivos e uma ótima contextualização histórica, para introdução do tema Banco de Dados.

*Me identifiquei fortemente com a temática, já que meu curso de formação é Gestão da Informação que tem como origem a Ciência da Informação. Para a CI, o dado isoladamente não é capaz de transmitir uma informação, é preciso trabalhar esse dado, ou o conjunto deles.
Compreendi na definição de banco de dados que a informação precisa ser organizadada, mas poderíamos pensar que a organização dos dados por sua vez dá origem à informação, que poderá ser usada posteriormente para tomada de decisão, por exemplo.*

Outro tópico que foi abordado, durante a aula foi o DBMS, ou SGBD e serve para gerenciar os dados armazenados que costumamos chamar apenas de banco de dados.

*Os bancos de dados geralmente são estruturados na forma mais lembrada, em tabelas, onde possuimos linhas e colunas e comumente são utilizadas no modelo relacional, onde  a principal linguagem é o SQL.  

*Além disso, os bancos de dados podem ser armazenados de uma forma mais amigável e de fácil utilização pelas APIs, chamdos de NoSQL.*

Durante a aula a professora fez questão de trazer exemplos de como podemos observar os modelos apresentados por ela, no dia a dia.

*O Mongo BD foi a ferramenta apresentada para criação do banco de dados para o proximo projeto, que usará o modelo NoSQL, para comunicação da API com os dados.*

## Parte prática da aula


A parte prática da aula, teve como poto principal a criação da conexão do projeto, com a criação da pasta *databasese* e dentro dela o arquivo *mongooseConnect.js*, a partir da pasta *src*.

## Dependências utilizadas depois de iniciar o repositório com *npm init -y*:

* npm i express cors
* npm i -D nodemon
* npm i mongoose  

## Estruturando as pastas do projeto

As seguintes pastas tiveram o cabeçalho preparado para rodar a aplicação:

- Controllers -> arquivo: booksControllers -> *criação de uma constante para caminho até os dados, a partir do require("../models/booksModel"). A importância desta variável dentro do controller se dá pelo fato de que os dados são chamados pelas funções que ali estão*
- Model -> *criação do arquivo booksModel, com metadados referente a livro, schema e uso do module.exports para exportação para a pasta controllers.*
- Routes -> *criação da constante para importação dos controllers, com require("../controllers/booksController"), uso do express e express.Router, além das rotas que serão utilizadas no postman.*
- Arquivo app.js ->*foram criadas constantes para as dependencias do projeto: express e cors. Além disso, a conexão com o banco de dados foi estabelecida com o endereço da pasta para constante mongoose. As rotas foram adicionadas pela constante booksRoutes.*

## Sobre o sql, no sql e mongobd


*Pelo que entendi durante a aula, o sql apareceu para 
manipular as informações em bancos de dados que eram originalmente relacionais, ou seja, com dados estruturados em tabelas. Ou seja, dessa forma um modelo mais rígido no sentido de normalização dos dados.*

*O NoSQL, ou não apenas sql , é mais flexível que o SQL pois os dados podem estar armazenados de maneiras mais simples, sem definição (tebelas) como o modelo relacional, em pesquisa observei que eles podem ser classificados por tipos: documento ou chave-valor e também em outros formatos.*

*O MongoBD é banco de dados voltado a documentos, modelo não relacional, além disso é muito utilzado e de código aberto.*

📖 O material de apoio também está muito completo, o que facilitou a compreenção. Outros conceitos do projeto, acredito que irei internalizar praticando com o código durante as próximas aulas.


