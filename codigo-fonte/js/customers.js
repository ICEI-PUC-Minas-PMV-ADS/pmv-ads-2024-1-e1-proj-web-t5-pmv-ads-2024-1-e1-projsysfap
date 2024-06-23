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

function loadUsersFromLocalStorage() {
    return JSON.parse(localStorage.getItem("clientes")) || [];
}

function deleteCustomer(index) {
    if (confirm("Tem certeza que deseja excluir este cliente?")) {
        const users = loadUsersFromLocalStorage();
        users.splice(index, 1);
        saveUsersToLocalStorage(users);
        displayCustomers(users);
    }
}

function saveUsersToLocalStorage(users) {
    localStorage.setItem("clientes", JSON.stringify(users));
}

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

document.addEventListener("DOMContentLoaded", function (data) {

    function addCustomer(customer) {
        const users = loadUsersFromLocalStorage();
        users.push(customer);
        saveUsersToLocalStorage(users);
        displayCustomers(users);
    }

    function updateCustomer(index, customer) {
        const users = loadUsersFromLocalStorage();
        users[index] = customer;
        saveUsersToLocalStorage(users);
        displayCustomers(users);
    }

    function resetForm() {
        document.getElementById("customerForm").reset();
        document.getElementById("userId").value = "";
        document.getElementById("formTitle").textContent = "Adicionar Cliente";
    }

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

    document.getElementById("resetForm").addEventListener("click", resetForm);

    document.getElementById("viewCustomers").addEventListener("click", function () {
        const users = loadUsersFromLocalStorage();
        displayCustomers(users);
    });

    const initialUsers = [
        { fullName: "João Silva", phoneNumber: "33 98765-5982", email: "silva@gmail.com", accessProfile: "cliente", password: "Password123!" },
        { fullName: "Maria Souza", phoneNumber: "32 99654-3212", email: "maria@gmail.com", accessProfile: "cliente", password: "Pass1234!" }
    ];
    if (!localStorage.getItem("clientes")) {
        saveUsersToLocalStorage(initialUsers);
    }
    displayCustomers(loadUsersFromLocalStorage());
});
