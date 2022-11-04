# Exercício de Casa 🏠 

## Banco de Dados

Oie bonitas, como sabem a tarefa mudou, então vamos lá:
- Entre no arquivo do README, dentro da pasta principal (on19-tet-s12-bd) 
- E responda COM SUAS PALAVRAS o que você entendeu da aula de sabado:
  * pode usar girias, pajuba, aleatorias, trazer imagens... você escolhe
  * pode ser sintese, textão, mapa conceitual... 
  * me explique principalmente o que vocêentendeu de Banco de Dados, SQL, NoSQL e de Mongo
  * caso queira pode me falar tambem onde teve mais duvidas e qual parte gostariam que eu revesse na semana 13  
  obs: se quiser adicione um campo de observação sobre tematicas das ultimas semanas (de outras aulas) que voce
  teve mais dificuldade. Vamos revisa-las.

  na sexta faremos uma atividade oral onde irei fazer perguntas para turma, nem todas precisam participar, mas 
  eu adoraria se vocês participassem. POR FAVOR 

###  Resolução da atividade semanal: O que eu entendi 

Olar pessoas!
Segue abaixo um breve (biblía) resumo do que eu entendi dessa semana <3

Bora lá...

O banco de dados nada mais é do que uma "biblioteca" que armazena e organiza informações/dados e arquivos. Arquivo é um conjunto de documentos que foram produzidos e compilados por algum motivo, seja ele dados históricos, de registro, etc.

Mas você pode pensar, sempre existiu banco de dados? Com certeza não! Nos primórdios da humanidade, a mulher primitiva registrava os acontecimentos nas paredes, com sangue ou tinta de plantas, para contar um pouco de sua história e compartilhar o conhecimento obtido - tenho certeza que você já viu algum desenho ou pintura desse tipo no Discovery Channel. 
Depois, vieram as gregas e as egípicias que, com o conhecimento muito mais avançado, criaram a técnica da escrita, e a partir daí o volume de documentos produzidos cresceu muito. Foi preciso então criar bibliotecas para armazernar esses documentos, como, por exemplo, a biblioteca de Alexandria. 

Tava tudo muito bom e tava tudo muito bem até que... chegou a igreja católica.

Infelizmente, a igreja interrompeu o desenvolvimento dos arquivos, pois considerava que grande parte deles eram hereges (aquilo ou alguém que professa uma heresia, doutrina contrária ao que foi estabelecido pela igreja como dogma), e botou fogo em tudo. Como consequência, muitos documentos importantes, que impactariam no nosso desenvolvimento hoje, foram perdidos. 

Foi aí que, após a Revolução Francesa, entendeu-se que era importante organizar os arquivos e armazená-los em um local apropriado, pois assim, ao se conhecer a história, evita-se cometer os mesmos erros do passado e preserva-se a cultura e o conhecimento. Então surgiu o primeiro arquivo nacional do mundo, localizado na França, chamado Arquivo Nacional de Paris. 

Desde então, tivemos a Segunda Guerra Mundial, em que um dos impactos também foi a destruição de arquivos e, por isso, criou-se o Conselho Internacional de Arquivos (CIA). 

Por fim, surgiu-se o maravilhoso computador, em que, devido a quantidade de informações, sentiu-se a necessidade de criar a Ciência da Computação, que tornou a tecnologia da informação gestora de todos os documentos do mundo. 

E aí que voltamos ao Banco de Dados, ou B.D para os mais chegados. O B.D é geralmente controlado por um sistema que gerencia banco de dados (DBMS) e junto com os dados e os aplicativos associados a eles, temos o sistema de banco de dados, geralmente abreviado apenas para banco de dados... Tá confuso, eu sei, mas calma que já já você vai entender.
Uma boa comparação que poderíamos fazer é com um livro. Uma página de um livro é um banco de dados de palavras, um livro é um banco de dados de páginas, uma estande é um banco de dados de livros e uma biblioteca é um banco de dados de estantes. Ou então, um segundo exemplo, o cérebro de uma pessoa é um banco de dados que armazena emoções e pensamentos... Profundo, né? Mas espero que esteja começando a clarear para você!

