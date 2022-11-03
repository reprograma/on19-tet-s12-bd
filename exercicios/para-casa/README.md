# Exercício de Casa 🏠 

## Banco de Dados: Resumo

- **Banco de dados**

A necessidade de guardar dados e acessá-los de forma rápida e organizada impulsionou a implementação do CRUD (create, read, update, delete) em diversas linguagens de programação. As tarefas de criar, ler, atualizar e deletar registros em um banco de dados de forma digital, controlada e segura representam um avanço às limitações de hardware e de espaço de armazenamento físico em ambientes corporativos preocupados com a gestão das informações.

Em TI, banco de dados é uma abreviação de DBMS  (Database Management System), Sistema de Gerenciamento de Banco de Dados, cujo paradigma adotado pode ser de 3 principais tipos:

1. Relacional;
2. Não apenas relacional  (NoSQL; orientado a documentos, por exemplo); e
3. Orientado a objetos.

Por fim, a estrutura do banco de dados, segundo Guanabara, é a seguinte: dados; sistema gerenciador; linguagem de exploração; e programas adicionais.

------

- **SQL**

SQL (Structured Query Language) é um exemplo de linguagem de exploração. SQL foi a primeira linguagem de consulta estruturada a ser usada em banco de dados do paradigma relacional. Destaca-se que a sua organização acontece em forma de tabelas e que hoje no mercado existem variações de sintaxe que exigem atenção às suas nuances.

Exemplos de banco de dados que utilizam SQL: MySQL, PostgreSQL, MariaDB.

------

- **NoSQL**

NoSQL (Not only Structured Query Language) é a designação comum a banco de dados que adotam o paradigma não apenas relacional, modelados de forma flexível, indo além da estrutura padrão de relações tabulares do SQL. Uma característica a ser destacada é que a consulta a este tipo de banco de dados ocorre via API com a formatação de troca de dados em JSON.

Exemplos de banco de dados que utilizam NoSQL: MongoDB, Redis, Firebase.

------

- **MongoDB**

MongoDB é um banco de dados do paradigma não apenas relacional orientado a documentos que armazena e realiza a troca de dados no formato BSON (Binary JSON), um superset do JSON (JavaScript Object Notation) que confere maior performance com grande volume de dados. Destaca-se que a sua organização acontece em forma de collections que guardam os documents. Nos documents, os dados podem ser padronizados dentro de schemas antes de serem armazenados. E a representação da collection através da programação do model permite fácil exploração dos dados através dos métodos HTTP com CRUD.

------

📌OBS.: Sugiro abordar o uso do Studio 3T para termos um banco de dados rodando na nossa máquina e com integração ao Mongo Atlas caso seja necessário fazer backup na nuvem.