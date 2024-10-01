<p align='center' >
  <img width="250px" loading="lazy" src = "https://github.com/Geral-cp-s/Sprint-Edge/assets/110639916/aa204473-bba7-4dc2-8db1-ea5744b8e9bc"/>
</p>
<h1 align="Center">Loja de Carros Elétricos</h1>

# Índice
* [1 - Descrição do Projeto](#descricao)
* [2 - Estrutura do Projeto](#componentes)
*   [2.1 - Componentes](#C)
*   [2.2 - Routes](#R)
* [Funcionalidades](#funcionalidades)
* [Requisitos de Instalação:](#exibicao)
* [Estilização](#estilizacao)
* [Tecnologias Utilizadas](#tec)
* [Autores](#autores)


<h2 id="Descricao">Descrição do projeto</h2>
<p>Este projeto consiste em desenvolver uma aplicação web para uma Loja de Carros Elétricos, utilizando o framework React. A aplicação permite aos usuários navegar por diferentes páginas, cadastrar e visualizar produtos, além de realizar o login e logout de forma segura.</p>

<h2 id="Componentes">Estrutura do Projeto</h2>
<p>O projeto está organizado da seguinte maneira:</p>
<h3 id="DeC">Diretórios e Componentes:</h3>
  <ul>
    <li id="C"><strong>components/</strong> Contém os componentes reutilizáveis da aplicação.</li>
    <ul>
      <li><strong>Nav.jsx</strong> Barra de navegação com links para as principais páginas (Home, Produtos, Sobre e Login).</li>
      <li><strong>Footer.jsx</strong> Rodapé com ícones de redes sociais (Facebook, Instagram, LinkedIn) e e-mail.</li>
    </ul>
    <li id="R'><strong>routes/</strong> Contém os componentes das páginas da aplicação.</li>
    <ul>
      <li><strong>Error.jsx</strong> Página de erro (exibida quando uma rota não é encontrada).</li>
      <li><strong>Home.jsx</strong> Página inicial com título, slideshow de imagens, texto sobre o tema e cards de produtos com imagem, descrição e preço.</li>
      <li><strong>Login.jsx</strong> Página de login com campos de usuário e senha. Armazena os dados de login de forma criptografada no SessionStorage.</li>
      <li><strong>Produtos.jsx</strong> Exibe uma tabela com a lista de produtos cadastrados e botão para adicionar novos produtos.</li>
      <li><strong>Sobre.jsx</strong> Página com informações sobre a loja e os desenvolvedores.</li>
      <li><strong>CadastrarProdutos.jsx</strong> Formulário para adicionar novos produtos à loja, integrado com o JSON Server.</li>
      <li><strong>Produtos.jsx</strong> Página com informações sobre a loja e os desenvolvedores.</li>
    </ul>
  </ul>

  <h2 id="funcionalidades">Funcionalidades</h2>
  
 - `Funcionalidade 1` Roteamento: Utilização de Router Provider e Children para gerenciar as rotas no arquivo main.jsx.

 - `Funcionalidade 2` App.jsx: Componentes principais Nav, Outlet e Footer são chamados aqui para garantir a navegação constante pela aplicação.

 - `Funcionalidade 3` Nav: Contém links para as páginas de Home, Produtos, Sobre e Login. O botão de Login redireciona o usuário para a tela de cadastrar produto.
   
 - `Funcionalidade 4` SessionStorage: Login e senha são armazenados de forma criptografada, e há opção de logout para limpar os dados.
   
 - `Funcionalidade 5` Cadastro de Produtos: Utiliza um formulário para cadastrar novos produtos, que são salvos e recuperados através do JSON Server.

<h2 id="exibicao">Requisitos de Instalação:</h2>
<ul>
  <li><strong>Node.js</strong> Certifique-se de que o Node.js está instalado em sua máquina.</li>
  <li><strong>JSON Server</strong> Para o backend simulado, o JSON Server será utilizado para armazenar os dados dos produtos.</li>
</ul>

<h2 id="estilizacao">Estilização</h2>
<p>A estilização do projeto é flexível e está a cargo da equipe. Sugere-se o uso de styled-components para criar componentes estilizados, garantindo uma melhor organização e reutilização do código CSS.</p>

<h2 id="tec">Tecnologias Utilizadas</h2>
<ul>
  <li><strong>React:</strong> Biblioteca JavaScript para construção da interface.</li>
  <li><strong>React Router:</strong> Biblioteca de roteamento para navegação SPA (Single Page Application).</li>
  <li><strong>JSON Server:</strong> Simulador de uma API REST para persistência de dados.</li>
  <li><strong>React Icons:</strong> Utilizado para ícones de redes sociais no footer.</li>
  <li><strong>SessionStorage:</strong> Para gerenciamento de sessões com login criptografado.</li>
</ul>

<h2 id="Autores">Autores</h2>

<div align="center">
  
| [<img loading="lazy" src="https://github.com/gvqsilva/CP2-Edge/assets/110639916/d022ed18-0057-4944-9e00-db796c6d2e45" width=115><br><sub>Gabriel Vasquez</sub>](https://github.com/gvqsilva)  |  [<img loading="lazy" src="https://github.com/gvqsilva/CP2-Web/assets/110639916/1eb7df1a-c0e8-4170-aabf-444cfb3c64f9" width=115><br><sub>Guilherme Araujo</sub>](https://github.com/guilhermearaujodec)  |  [<img loading="lazy" src="https://github.com/gvqsilva/CP2-Edge/assets/110639916/86514492-2b1e-4422-bdc0-0ec3c8be3dcc" width=115><br><sub>Augusto Douglas</sub>](https://github.com/gutomend)  |  [<img loading="lazy" src="https://github.com/gvqsilva/CP2-Edge/assets/110639916/4bb3084d-d1ff-4b49-ba37-96c8046f6e14" width=115><br><sub>Gustavo Oliveira</sub>](https://github.com/Gusta346) |
| :---: | :---: | :---: | :---: |

<ul>
  <li>Gabriel Vasquez - RM: 557056</li>
  <li>Guilherme Araujo - RM: 558926</li>
  <li>Gustavo Oliveira - RM: 559163</li>
  <li>Augusto Mendonça - RM: 558371</li>
</ul><br>

</div>
