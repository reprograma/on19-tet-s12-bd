<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Introdução a Banco de Dados

Turma Online 19 - Todas em Tech  | Back-end | Semana 12 | 2022 | Gaia Maria

### Instruções
Antes de começar, vamos organizar nosso setup.
* Fork esse repositório 
* Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
* Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)


##   Apresentação

 Olá, meu nome é Gaia Maria. Sou uma travesti graduada em História Licenciatura (UNESP) e graduanda em Análise e Desenvolvimento de Sistemas (Faculdade Descomplica). Sou uma Bruxa devota a Hecate, ocultista e pagã. Tambem sou uma pessoa neurodiversa, gamer, viciada em RPG e desenvolvedora.

###  👩🏽‍🏫 recadinhos 
    - Bebam água meninas
    - Qualquer pergunta é válida, principalmente aquela que a gente pensa que não faz sentido.
    - Deixe a camera ligada
    
### 📑 Conteúdo da Aula

    - Banco de Dados
    - Introdução a MongoDB
    - MongoCompass, Shell e Robo3T
    - Projeto com mongo

## 📑 Arquitetura do Projeto (ao fim)
```
ReprogramaMusic  
├── r-library          
│    ├─ src                       
│    │  ├─ controllers            
│    │  │  └─ booksController.js  
│    │  ├─ database               
│    │  │  └─ moogoseConnect.js      
│    │  ├─ models                 
│    │  │  └─ booksModel.js      
│    │  ├─ routes                 
│    │  │  └─ booksRoute.js      
│    │  └─ app.js                 
│    ├─ package-lock.json         
│    ├─ package.json  
│    ├─ .gitignore            
│    └─ server.js
│
└─README.md
```

## ⚙️ Dependencias do Projeto
    - Mongoose
    - Cors
    - Express
    - Nodemom

### 💻 Dependências de ambiente
- Node `~> 14`
- Mongodb > `~> 4`

## 🏦 História do banco de dados

A motivação de criar um sistema para armazenagem de dados surgiu devido ao alto custo de leitura/escrita de arquivos no HD. Os primeiros fundamentos de banco de dados relacionais surgiram entre as décadas de 1960 a 1970 pela IBM. Na  década de 80, a Oracle, com a permissão da IBM, foi a primeira empresa a desenvolver o banco utilizando o padrão SQL para consulta/escrita como é conhecido hoje. Após a explosão da web, também conhecida como web 2.0, foi necessário uma alternativa ao SQL(relacional), assim, a partir de 1998, foi criado o conceito de banco nosql( não relacional )

###  As diferenças De SQL(relacional) vs NOSQL(não relacional)

#### Banco de dados Relacionais

SQL é uma linguagem de programação usada por quase todos os bancos de dados relacionais para consultar, manipular e definir dados e fornecer controle de acesso. O SQL foi desenvolvido pela primeira vez na IBM nos anos 1970, com a Oracle como principal contribuinte, o que levou à implementação do padrão SQL ANSI; o SQL estimulou muitas extensões de empresas como IBM, Oracle e Microsoft. Embora o SQL ainda seja amplamente usado hoje em dia, novas linguagens de programação estão começando a aparecer.

Exemplo de consulta em SQL com MySQL:

```sql
    $ SELECT from books
    WHERE writers = "J. R. R. Tolkien"
```

 - Os mais conhecidos são o MySQL, PostgreSQL e o Oracle.

### Banco de dados Não Relacionais

O termo 'NoSQL' se refere a tipos não relacionais de bancos de dados, e esses bancos de dados armazenam dados em um formato diferente das tabelas relacionais. No entanto, os bancos de dados NoSQL podem ser consultados usando APIs de linguagem idiomática, linguagens de consulta estruturadas declarativas e linguagens de consulta por exemplo, razão pela qual também são chamados de bancos de dados "não apenas SQL".

