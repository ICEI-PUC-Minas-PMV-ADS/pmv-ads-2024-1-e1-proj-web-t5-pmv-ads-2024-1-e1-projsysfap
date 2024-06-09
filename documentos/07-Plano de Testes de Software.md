# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projsysfap/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projsysfap/blob/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar a Atualização de Quantidade de Produtos</td>
  <td>
   <ul>
    <li>RF-07: Fornecer ao usuário as informações dos produtos(preço, características, quantidade, descrição do produto);</li>
   <li>RF-08: Ser capaz de realizar a contagem de mercadorias em estoque.</li>
    </ul>
  </td>
  <td>Verificar se a função calcularQuantidadeProdutosLocalStorage calcula corretamente a quantidade total de produtos no LocalStorage e se a função atualizarElemento atualiza corretamente o texto do elemento HTML.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Adicionar produtos ao LocalStorage</li>
    <li>Chamar a função "calcularQuantidadeProdutosLocalStorage."</li>
    <li>Chamar a função "atualizarElemento" com o ID do elemento HTML e o valor retornado pela função de cálculo.</li>
    <li>Verificar se o texto do elemento HTML foi atualizado corretamente.</li>
   </ol>
   </td>
  <td>A quantidade total de produtos deve ser calculada corretamente e o texto do elemento HTML deve ser atualizado com a quantidade correta.</td>
  <td>Gabriel</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar a atualização da quantidade de vendas e de pedidos.  </td>
  <td>
   <ul>
    <li>RF-12: Permitir que o vendedor e o gerente visualize as informações sobre os pedidos(preço, quantidade, quantidade de total de pedidos).</li>
   </ul>
  </td>
  <td>Verificar se a função "calcularQuantidadePedidosLocalStorage" calcula corretamente a quantidade total de pedidos no LocalStorage e se a função atualizarElemento atualiza corretamente o texto do elemento HTML.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Chamar a função "calcularQuantidadePedidosLocalStorage".</li>
    <li>Chamar a função atualizarElemento com o ID do elemento HTML e o valor retornado pela função de cálculo. </li>
    <li>Verificar se o texto do elemento HTML foi atualizado corretamente.</li>
   </ol>
   </td>
  <td>A quantidade total de pedidos deve ser calculada corretamente e o texto do elemento HTML deve ser atualizado com a quantidade correta.</td>
  <td>Gabriel</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>  
 </tr>
 <tr>
  <td>CT-03: Verifica a atualização do valor total de vendas e se os valores estão sendo exibidos em R$.</td>
  <td>
   <ul>
    <li>RF-13:	Permitir que o vendedor e o gerente visualizem o valor total das vendas.</li>
     </ul>
  </td>
  <td>Verificar se todas as informações referentes aos livros estão disponíveis na página Livros</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Adicionar pedidos ao LocalStorage com valores de venda.</li>
    <li>Chamar a função calcularTotalVendas.</li>
    <li>Chama a função que atualiza os valores para R$</li>
    <li>Chamar a função atualizarElemento com o ID do elemento HTML e o valor formatado retornado pela função de cálculo.</li>
    <li>Verificar se o texto do elemento HTML foi atualizado corretamente.</li>
   </ol>
   </td>
  <td>O valor total das vendas deve ser calculado e formatado corretamente e o texto do elemento HTML deve ser atualizado com o valor correto.</td>
  <td>Gabriel</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Verificar a Visualização de Pedidos Recentes</td>
  <td>
   <ul>
    <li>RF-11: O sistema deve permitir ao vendedor e ao gerente a visualização dos pedidos realizados;</li>
    <li>RF-03: Gerar relatórios das últimas movimentações, por período.</li>
   </ul>
  </td>
  <td>Verificar se os pedidos recentes são carregados corretamente do LocalStorage e se as imagens correspondentes aos produtos são exibidas corretamente.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Verificar console.log de pedidos recentes</li>
    <li>Verificar se os pedidos recentes são exibidos corretamente com as imagens correspondentes.</li>
    </ol>
   </td>
  <td>Os pedidos recentes devem ser exibidos corretamente com as imagens correspondentes aos produtos.</td>
  <td>Gabriel</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-05: Verificar o login de usuários</td>
  <td>
   <ul>
   <li>RF-002: O site deve permitir ao usuário fazer o login da sua conta.</li>
   </ul>
  </td>
  <td>Verificar se o login está sendo feito corretamente. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Entrar”, no menu.</li>
    <li>Preencher seus dados e clicar em “Entrar”.</li>
   </ol>
   </td>
  <td>Após o login, o usuário deverá ser redirecionado para a sua página de perfil.</td>
  <td>Maria</td>
 </tr>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-06: Verificar o cadastro de livros</td>
  <td>
   <ul>
   <li>RF-004	O site deve permitir ao usuário fazer o cadastro de livros.</li>
   </ul>
  </td>
  <td>Verificar se o cadastro de livros está sendo feito corretamente. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Entrar”, no menu.</li>
    <li>Preencher seus dados e clicar em “Entrar”.</li>
    <li>Visualizar a página Perfil.</li>
    <li>Clicar em “Cadastro de livros”, no menu.</li>
    <li>Visualizar a página Cadastro de Livros.</li>
    <li>Inserir as informações sobre o livro.</li>
    <li>Clicar em “Cadastrar”.</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Cadastrar", deve aparecer a mensagem "Livro cadastrado com sucesso".</td>
  <td>João</td>
 </tr>
