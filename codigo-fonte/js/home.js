function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            if (page === './customers.html'){
                setupCustomerPage();
            }
        })
        .catch(error => console.error(error));
}

loadPage("dashboard.html");

function setupCustomerPage() {
    document.getElementById("viewCustomers").addEventListener("click", function () {
        const users = loadUsersFromLocalStorage();
        displayCustomers(users);
    });
    // Adiciona outros event listeners e configurações específicas da página de clientes aqui
}

function loadUsersFromLocalStorage() {
    return JSON.parse(localStorage.getItem("signupData")) || [];
}

function saveUsersToLocalStorage(users) {
    localStorage.setItem("signupData", JSON.stringify(users));
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

function logout(){
    localStorage.removeItem("loggedUser");
}

function activateNavButton() {
    const btns = document.querySelectorAll(".nav .btn");
    for (let btn of btns) {
        btn.addEventListener("click", function () {
            for (let btn of btns) {
                btn.classList.remove("active");
            }
            this.classList.add("active");
        });
    }
}

window.onload = function () {
    activateNavButton();
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const userName = document.getElementById("userName");

    if (loggedUser) {
        userName.innerHTML = loggedUser.user;
    }
    loadPage('dashboard.html');    
}