Os bancos de dados NoSQL são amplamente usados em aplicativos da web em tempo real e big data, porque suas principais vantagens são alta escalabilidade e alta disponibilidade.
Os bancos de dados NoSQL também são a escolha preferida dos desenvolvedores, pois eles naturalmente aceitam um paradigma de desenvolvimento ágil, adaptando-se rapidamente aos requisitos em constante mudança. Os bancos de dados NoSQL permitem que os dados sejam armazenados de maneiras mais intuitivas e fáceis de entender, ou mais próximas da maneira como os dados são usados pelos aplicativos - com menos transformações necessárias ao armazenar ou recuperar usando APIs no estilo NoSQL. Além disso, os bancos de dados NoSQL podem aproveitar ao máximo a nuvem para oferecer tempo de inatividade zero.


Exemplo de consulta em NOSQL com Mongo

```javascript
    $ db.books.find({ writers: "J. R. R. Tolkien"})
```

- Os mais conhecidos são o MongoDB, Redis e o Firebase.

## 🏦 Introdução ao Mongo
O MongoDB é um banco de dados orientado a documentos que possui código aberto (open source) e foi projetado para armazenar uma grande escala de dados, além de permitir que se trabalhe de forma eficiente com grandes volumes. Ele é categorizado no banco de dados NoSQL (not only SQL) pois o armazenamento e a recuperação de dados no MongoDB não são feitas no formato de tabelas.

###  Database
Um banco de dados é uma coleção organizada de informações - ou dados - estruturadas, normalmente armazenadas eletronicamente em um sistema de computador. Um banco de dados é geralmente controlado por um sistema de gerenciamento de banco de dados (DBMS). 
Juntos, os dados e o DBMS, juntamente com os aplicativos associados a eles, são chamados de sistema de banco de dados, geralmente abreviados para apenas banco de dados

### Collection e Document
Nossa `collection` é uma coleção(lista) de `document`, similar a  array, onde armazenamos, por exemplo, as nossos livros. Nesse exemplo, uma biblioteca seria a `collection`, enquanto cada livro seria um `document`, contendo as informações dele.

exmplo:

```json
[
    {
        "id": 1,
        "title": "O Hobbit",
        "launchYear": "1937",
        "available": true,
        "gender": "adventure",
        "writer": "J. R. R. Tolkien",
        "pages": "335"
    },
    {
        "id": 2,
        "title": "Blade Runner",
        "launchYear": "1968",
        "available": false,
        "gender": "sci-fi",
        "writer": "Philip K. Dick",
        "pages": "316"
    },
    {
        "id": 3,
        "title": "Frankenstein",
        "launchYear": "1818",
        "available": true,
        "gender": "sci-fi",
        "writer": "Mary Shelley",
        "pages": "250"
        
    }
]
```

### `{}` Schema

O mongoose utiliza a `Schema` para pôr ordem na na collection, é necessario por Ordem no Barraco.  Para isso precisamos de um schema( espelho ) de como será salvo nosso `document`.


exemplo de schema:

```javascript
const mongoose = require('mongoose');
const BooksSchema = monogoose.Schema({
      title: string,
      launchYear: number,
      available: boolean,
      publisher: string,
      gender: [string],
      writer: string,
      pages: number
});
```

### `[]` Model
A `Model` ( modelo ) é a nossa representação da Collection ( coleção ), nele assim como no Array, possuímos `métodos` ( funções ) que nos permite realizar as operações do CRUD: 

| OPERAÇÃO| DESCRIÇÃO | HTTP |
| --- | --- | --- |
| C | criar/gerar | POST |
| R | ler/obter |  GET | 
| U | atualizar/substiuir | PUT/PATCH |
| D | remover/deletar | DELETE |


Exemplo de como criar uma model

```javascript
const BookModel = mongoose.model('book', BookSchema);
```
Obs: Não é necessário salvar como books, pois o ORM cria no plural.

### ObjectId( )
O ObjectID é um identificador único para cada documento, ele é gerado automaticamente, podemos pensar nele como um CPF, único por dado, é por ele que consegue identificar um `Document` realizar as operações do CRUD.

```javascript
    const bookId = new moogose.Types.ObjectId();
```

##  Classes | OOP (orientação a objetos) Conceitos básicos
Uma breve introdução sobre classes e objetos, para que possamos entender melhor o  nosso ORM.

