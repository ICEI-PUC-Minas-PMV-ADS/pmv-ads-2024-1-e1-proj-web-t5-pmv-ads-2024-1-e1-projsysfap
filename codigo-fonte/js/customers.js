document.addEventListener("DOMContentLoaded", function() {
    // Função para carregar os usuários do arquivo JSON
    function loadUsersFromJSON(callback) {
      fetch('../data/users.json') // Carrega o arquivo JSON
        .then(response => response.json()) // Converte a resposta para JSON
        .then(data => callback(null, data.users)) // Chama o callback com os usuários
        .catch(error => callback(error, null)); // Em caso de erro, chama o callback com o erro
    }
    
    // Função para exibir os clientes na tabela
    function displayCustomers(data) {
      // Seleciona o corpo da tabela
      const clienteTableBody = document.getElementById("clienteTableBody");
  
      // Limpa qualquer conteúdo existente na tabela
      clienteTableBody.innerHTML = "";
  
      // Adiciona os clientes na tabela
      data.forEach(function(cliente) {
        const row = `
          <tr>
            <td>${cliente.fullName}</td>
            <td>${cliente.phoneNumber}</td>
            <td>${cliente.email}</td>
          </tr>
        `;
        clienteTableBody.innerHTML += row;
      });
    }
  
    // Chama a função para carregar os usuários e exibi-los na tabela
    loadUsersFromJSON((error, users) => {
      if (error) {
        console.error('Erro ao carregar usuários:', error);
        return;
      }
  
      // Exibe os clientes na tabela
      displayCustomers(users);
    });
  });
  