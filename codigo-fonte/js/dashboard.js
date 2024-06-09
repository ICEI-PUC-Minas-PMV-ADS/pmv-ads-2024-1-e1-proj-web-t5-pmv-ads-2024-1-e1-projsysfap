// Atualiza o elemento no HTML com o texto fornecido
// Define a função atualizarElemento
function atualizarElemento(elementId, value) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = value;
        return `Elemento com ID "${elementId}" atualizado com valor "${value}".`;
    } else {
        console.error(`Elemento com ID "${elementId}" não encontrado.`);
        return `Erro: Elemento com ID "${elementId}" não encontrado.`;
    }
}

// Carregar dados genéricos do localStorage
function carregarDadosGenericosDoLocalStorage(chave) {
    const dados = localStorage.getItem(chave);
    return dados ? JSON.parse(dados) : [];
}

// Adicionar clientes ao localStorage, verificando se já existem
async function adicionarClientesAoLocalStorage(url) {
    try {
        // Verifica se os clientes já foram adicionados
        if (localStorage.getItem('clientes')) {
            console.log('Clientes já estão armazenados no localStorage.');
            return;
        }

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON');
        }
        const jsonClientes = await response.json();
        if (jsonClientes.users && Array.isArray(jsonClientes.users)) {
            localStorage.setItem('clientes', JSON.stringify(jsonClientes.users));
            console.log('Clientes adicionados ao localStorage:', jsonClientes.users);
        } else {
            console.error('A estrutura dos dados não é a esperada:', jsonClientes);
        }
    } catch (error) {
        console.error('Erro ao carregar os clientes:', error);
    }
}

adicionarClientesAoLocalStorage('../data/users.json');

// JSON de clientes
const urlClientes = '../data/users.json';


// Carregar dados dos clientes do localStorage
const clientes = carregarDadosGenericosDoLocalStorage('clientes');
const quantidadeClientes = clientes.length;
atualizarElemento('clientes', quantidadeClientes);

// Adicionar produtos ao localStorage
async function adicionarProdutosAoLocalStorage(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON');
        }

        const jsonProdutos = await response.json();

        if (Array.isArray(jsonProdutos)) {
            // Verifica se os produtos já foram adicionados
            const produtosLocalStorage = localStorage.getItem('products');
            if (produtosLocalStorage) {
                try {
                    const produtosLocalStorageArray = JSON.parse(produtosLocalStorage);
                    if (!Array.isArray(produtosLocalStorageArray)) {
                        throw new Error('Os dados armazenados não são um array');
                    }

                    const produtosIdsLocalStorage = produtosLocalStorageArray.map(produto => produto.id);

                    // Verifica se todos os produtos já estão no localStorage
                    const produtosFaltantes = jsonProdutos.filter(produto => !produtosIdsLocalStorage.includes(produto.id));

                    // Se tiver faltando algum produto adiciona
                    if (produtosFaltantes.length > 0) {
                        console.log('Produtos faltantes encontrados. Adicionando ao localStorage...');
                        const produtosAtualizados = [...produtosLocalStorageArray, ...produtosFaltantes];
                        localStorage.setItem('products', JSON.stringify(produtosAtualizados));
                        console.log('Produtos atualizados no localStorage:', produtosAtualizados);
                    } else {
                        console.log('Todos os produtos já estão armazenados no localStorage.');
                    }
                } catch (error) {
                    console.error('Erro ao processar dados do localStorage:', error);
                    // Remove os itens se o arquivo estiver com algumn erro
                    localStorage.removeItem('products');
                    // Adiciona novamente os itens corrigidos
                    localStorage.setItem('products', JSON.stringify(jsonProdutos));
                    console.log('Produtos adicionados ao localStorage:', jsonProdutos);
                }
            } else {
                // Se não houver produtos no localStorage, adiciona todos os produtos do JSON
                localStorage.setItem('products', JSON.stringify(jsonProdutos));
                console.log('Produtos adicionados ao localStorage:', jsonProdutos);
            }
        } else {
            console.error('Os dados retornados não são um array:', jsonProdutos);
        }
    } catch (error) {
        console.error('Erro ao carregar os produtos:', error);
    }
}
adicionarProdutosAoLocalStorage('../data/products.json');