###  uso da palavra reservada `new`
Quando possuímos uma classe, podemos utilizar a palavra reservada `new`  para instanciar um objeto, ou seja, construir um novo documento a partir da classe( nossa `Schema` ),  afinal, não queremos que a música da Anitta tenha altere as informações da música da Ludmila né? 🤔

```javascript
const book = new BookModel({
      title: string,
      launchYear: number,
      available: boolean,
      publisher: string,
      gender: [string],
      writer: string,
      pages: number
});
```


### Métodos
Assim como o objeto, as classes possuiem métodos, que são funções que nos auxiliam a realizar **ações** como por exemplo: salvar um livro, ou mudar de pagina, no nosso dia-a-dia usamos o console`.log`, *.log("hello word")* é um método que nos permite imprimir no terminal uma mensagem de texto.


### Constructor
Nosso `constructor` é responsável por inicializar a nossa classe, ele recebe os parametros para criar construir a instancia da classe, como por exemplo, o livro, é assim que nossa Schema gera o livro no formato que o banco espera, no caso do mongo, um BJSON.

### Tipagem - Tipos primários
Na programação, existem tipos primários, que são responsáveis por definir o tipo de informação ( dado ) que estamos trabalhando, por exemplo um número de celular `Number`, ou um email que é texto `String`, ou até mesmo se é verdadeiro(true) ou falso(false) que é um `Boolean`, além disso, temos o `Date` que representa uma data. 

 - String -> representa *texto* -> `""`
 - Number -> representa *número*  `0`
 - Boolean -> representa `true` ou `false`
 - Date -> representa uma data, por exemplo, 1970-01-13 -> `Date`

```typescript
    class Book {
      title: string,
      launchYear: number,
      available: boolean,
      publisher: string,
      gender: [string],
      writer: string,
      pages: number
    };
```

## 📖 Referências
- https://www.gartner.com/en/information-technology/glossary/object-data-model
- https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/mongoose
- https://docs.mongodb.com/
- https://docs.mongodb.com/manual/crud/
- https://docs.atlas.mongodb.com/tutorial/create-new-cluster/
- https://studio3t.com/academy/topic/mongodb-vs-sql-concepts/
- https://mongoosejs.com/docs/index.html

### 🎥 Videos de apoio

