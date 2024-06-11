# Especificação do Projeto

## Perfis de Usuários


<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 1: Vendedor </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Vendedores de lojas de peças automotivas</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>1. Acesso fácil e rápido à contabilidade do estoque; 2.	Verificar a situação das peças no estoque; 3. Realizar registro de vendas.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 2: Gerente </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Gerentes de lojas de peças automotivas</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>1. Ter uma visão geral da movimentação do estoque; 2. Solicitar a reposição de itens no estoque; 3. Melhorar a eficiência da gestão de estoque; 4. Reduzir o tempo gasto em tarefas administrativas.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 3: Cliente </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Clientes de lojas de peças automotivas</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>1. Receber um bom atendimento; 2. Ver disponibilidade de peças; 3. Reduzir tempo de espera; 4. Visualizar informações do estoque; 5.	Fazer compras.</td>
</tr>
</tbody>
</table>

## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
|Gerente             |Um inventário de estoque preciso|Organizar melhor meu estoque|
|Gerente             |Uma visão geral da movimentação do  estoque | Controlar o fluxo e reposição de mercadorias |
|Gerente             |Gerar relatórios de vendas e estoque|Analisar o desempenho da loja e planejar estratégias futuras|
|Gerente             |Monitorar as atividades do sistema|Identificar e resolver problemas rapidamente|
|Vendedor            |Informações precisas sobre uma peça|Auxiliar no atendimento ao cliente|
|Vendedor            |Saber a quantidade de cada peça em estoque|Visualizar a disponibilidade de determinadas peças antes de finalizar uma venda|
|Vendedor            |Responder dúvidas dos clientes|Satisfação do cliente|
|Cliente             |Saber o preço de uma peça|Fazer orçamento|
|Cliente             |Visualizar informações dos produtos|Decidir quais itens comprar|
|Cliente             |Solicitar suporte ao vendedor|Obter ajuda quando tiver problemas ou dúvidas|


## Requisitos do Projeto

### Requisitos Funcionais

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |Listar as peças com filtros de classificação como ordem alfabética, por data de entrada, por quantidade de peças no estoque, entre outros                    | Alta   | 
| RF-02 |Buscar peças com critérios como nome, código, status (disponível, não disponível), data de entrada | Alta |
| RF-03 |Gerar relatórios das últimas movimentações, por período|Alta|
| RF-04 |Realizar as tarefas de CRUD - criar novas peças, recuperar as peças, editar e deletar|Alta|
| RF-05 |Permitir que o gerente adicione, remova e atualize usuários|Alta|
| RF-06 |Permitir que o cliente solicite suporte ao vendedor para resolver problemas ou dúvidas|Média|
| RF-07 |Permitir que o vendedor e o gerente visualize as informações dos produtos(preço, características, quantidade, descrição do produto)|Alta|
| RF-08 |Ser capaz de realizar a contagem de mercadorias em estoque|Alta|
| RF-09 |O sistema deve ter uma função para visualização do fluxo de mercadorias|Baixa|
| RF-10 |O sistema deve permitir ao usuario que possa realizar cadastro e fazer login no site|Alta|
| RF-11 |O sistema deve permitir ao vendedor e ao gerente a visualização dos pedidos realizados|Média|
| RF-12 |Permitir que o vendedor e o gerente visualize as informações sobre os pedidos(preço, quantidade, quantidade de total de pedidos)|Alta|
| RF-13 |Permitir que o vendedor e o gerente visualizem o valor total das vendas|Média|
| RF-14 | O site deve permitir ao vendedor e ao gerente visualizar um gráfico com o total de vendas por mês. | Baixa |
| RF-15 | Permitir que o cliente realize pedidos. | Alta |




**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 | Ser compatível com outros sistemas| Média   | 
| RNF-02 | Apresentar Web Design Responsivo | Alta   | 
| RNF-03 | Ser capaz de lidar com um aumento no número de usuários sem degradação significativa do desempenho|Média|
| RNF-04 |Ser acessível para pessoas com deficiência, seguindo as diretrizes de acessibilidade|Média|
| RNF-05 |Ser fácil de modificar e atualizar para atender às necessidades em constantes mudanças dos usuários e do mercado|Alta|
| RNF-06 |Implementar medidas de segurança robustas para proteger contra ataques cibernéticos e vazamentos de dados|Alta|
| RNF-07 |Ser fácil de usar, com uma interface intuitiva e amigável para todos os tipos de usuários|Alta|
| RNF-08 |Fazer uso eficiente dos recursos, como memória e processamento, para garantir um desempenho otimizado|Alta|
| RNF-09 |Ser produzido em javascript, html e css|Alta|

**Prioridade: Alta / Média / Baixa. 

