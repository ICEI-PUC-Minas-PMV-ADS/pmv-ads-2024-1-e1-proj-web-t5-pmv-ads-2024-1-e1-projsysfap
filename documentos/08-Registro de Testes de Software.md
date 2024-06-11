# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projsysfap/blob/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projsysfap/blob/main/documentos/07-Plano%20de%20Testes%20de%20Software.md"> Plano de Testes de Software</a>

Os testes funcionais realizados na aplicação web são descritos a seguir.

<ol>
  <li> CT-01: Verificar a Atualização de Quantidade de Produtos

  Responsável: Gabriel.

  <p>No teste em questão foi verificado se a função responsável por calcular a quantidade de total e a quantidade de produtos ativos estava funcionando corretamente, logo em seguida foi feita a verificação da função "atualizarElemento" responsável por atualizar os elementos correspondentes no HTML.</p>

<img src="img/Caso de teste 01.png" alt="Caso de teste 01">

  </li>
  <hr>
  
  <li> CT-02: Verificação da atualização da quantidade de vendas e de pedidos.

  Responsável: Gabriel.
    
  <p>No teste em questão foi verificado se a função responsável por calcular a quantidade de vendas e de pedidos estava funcionando corretamente, logo em seguida foi feita a verificação da função "atualizarElemento" responsável por atualizar os elementos correspondentes no HTML.</p>
    
<img src="img/Caso de teste 02.png" alt="Caso de teste 02">

  </li>
  <hr>
  
  <li> CT-03: Verifica a atualização do valor total de vendas e se os valores estão sendo exibidos em R$.

Responsável: Gabriel.

  <p>No teste em questão foi verificado o funcionamento da função responsavel por calcular o valor total das vendas, em seguida se a variavel formattedTotalVendas estava retornando o valor formatado corretamente para "R$" e finalmente após isso foi feita a verificação da função "atualizarElemento" responsável por atualizar os elementos correspondentes no HTML. </p>

<img src="img/Caso de teste 03.png" alt="Caso de teste 03">

  </li>
  <hr>
  
  <li> CT-04:  Verificar a Visualização de Pedidos Recentes
   
  Responsável: Gabriel. 
   
   <p>No teste em questão foi checado através do console, o console.log responsável por informar os pedidos recentes, logo em seguida se todos os pedidos estavam com os icones correspondentes corretos</p>
  
  <img src="img/Caso de teste 04.png" alt="Caso de teste 04">

  </li>
  <hr>


  <li> CT-05: Verificar se o gráfico exibe os valores corretos de vendas por mês.

  Responsável: Gabriel
  
   <p>No teste em questão é checado através do console, o console.log responsável por informar a quantidade de vendas por mês, logo em seguida podemos visualizar no gráfico se os valores correspondem ao valor informado no LOG. </p>
  
  
  <img src="img/Caso de teste 05.png" alt="Caso de teste 05">


  </li>   
  </ol>
    

## Avaliação

Os testes de software mostraram que os requisitos priorizados foram atendidos, funcionando como planejado. Para as próximas iterações, serão acrescentadas melhorias no layout e responsividade da aplicação.