Agora, trazendo para mais próximo da nossa realidade, em 1970 um pesquisador da IBM chamado Tedd Codd publicou um artigo sobre banco de dados relacionais. Um banco de dados relacionais nada mais é que um banco de dados que faz relação/se conecta baseado em tabelas. 
E aí que criou-se uma linguagem chamada SQL (Structured Query Language - Linguagem de Consulta Estruturada) que é usada para executar comandos em bancos de dados relacionais. Essa foi uma linguagem de programação criada para que as programadoras pudessem simultaneamente acessar, consultar e modificar/manipular os dados estruturais de uma empresa ou organização. 
Mas, apesar da IBM criar o padrão SQL, foi a Oracle que produziu o primeiro sistema comercial de banco de dados.

As linguagens SQL tem diferentes sintaxes, variações que depende do banco de dados de cada empresa, e APENAS se comunicam com os bancos de dados RELACIONAIS (com organização tabular (linhas e colunas) e que se relacionam entre si).
Um bom exemplo de linguagem SQL são as conexões entre os trilhos do metrô. Você já parou para se perguntar como os metrôs não batem uns nos outros? Pois é, existe uma conexão oculta que controla os trilhos por onde os metrôs passarão, relacionando/conectando todos eles a mesma linha, porém de forma em que eles não irão colidir entre si. 

Agora mudando um pouquinho do tipo de banco de dados, temos também os bancos de dados NoSQL, que são aqueles de tipo não relacional, que podem ser consultados usando APIs de linguagem idiomáticas e linguagens de consulta. Esse tipo de banco de dados é a escolha preferida das devs, pois ele se adapta rapidamente as mudanças e aceita um paradgma de desenvolvimento ágil. Ele permite também que os dados sejam armazenados de forma mais fácil de se entender, onde são necessárias menos transformações para armazenar ou recuperar os dados usando APIs.
Outra coisa importante de falar do NoSQL é que ele aproveita o máximo da nuvem para oferecer um tempo de inatividade zero.
Para o NoSQL, um exemplo bacana são as bibliotecas, onde temos livros de diversos gêneros e assuntos, mas se quisermos buscar livros do Stephen King, não conseguiremos buscar pelo autor, pois a relação/divisão de prateleiras está entre os gêneros, como terror, ação, suspense, romance, etc...

Por último, mas não menos imporante temos o... MongoDB! Tenho certeza que em algum momento da sua vida você já deve ter ouvido falar nesse famosinho. Pois bem, o MongoDB é um banco de dados orientado a documentos e funciona de maneira open source (código aberto, ou seja, sua linguagem de programação pode ser vista por qualquer um, que pode adaptá-la para objetivos variados). Ele é p-e-r-f-e-i-t-o quando se precisa trabalhar com milhões de documentos, pois ele permite que se trabalhe com um volume de dados alto de maneira eficiente. 
Esse queridinho se enquatra no modelo citado anteriormente, o NoSQL, pois seu armazenamento e recuperação de dados não são feitos em formatos de tabelas. 
Ele é um servidor de banco de dados que contém coleções, com a vantagem de se criar diversas coleções e bancos de dados dentro da principal.
Nele, não é necessário que um documento seja igual ou semelhante ao outro, uma única coleção pode conter vários documentos diversos e nos documentos pode-se armazerar dados aninhados dentro de schemas (organização de informações). 
Importante lembrar que a conexão que existe entre os dados nos permite criar relações complexas entre eles, armazenando-os no mesmo documento, otimizando uma busca mais eficiente em comparação com o SQL.

E por hoje é só meus amores. Espero que tenham aprendido bastante com essa leitura! 

Beijos de luz,
Bia Trindade
---

Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

- [x] Fiz o fork do repositório.
- [x] Clonei o fork na minha máquina (`git clone url-do-meu-fork`).
- [x] Resolvi o exercício.
- [x] Adicionei as mudanças. (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [x] Commitei a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [x] Pushei os commits na minha branch (`git push origin nome-da-branch`)
- [x] Criei um Pull Request seguindo as orientaçoes que estao nesse [documento](/exercicios/para-casa/instrucoes-pull-request.md).