// JSON de produtos
const urlProdutos = '../data/products.json';

// Calcula quantidade total de produtos no localStorage
function calcularQuantidadeProdutosLocalStorage() {
    const produtosLocalStorage = localStorage.getItem('products');
    let tamanhoTotal = 0; // Inicialize a variável aqui
    let produtosAtivos = 0; // Inicialize a variável para produtos ativos

    if (produtosLocalStorage) {
        try {
            const produtosArray = JSON.parse(produtosLocalStorage);
            tamanhoTotal = produtosArray.length;
            console.log('Quantidade total de produtos no localStorage:', tamanhoTotal);

            // Calcula quantidade de produtos em estoque
            produtosAtivos = produtosArray.filter(produto => produto.instock > 0).length;
            console.log('Quantidade de produtos ativos:', produtosAtivos);
        } catch (error) {
            console.error('Erro ao analisar os dados do localStorage:', error);
        }
    } else {
        console.log('Não há produtos armazenados no localStorage.');
    }

    return { tamanhoTotal, produtosAtivos };
}

const { tamanhoTotal, produtosAtivos } = calcularQuantidadeProdutosLocalStorage();

// Atualizar a quantidade de produtos e de produtos ativos
atualizarElemento('quantidadeProdutos', tamanhoTotal);
atualizarElemento('produtosAtivos', produtosAtivos);

// Adicionar pedidos ao localStorage
async function adicionarPedidosAoLocalStorage(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON de pedidos');
        }

        const jsonPedidos = await response.json();

        if (Array.isArray(jsonPedidos)) {
            // Verifica se os pedidos já foram adicionados
            const pedidosLocalStorage = localStorage.getItem('orders');
            if (pedidosLocalStorage) {
                try {
                    const pedidosLocalStorageArray = JSON.parse(pedidosLocalStorage);
                    if (!Array.isArray(pedidosLocalStorageArray)) {
                        throw new Error('Os dados armazenados não são um array');
                    }

                    const pedidosIdsLocalStorage = pedidosLocalStorageArray.map(pedido => pedido.id);

                    // Verifica os pedidos que estão faltando no localstorage
                    const pedidosFaltantes = jsonPedidos.filter(pedido => !pedidosIdsLocalStorage.includes(pedido.id));

                    // Adiciona os pedidos em falta
                    if (pedidosFaltantes.length > 0) {
                        console.log('Pedidos faltantes encontrados. Adicionando ao localStorage...');
                        const pedidosAtualizados = [...pedidosLocalStorageArray, ...pedidosFaltantes];
                        localStorage.setItem('orders', JSON.stringify(pedidosAtualizados));
                        console.log('Pedidos atualizados no localStorage:', pedidosAtualizados);
                    } else {
                        console.log('Todos os pedidos já estão armazenados no localStorage.');
                    }
                } catch (error) {
                    console.error('Erro ao processar dados do localStorage:', error);
                    // Se ocorrer um erro ao processar os dados do localStorage, limpe os dados antigos
                    localStorage.removeItem('orders');
                    // Adicione os pedidos do JSON ao localStorage novamente
                    localStorage.setItem('orders', JSON.stringify(jsonPedidos));
                    console.log('Pedidos adicionados ao localStorage:', jsonPedidos);
                }
            } else {
                // Se não houver pedidos no localStorage, adiciona todos os pedidos do JSON
                localStorage.setItem('orders', JSON.stringify(jsonPedidos));
                console.log('Pedidos adicionados ao localStorage:', jsonPedidos);
            }
        } else {
            console.error('Os dados retornados não são um array:', jsonPedidos);
        }
    } catch (error) {
        console.error('Erro ao carregar os pedidos:', error);
    }
}

