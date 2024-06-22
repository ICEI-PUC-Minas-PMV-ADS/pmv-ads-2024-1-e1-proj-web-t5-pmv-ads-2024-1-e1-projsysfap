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
    <li>Abrir o console do desenvolvedor (Ctrl + Shift + I no Chrome)</li>
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
    <li>Abrir o console do desenvolvedor (Ctrl + Shift + I no Chrome)</li>
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
    <li>Abrir o console do desenvolvedor (Ctrl + Shift + I no Chrome)</li>
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
    <li>Abrir o console do desenvolvedor (Ctrl + Shift + I no Chrome)</li>
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
  <td>CT-05: Verificar se o gráfico exibe os valores corretos de vendas por mês.</td>
  <td>
   <ul>
   <li>RF-14: O site deve permitir ao vendedor e ao gerente visualizar um gráfico com o total de vendas por mês.</li>
   </ul>
  </td>
  <td>Verificar se o gráfico exibe os valores corretos de vendas por mês exibidos no LOG de vendas por mês. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Abrir o console do desenvolvedor (Ctrl + Shift + I no Chrome)</li>
    <li>Verificar o LOG de vendas por mês</li>
    <li>Verificar se os valores do gráficos correspondem aos valores presentes no LOG</li>
   </ol>
   </td>
  <td>Após o login, o usuário deverá ser redirecionado para a sua página de perfil.</td>
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
  <td>CT-06: Verificar login do usuário.</td>
  <td>
   <ul>
   <li>RF-10: O sistema deve permitir ao usuario que possa realizar cadastro e fazer login no site.</li>
   </ul>
  </td>
  <td>Verificar se o login está funcionando corretamente. </td>
  <td>
   <ol>
    <li>Acessar a página de login.</li>
    <li>Preencher os campos corretamente e clicar em "Entrar".</li>
   </ol>
   </td>
  <td>Após o login, o usuário será direcionado a página inicial do dashboard de acordo com o seu perfil de acesso.</td>
  <td>Erycson José</td>
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
  <td>CT-07: Verificar cadastro de usuário.</td>
  <td>
   <ul>
   <li>RF-10: O sistema deve permitir ao usuario que possa realizar cadastro e fazer login no site.</li>
   </ul>
  </td>
  <td>Verificar se o cadastro do usuário está sendo feito corretamente.</td>
  <td>
   <ol>
    <li>Acessar a página de cadastro.</li>
    <li>Preencher os campos corretamente e clicar em "Cadastra".</li>
   </ol>
   </td>
  <td>Após o cadastro realizado com sucesso, o usuário será direcionado a página inicial do dashboard de acordo com o seu perfil de acesso</td>
  <td>Erycson José</td>
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
  <td>CT-08: Verificar a página de pedidos.</td>
  <td>
   <ul>
   <li>RF-11: O sistema deve permitir ao vendedor e ao gerente a visualização dos pedidos realizados.</li>
   </ul>
  </td>
  <td>Verificar se a tabela de pedidos está atualizada e preenchida corretamente.</td>
  <td>
   <ol>
    <li>Realizar login.</li>
    <li>Acessar a página de pedidos.</li>
   </ol>
   </td>
  <td>Deve ser possível visualizar todos os pedidos realizados, com suas respectivas informações.</td>
  <td>Erycson José</td>
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
  <td>CT-09: Verificar a página do cliente.</td>
  <td>
   <ul>
   <li>RF-15: Permitir que o cliente realize pedidos.</li>
   </ul>
  </td>
  <td>Verificar se usuário com o perfil de acesso "cliente" consegue realizar pedidos.</td>
  <td>
   <ol>
    <li>Realizar login.</li>
    <li>Acessar a página de dashboard do cliente.</li>
   </ol>
   </td>
  <td>Deve ser possível visualizar todos os produtos cadastrados no sistema, selecionar o produto dejesável e a quantidade, adicionar os produtos no carrinho e realizar o pedido. Ao concluir o pedido a tabela de pedidos é atualizada.</td>
  <td>Erycson José</td>
 </tr>
</table>