- [Resumo Mongodb - Codigo Fonte TV](https://www.youtube.com/watch?v=4dTI1mVLX3I)
- [nodeJs Express Mongo - Api rest full Turitorial](https://www.youtube.com/watch?v=K5QaTfE5ylk)
- [O que é banco de dados? - Curso em Video](https://www.youtube.com/watch?v=Ofktsne-utM)

##  🎓 Para Casa
  
Oie bonitas, como sabem a tarefa mudou, então vamos lá:
- Entre no arquivo do README, dentro da pasta principal (on19-tet-s12-bd) 
- E responda COM SUAS PALAVRAS o que você entendeu da aula de sabado:
  * pode usar girias, pajuba, aleatorias, trazer imagens... você escolhe
  * pode ser sintese, textão, mapa conceitual... 
  * me explique principalmente o que vocêentendeu de Banco de Dados, SQL, NoSQL e de Mongo
  * caso queira pode me falar tambem onde teve mais duvidas e qual parte gostariam que eu revesse na semana 13    
  
  obs: se quiser adicione um campo de observação sobre tematicas das ultimas semanas (de outras aulas) que voce
  teve mais dificuldade. Vamos revisa-las.

  * Na sexta faremos uma atividade oral onde irei fazer perguntas para turma, nem todas precisam participar, mas 
  eu adoraria se vocês participassem. POR FAVOR

###  Resolução da atividade semanal: O que eu entendi 

Olar pessoas!
Segue abaixo um breve (biblía) resumo do que eu entendi dessa semana <3

Bora lá...

O banco de dados nada mais é do que uma "biblioteca" que armazena e organiza informações/dados e arquivos. Arquivo é um conjunto de documentos que foram produzidos e compilados por algum motivo, seja ele dados históricos, de registro, etc.

Mas você pode pensar, sempre existiu banco de dados? Com certeza não! Nos primórdios da humanidade, a mulher primitiva registrava os acontecimentos das paredes, com sangue ou tinta tirada de plantas, para contar um pouco de sua história e compartilhar o conhecimento obtido - tenho certeza que você já viu algum desenho ou pintura desse tipo no Discovery Channel. 
Depois, vieram as gregas e as egípicias que, com conhecimento muito mais avançado, criaram a técnica da escrita, e a partir daí o volume de documentos produzidos cresceu muito. Foi preciso então criar bibliotecas para armazernar esses documentos, como a biblioteca de Alexandria, por exemplo. 

Tava tudo muito bom e muito bem até que... chegou a igreja católica.

Infelizmente, a igreja interrompeu o desenvolvimento dos arquivos, pois consideravam grande parte deles hereges (aquilo ou alguém que professa uma heresia, doutrina contrária ao que foi estabelecido pela Igreja como dogma), e botou fogo em tudo. Como consequência, muitos documentos importantes que impactariam no nosso desenvolvimento hoje foram perdidos. 

Foi aí que após a Revolução Francesa entendeu-se que era importante organizar os arquivos e armazená-los em um local próprio, pois assim, ao se conhecer a história, evita-se cometer os mesmos erros dos passados e preserva-se cultura e conhecimento. Então surgiu o primeiro arquivo nacional do mundo, localizado na França, chamado Arquivo Nacional de Paris. 

Desde então, tivemos a Segunda Guerra Mundial, em que um dos impactos também foi a destruição de arquivos e, por isso, criou-se o Conselho Internacional de Arquivos (CIA). 

Por fim, surgiu-se o maravilhoso computador, em que, devido a quantidade de informaões, criou-se a Ciência da Computação, e tornou a tecnologia da informação gestora de todos os documentos do mundo. 

E aí que voltamos ao Banco de Dados, ou B.D para os mais chegados. O B.D é geralmente controlado por um sistema que gerencia banco de dados (DBMS) e junto com os dados e os aplicativos associados a eles, temos o sistema de banco de dados, geralmente abreviado apenas para banco de dados... Tá confuso, eu sei, mas calma que já já você vai entender.
Uma boa comparação que poderíamos fazer é com um livro. Uma página de um livro é um banco de dados de palavras, um livro é um banco de dados de páginas, uma estande é um banco de dados de livros e uma biblioteca é um banco de dados de uma estande. Ou então, um segundo exemplo, o cérebro de uma pessoa é um banco de dados que armazena emoções e pensamentos... Profundo, né? Mas espero que esteja começando a clarear para você!

Agora trazendo para mais próximo da nossa realidade, em 1970 um pesquisador da IBM chamado Tedd Codd publicou um artigo sobre banco de dados relacionais. Um banco de dados relacionais nada mais é que um banco de dados que faz relação/se conecta, baseado em tabelas. E criou-se uma linguagem chamada SQL (Structured Query Language - Linguagem de Consulta Estruturada) que é usada para executar comandos em bancos de dados relacionais. Essa foi uma linguagem de programação criada para que as programadoras pudessem simultaneamente, acessar, consultar e modificar/manipular os dados estruturais de uma empresa ou organização. 
Mas, apesar da IBM criar o padrão SQL, foi a Oracle que produziu o primeiro sistema comercial de banco de dados.

As linguagens SQL tem diferentes sintexes, variações que depende do banco de dados de cada empresa, e APENAS se comunicam com os bancos de dados RELACIONAIS (com organização tabular = linhas e colunas)...

Sua versão de avaliação acaba por aqui, compre para ler o conteúdo na íntegra. 

Brincadeira profs hahahaha

Se você ver essa atividade antes da meia noite do dia 03/11, por favor volte novamente no dia seguinte, pois ainda hoje termino. Como estou de mudanças, preferi entregar até o prazo das 18h, mas hoje a noite prometo que atualizo o texto completinho <3 



##  Minhas redes sociais
 - [LINKEDIN](https://www.linkedin.com/in/gaia-maria/)
 - [GITHUB](https://github.com/Gaia-Maria)