adicionarPedidosAoLocalStorage('../data/orderData.json');

// Calcular quantidade total de pedidos no localStorage
function calcularQuantidadePedidosLocalStorage() {
    const pedidosLocalStorage = localStorage.getItem('orders');
    let quantidadePedidos = 0;

    if (pedidosLocalStorage) {
        try {
            const pedidosArray = JSON.parse(pedidosLocalStorage);
            quantidadePedidos = pedidosArray.length;
            console.log('Quantidade total de pedidos no localStorage:', quantidadePedidos);
        } catch (error) {
            console.error('Erro ao analisar os dados do localStorage:', error);
        }
    } else {
        console.log('Não há pedidos armazenados no localStorage.');
    }

    return quantidadePedidos;
}

const quantidadePedidos = calcularQuantidadePedidosLocalStorage();
console.log('Quantidade de pedidos:', quantidadePedidos);

// Atualizar o numero de pedidos
atualizarElemento('numeroPedidos', quantidadePedidos);

// Atualizar a quantidade de vendas
atualizarElemento('quantidadeVendas', quantidadePedidos);

// Função para calcular o total das vendas com base nos orders armazenados no localStorage
function calcularTotalVendas() {
    const ordersLocalStorage = localStorage.getItem('orders');
    if (ordersLocalStorage) {
        try {
            const orders = JSON.parse(ordersLocalStorage);
            const totalVendas = orders.reduce((acc, curr) => acc + curr.totalOrder, 0);


            console.log('Valor total dos pedidos:', totalVendas);

            return totalVendas;
        } catch (error) {
            console.error('Erro ao analisar os dados do localStorage de orders:', error);
            return 0;
        }
    } else {
        console.log('Não há orders armazenados no localStorage.');
        return 0;
    }
}

const totalVendas = calcularTotalVendas();

// Formata o total das vendas para R$
const formattedTotalVendas = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}).format(totalVendas);

// Atualiza o valor total das vendas
atualizarElemento('volumeVendas', formattedTotalVendas);

// Carregar pedidos do localStorage
const pedidosLocalStorage = localStorage.getItem('orders');

if (pedidosLocalStorage) {
    try {
        const pedidosRecentes = JSON.parse(pedidosLocalStorage).slice(-9).reverse();

        console.log('Pedidos recentes:', pedidosRecentes);

        const iconesProdutos = {
            "Aro Cromado": "../assets/img/aro cromado.png",
            "Roda de liga leve": "../assets/img/rodaligaleve.png",
            "Vela de Ignicao": "../assets/img/vela.jpeg",
            "Pneu": "../assets/img/pneu.png",
            "Carburador": "../carburador.png",
            "Filtro de Ar": "../assets/img/filtroDeAr.png",
            "Amortecedor": "../assets/img/amortecedor.png",
            "Sensor de Oxigênio": "../assets/img/sensorOxigenio.png",
            "Junta do Cabeçote": "../assets/img/juntaCabecote.png",
            "Pastilha de Freio": "../assets/img/pastilhaFreio.png",
            "Correia Dentada": "../assets/img/correiaDentada.png"
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
    } catch (error) {
        console.error('Ocorreu um erro ao processar os pedidos do localStorage:', error);
    }
} else {
    console.log('Não há pedidos armazenados no localStorage.');
}


if (pedidosLocalStorage) {
    try {
        const pedidos = JSON.parse(pedidosLocalStorage);

        // Processamento dos dados para calcular o valor de vendas por mês
        const salesByMonth = {};
        pedidos.forEach(order => {
            const month = new Date(order.orderDate).toLocaleString('default', { month: 'long' });
            if (!salesByMonth[month]) {
                salesByMonth[month] = 0;
            }
            salesByMonth[month] += order.totalOrder;
        });

        console.log('Total de vendas por mês:', salesByMonth);

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
    } catch (error) {
        console.error('Ocorreu um erro ao processar os pedidos do localStorage:', error);
    }
} else {
    console.log('Não há pedidos armazenados no localStorage.');
}