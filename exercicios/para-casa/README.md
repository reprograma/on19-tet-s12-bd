# Gerenciamento da Banco de dados🏫  

## SQL / NOSQL / MONGO

- Contexto histórico:
Necessidade de arquivamento mais eficiente, prático e seguro de documentos importantes.
- Todos os dados
 - Análise do que realmente importa – dados filtrados para utilização (público alvo)
  - Uso dos dados relevantes

O que é BANCO DE DADOS?
- São coleções de dados organizados e gerenciados pela DBMS (Data Base Management System)
  - Exemplo:
Pagina: BD de palavras
Livro: BD de páginas
Estante: BD de livros
Biblioteca: BD de estantes

    ##### Ex. Sistema de BD:
    Notas de um aluno:
O professor insere a nota do aluno em um sistema para ser tratada e após liberada para ser consultada ou manipulada.

1970 – IBM – BD Relacional, que se relaciona com outros BD, através de comandos em inglês, essas informações são armazenadas e manipuladas pelo sistema de TABELAS (Excel)
##SQL / DS – Structured Query Language DB2
##SQL = LINGUAGEM DE PROGRAMAÇÃO
- É um BD que se relaciona com outros BD Relacionais. Ex.: Access
#### SQL=SE CONECTA A OUTRAS TABELAS EM BUSCA DE INFORMAÇÃO
#### NO SQL – SISTEMA NÃO NECESSARIAMENTE SQL
Trata-se de um BD organizado relacional em diferentes linguagens, ex. API´s de linguagem idiomática (expressões).
- Faz consulta através de determinados tipos, Coleções de assuntos. Ex.: Locadora de Vídeo
NoSQL=INFORMAÇÃO COMPLETA
## MONGODB
É um BD orientado de código aberto. Projetado para armazenar grande volume de dados, normalmente na linguagem NoSQL (sistemas diferentes de tabelas).
•	Servidor de BD fluidos
•	Permite criar BD e coleções
•	Coleções = Documentos iguais ou diferentes entre si
•	Cria relações complexas

### SCHEMAS = ESQUEMAS DE INFORMAÇÃO

### MEU MOMENTO ALEGORIA = COMO FAZER CHURROS
•	200 g de farinha de trigo
•	250 ml de água
•	2 colheres (sopa) de açúcar
•	2 colheres (sopa) de manteiga
•	2 ovos
•	1 pitada de sal
•	Açúcar e canela para polvilhar
•	Óleo para fritar
•	Saco de confeiteiro com bico para churros
•	Doce de leite ou creme de avelã a gosto

##### SQL (levando em consideração que todos os produtos já estão com a mise en place ok)
PASTA = ARMÁRIO =  FARINHA
				= AÇÚCAR
				= ÓLEO
				= CANELA
				= PODE DE SAL
PASTA GELADEIRA	= MANTEIGA
				= DOCE DE LEITE
				= OVOS
PASTA TORNEIRA	= ÁGUA

##### SISTEMA NO SQL
ROTA: localhost:3131/receitas/churros
[{
200 g de farinha de trigo
250 ml de água
2 colheres (sopa) de açúcar
2 colheres (sopa) de manteiga
2 ovos
1 pitada de sal
MODO DE FAZER {
Açúcar e canela para polvilhar
Óleo para fritar
Saco de confeiteiro com bico para churros
Doce de leite ou creme de avelã a gosto
}}]

Momento sem noção da realidade O:)
CONST COZINHAR = {TORNEIRA.AGUA + GELADEIRA.MANTEIGA + ARMÁRIO.AÇÚCAR.SAL}
	IF { “FERVEU?”
		RETURN (“ADICIONAR” ARMÁRIO.FARINHA)
	ELSE “ESPERE FERVER”}
CONST PONTODAMASSA = COZINHAR, GELADEIRA.OVOS
CONST FRITAR = ARMÁRIO.ÓLEO + PONTODAMASSA
CONSOLE.LOG(FRITAR + (ARMÁRIO.CANELA, GELADEIRA.DOCE DE LEITE)) 
---

Obrigada ;)