</table>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-07: Verificar o cadastro de tutores</td>
  <td>
   <ul>
   <li>RF-005	O site deve permitir ao usuário disponibilizar informações das disciplinas de tutoria e suas informações para contato.</li>
   </ul>
  </td>
  <td>Verificar se o cadastro de tutores está sendo feito corretamente. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Entrar”, no menu.</li>
    <li>Preencher seus dados e clicar em “Entrar”.</li>
    <li>Visualizar a página Perfil.</li>
    <li>Clicar em “Cadastro de tutores”, no menu.</li>
    <li>Visualizar a página Cadastro de Tutores.</li>
    <li>Inserir as informações sobre o tutor.</li>
    <li>Clicar em “Cadastrar”.</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Cadastrar", deve aparecer a mensagem "Tutoria cadastrada com sucesso".</td>
  <td>Beatriz</td>
 </tr>
</table>
 
 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-08: Verificar a página de Tutores</td>
  <td>
   <ul>
   <li>RF-008	O site deve permitir ao usuário visualizar os detalhes dos tutores.</li>
   </ul>
  </td>
  <td>Verificar os detalhes dos Tutores e visualizar seus respectivos perfis. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Tutores”, no menu.</li>
    <li>Visualizar a página "Tutores".</li>
    <li>Na página "Tutores", é possível visualizar os perfis com foto e informações dos tutores, além da barra de pesquisa acima dos perfis.</li>
  
   </ul>
   </ol>
   </td>
  <td>Deve ser possível visualizar todos os perfis de Tutores, com suas respectivas fotos e informações, além da visualização da barra de pesquisa acima dos perfis.</td>
  <td>Pedro</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-09: Verificar a página de perfil de usuários cadastrados</td>
  <td>
   <ul>
   <li>RF-009	O site deve permitir ao usuário verificar as informações registradas no cadastro na página Perfil, após fazer seu login.</li>
   </ul>
  </td>
  <td>Verificar se a página Perfil está apresentando as informações cadastradas pelo usuário corretamente. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em "Cadastre-se", no Menu.</li>
    <li>Preencher o formulário e clicar em “Cadastrar”.</li>
    <li>Visualizar a página Login.</li>
    <li>Preencher seus dados e clicar em “Entrar”.</li>
    <li>Visualizar a página Perfil.</li>
   </ol>
   </td>
  <td>As informações registradas pelo usuário no momento do cadastro devem estar disponibilizadas na página Perfil.</td>
  <td>Silvia</td>
 </tr>
</table>