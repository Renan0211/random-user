# Bem vindo ao meu projeto `Random User` :smile:


A ideia desse projeto foi fazer uma página que consumiria a API [Random User Generator](https://randomuser.me/) e mostraria as informações dos usuários. Esse projeto foi desenvolvido por mim durante um processo seletivo na [Colab](https://www.colab.re/).
  
![print da aplicação](https://github.com/Renan0211/random-user/blob/6ecbf576ebeb194a5fa776505f1a1c66a1390b2a/public/Captura%20de%20tela%20de%202021-11-19%2011-14-52.png) 

# Sumário
- [Como foi desenvolver esse projeto](#como-foi-desenvolver-esse-projeto)

- [Como rodar o projeto](#como-rodar-o-projeto)

---


# Como foi desenvolver esse projeto

O desenvolvimento desse projeto não foi muito desafiador como um todo, utilizei tecnologias as quais eu já estava acostumado: [React](https://pt-br.reactjs.org/), [Bootstrap](https://getbootstrap.com/), [React-Bootstrap](https://react-bootstrap.github.io/).

Apesar de ter utilizado tecnologias que estou acostumado tentei duas coisas novas: alterei a cor padrão da classe `primary` do Bootstrap e usei o componente de `OffCanvas` do React-Bootstrap. Essas duas partes foram as mais desafiadoras. 
Principalmente a parte de alterar a cor padrão do Bootstrap, como é possível ver pelo histórico de commits. Eu nunca tinha feito isso com sucesso e não sou muito acostumado a usar variáveis em CSS, então me perdi um pouco nessa parte mas consegui resolver no final.
A parte de usar o OffCanvas foi muito legal, já havia algum tempo que eu queria utilizar ela em algum projeto e nesse a oportunidade perfeita surgiu. A criação do OffCanvas em si não foi tão difícil, mas eu sofri um pouco na estilização dele. Meu erro foi tentar usar as classes de flex-box do Bootstrap para fazer as três colunas com informações do usuário sendo que o próprio Bootstrap e o React-Bootstrap oferecem componentes que servem exatamente para isso: fazer colunas. Depois que percebi isso e decidi usar os componentes `Row` e `Col` do React-Bootstrap o resultado desejado veio com facilidade.

O resultado final ficou do jeito que eu queria: uma página inicial com cards dos usuários e a imagem deles bem evidente, mostrando o rosto de cada um deles. Mas também é possível clicar no botão de "Saiba mais" e ter mais informações sobre o usuário. 
  


# Como rodar o projeto

Você pode checkar o projeto online [aqui](https://renan0211.github.io/). Caso prefira rodar ele localmente, siga as instruções abaixo.
:warning: Para essas instruções é considerado que você está utilizando o linux como sistema operacional. :warning:

1. Clone o repositório:
	```bash
	git clone git@github.com:Renan0211/random-user.git
	```


2. Entre no diretório do projeto
	```bash
	cd random-user
	```
3. Instale as dependências
	```bash
	npm install
	```
4. Rode o projeto :grin:
	```bash
	npm start
	```
  
