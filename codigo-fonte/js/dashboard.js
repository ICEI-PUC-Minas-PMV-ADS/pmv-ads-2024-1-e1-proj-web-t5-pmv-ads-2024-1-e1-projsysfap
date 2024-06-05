// Função para carregar dados de JSON
function carregarDados(url) {
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(`Falha ao carregar o arquivo JSON: ${url}`);
        }
        return response.json();
    });
}

// Atualiza o elemento do DOM com o texto fornecido
function atualizarElemento(id, texto) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = texto;
    } else {
        console.error(`Elemento com id "${id}" não encontrado.`);
    }
}

// Carregar dados dos pedidos
carregarDados('../data/orderData.json').then(data => {
    // Soma o valor das vendas
    const totalOrderSoma = data.reduce((acc, curr) => acc + curr.totalOrder, 0);
    const formattedTotalOrderSoma = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(totalOrderSoma);
    atualizarElemento('volumeVendas', formattedTotalOrderSoma);

    // Calcula a quantidade de pedidos
    const totalPedidos = data.length;
    atualizarElemento('quantidadeVendas', totalPedidos);
    atualizarElemento('numeroPedidos', totalPedidos);

    // Processamento dos dados para calcular o valor de vendas por mês
    const salesByMonth = {};
    data.forEach(order => {
        const month = new Date(order.orderDate).toLocaleString('default', { month: 'long' });
        if (!salesByMonth[month]) {
            salesByMonth[month] = 0;
        }
        salesByMonth[month] += order.totalOrder;
    });

    // Criação dos dados para o gráfico
    const labels = Object.keys(salesByMonth);
    const values = Object.values(salesByMonth);

    // Dados para o gráfico
    const chartData = {
        labels: labels,
        datasets: [{
            label: 'Total de Vendas por Mês',
            data: values,
            backgroundColor: 'rgba(85, 112, 241, 1)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            borderRadius: 50,
            barThickness: 13,
        }]
    };

    // Configuração do gráfico
    const config = {
        type: 'bar',
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    // Inicializando o gráfico
    new Chart(document.getElementById('myBarChart'), config);

    // Exibe os 9 últimos pedidos
    let pedidosRecentes = data.slice(-9).reverse();
    const iconesProdutos = {
        "Aro Cromado": "../assets/img/aro cromado.png",
        "Roda de liga leve": "../assets/img/pngegg.png",
        "Vela de Ignicao": "../assets/img/vela.jpeg",
        "Pneu": "../assets/img/pngegg (1).png",
        "Carburador": "../assets/img/pngegg (2).png",
        "Filtro de Ar": "../assets/img/pngegg (3).png",
        "Amortecedor": "../assets/img/pngegg (4).png",
        "Sensor de Oxigênio": "../assets/img/pngegg (5).png",
        "Junta do Cabeçote": "../assets/img/image-removebg-preview_-_2022-07-26t121615.448 (1).png",
        "Pastilha de Freio": "../assets/img/pngegg (7).png",
        "Correia Dentada": "../assets/img/pngegg (8).png"
    };

    pedidosRecentes.forEach((pedido, index) => {
        const iconSrc = iconesProdutos[pedido.product];
        if (iconSrc) {
            const iconElement = document.getElementById("icone" + (index + 1));
            if (iconElement) {
                iconElement.setAttribute("src", iconSrc);
            }
        }
        atualizarElemento("produto" + (index + 1), pedido.product);
        atualizarElemento("preco" + (index + 1), `R$${pedido.totalOrder} x ${pedido.amount}`);
        const dataPedido = new Date(pedido.orderDate);
        const formattedDate = `${dataPedido.getDate().toString().padStart(2, '0')}/${(dataPedido.getMonth() + 1).toString().padStart(2, '0')}/${dataPedido.getFullYear()}`;
        atualizarElemento("dataPedido" + (index + 1), formattedDate);
    });
}).catch(error => {
    console.error('Ocorreu um erro:', error);
});

// Carregar dados dos clientes
carregarDados('../data/users.json').then(data => {
    const users = data.users;
    const quantidadeClientes = users.length;
    atualizarElemento('clientes', quantidadeClientes);
}).catch(error => {
    console.error('Ocorreu um erro:', error);
});

// Carregar dados dos produtos
carregarDados('../data/products.json').then(data => {
    const numeroProdutos = data.length;
    atualizarElemento('quantidadeProdutos', numeroProdutos);

    const produtosDisponiveis = data.filter(produto => produto.instock > 0);
    const produtosAtivos = produtosDisponiveis.length;
    atualizarElemento('produtosAtivos', produtosAtivos);
}).catch(error => {
    console.error('Ocorreu um erro:', error);
});
