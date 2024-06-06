document.addEventListener("DOMContentLoaded", function () {
  // Função para carregar usuários do Local Storage
  function loadUsersFromLocalStorage() {
    return JSON.parse(localStorage.getItem("signupData")) || [];
  }

  // Função para salvar usuários no Local Storage
  function saveUsersToLocalStorage(users) {
    localStorage.setItem("signupData", JSON.stringify(users));
  }

  // Função para exibir os clientes na tabela
  function displayCustomers(data) {
    const clienteTableBody = document.getElementById("clienteTableBody");
    clienteTableBody.innerHTML = "";
    data.forEach((cliente, index) => {
      const row = `
            <tr>
                <td>${cliente.fullName}</td>
                <td>${cliente.phoneNumber}</td>
                <td>${cliente.email}</td>
                <td>
                    <button onclick="editCustomer(${index})">Editar</button>
                    <button onclick="deleteCustomer(${index})">Excluir</button>
                </td>
            </tr>
        `;
      clienteTableBody.innerHTML += row;
    });
  }

  // Função para adicionar um cliente
  function addCustomer(customer) {
    const users = loadUsersFromLocalStorage();
    users.push(customer);
    saveUsersToLocalStorage(users);
    displayCustomers(users);
  }

  // Função para atualizar um cliente
  function updateCustomer(index, customer) {
    const users = loadUsersFromLocalStorage();
    users[index] = customer;
    saveUsersToLocalStorage(users);
    displayCustomers(users);
  }

  // Função para excluir um cliente
  function deleteCustomer(index) {
    const users = loadUsersFromLocalStorage();
    users.splice(index, 1);
    saveUsersToLocalStorage(users);
    displayCustomers(users);
  }

  // Função para resetar o formulário
  function resetForm() {
    document.getElementById("customerForm").reset();
    document.getElementById("userId").value = "";
    document.getElementById("formTitle").textContent = "Adicionar Cliente";
  }

  // Função para editar um cliente
  function editCustomer(index) {
    const users = loadUsersFromLocalStorage();
    const customer = users[index];
    document.getElementById("userId").value = index;
    document.getElementById("fullName").value = customer.fullName;
    document.getElementById("phoneNumber").value = customer.phoneNumber;
    document.getElementById("email").value = customer.email;
    document.getElementById("password").value = customer.password;
    document.getElementById("formTitle").textContent = "Editar Cliente";
  }

  // Função para excluir um cliente com confirmação
  function deleteCustomer(index) {
    if (confirm("Tem certeza que deseja excluir este cliente?")) {
      const users = loadUsersFromLocalStorage();
      users.splice(index, 1);
      saveUsersToLocalStorage(users);
      displayCustomers(users);
    }
  }

  // Evento de submissão do formulário
  document.getElementById("customerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const index = document.getElementById("userId").value;
    const customer = {
      fullName: document.getElementById("fullName").value,
      phoneNumber: document.getElementById("phoneNumber").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    if (index === "") {
      addCustomer(customer);
    } else {
      updateCustomer(index, customer);
    }
    resetForm();
  });

  // Evento para resetar o formulário
  document.getElementById("resetForm").addEventListener("click", resetForm);

  // Evento para carregar e exibir os clientes ao clicar no botão
  document.getElementById("viewCustomers").addEventListener("click", function () {
    const users = loadUsersFromLocalStorage();
    displayCustomers(users);
  });

  // Carregar e exibir os clientes ao carregar a página
  const initialUsers = [
    { fullName: "João Silva", phoneNumber: "33 98765-5982", email: "silva@gmail.com", accessProfile: "cliente", password: "Password123!" },
    { fullName: "Maria Souza", phoneNumber: "32 99654-3212", email: "maria@gmail.com", accessProfile: "cliente", password: "SecurePass456!" },
    { fullName: "Lucas Santos", phoneNumber: "33 98465-4952", email: "joao@gmail.com", accessProfile: "cliente", password: "StrongPass789!" },
    { fullName: "Heitor Oliveira", phoneNumber: "32 99854-3312", email: "heitor@gmail.com", accessProfile: "cliente", password: "Password@2024" }
  ];

  // Salvar os dados iniciais no localStorage se ainda não estiverem salvos
  if (!localStorage.getItem("signupData")) {
    saveUsersToLocalStorage(initialUsers);
  }

  // Exibir os clientes ao carregar a página
  const users = loadUsersFromLocalStorage();
  displayCustomers(users);
});