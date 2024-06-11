function loadPage(page, sectionTitle) {
function loadPage(page, sectionTitle) {
    fetch(page)
.then(function (data) {
  return data.text();
})
.then(function (html) {
  
  if(sectionTitle== null){
     sectionTitle="Section Title";
  }

  
  if(sectionTitle== null){
     sectionTitle="Section Title";
  }

  document.getElementById('content').innerHTML = html;
  document.getElementById('sectionTitle').innerHTML = sectionTitle;
  if (page === './customers.html') {
    setupCustomerPage();
  }
  document.getElementById('sectionTitle').innerHTML = sectionTitle;
  if (page === './customers.html') {
    setupCustomerPage();
  }
  var scripts = document.getElementById("content").querySelectorAll("script");
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].innerText) {
      eval(scripts[i].innerText);
    } else {
      fetch(scripts[i].src).then(function (data) {
        data.text().then(function (r) {
          eval(r);
        })
      });

    }
    // To not repeat the element
    scripts[i].parentNode.removeChild(scripts[i]);
  }
});

    }
loadPage("dashboard.html");

function logout(){
    localStorage.removeItem("loggedUser");
}
function activateNavButton(){
  const btns = document.querySelectorAll(".nav .btn");
  for (let btn of btns){
      btn.addEventListener("click", function(){
          for(let btn of btns){
              btn.classList.remove("active");
          }
          this.classList.add("active");
      })
  }
}
window.onload = function(){
  activateNavButton();
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  const userName = document.getElementById("userName");

  if(loggedUser){
      userName.innerHTML = loggedUser.fullName;
  }    
}

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

