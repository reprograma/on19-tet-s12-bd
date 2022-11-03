# Exercício de Casa 🏠 

## Banco de Dados
# O que é?

Um banco de dados é um repositório sistêmico de informações, relacionados a algo ou alguém, por exemplo: - seu nome; sua idade; sua altura; fatos sobre uma pessoa. 

Tempos atrás guardávamos essas informações em gavetas e com a era digital esses arquivos foram convertidos para Word, Excel, imagens etc. Mas com as quantidades de informações que foram surgindo, junto a quantidade de pessoas, foi possível otimizar e registrar essas inúmeras informações simultâneas sobre qualquer coisa em um banco de dados. 

E a proposta do banco de dados se propus a resolver o problema de gerenciamentos de informações, solucionando problemas como **Padronização de acesso**: ao invés de usar um software diferente para cada tipo de arquivos, em um banco de dado é utilizado uma interface para todo tipo de informação; **segurança de acesso**: em um banco de dados é possível determinar quem acessa o quê ou quem audita, ou seja, tem tudo mapeado quem usou ou alterou algo. **Integridade das informações**: com banco de dados é possível criar regras que impedem as pessoas de salvar informações duplicadas ou incorretas. **Escalabilidade**: o banco de dados é preparado para trabalhar com milhares de linhas com performance muitas vezes iguais ou equivalentes a performance com menos linhas. **Trabalho em equipe**: é possível que muitas pessoas trabalhem simultaneamente com os mesmos dados.

Logo, um sistema de banco de dados serve para que todas as *informações possam ser registradas e armazenadas de maneira segura, organizada e padronizada*. 


## O que é SQL?

A sigla SQL significa Structured Query Language, ou Linguagem de Consulta Estruturada ou SQL, e ela é a linguagem que se *comunica com o banco de dados relacional*, que serve também para extrair, atualizar e inserir dados. 
Um banco de dados relacional é organizado em forma de tabelas, cada tabela representa uma entidade, por exemplo: temos uma tabela de clientes onde vão ser inseridos todos os registros de clientes como nome, sobrenome, data de nascimento, com isso fica fácil se quiser **extrair todos os clientes** que começam com a letra *A* desse registro. Para isso serve o SQL, uma linguagem definida que podemos escrever as consultas e executar diretamente no banco de dados. Também é possível fazer **inserção de um cliente**, existe a opção **update para atualizar os dados** e **delete para eliminar um registro**. 

## O que é NoSQL?
NoSQL vem de NOT ONLY SQL, ou seja, não só SQL, e *trata-se de um banco de dados não relacional*. No geral, não é utilizada a linguagem SQL como linguagem de consulta. O diferencial dele é a sua capacidade de escalabilidade para as operações em escalas de grandes volumes de forma mais simples e econômica do que no banco relacional.

## O que é MongoDB?
É um *banco de dados não relacional* orientados a documentos no formato **JSON**, bastante utilizado no mercado. Nele é possível armazenar registros sem se preocupar com a estrutura de dados, ou seja, números de campos, tipos etc. Ele guarda dados em *documentos* ao invés de tabelas, os documentos são agrupados em coleção (colletion, como são chamados os registros no nosso banco de dados). 


Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

- [ ] Fiz o fork do repositório.
- [ ] Clonei o fork na minha máquina (`git clone url-do-meu-fork`).
- [ ] Resolvi o exercício.
- [ ] Adicionei as mudanças. (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitei a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushei os commits na minha branch (`git push origin nome-da-branch`)
- [ ] Criei um Pull Request seguindo as orientaçoes que estao nesse [documento](/exercicios/para-casa/instrucoes-pull-request.md).