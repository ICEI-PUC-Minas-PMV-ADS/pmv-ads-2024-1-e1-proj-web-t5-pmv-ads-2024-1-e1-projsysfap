function fetchProducts() {
    fetch("../data/products.json")
    .then(response => response.json())
    .then(data => {
        let newProducts = localStorage.getItem("newProducts");
        if(newProducts){
            newProducts = JSON.parse(newProducts);

            data = [...data,...newProducts];
        }
        let table = document.querySelector("#productsTable tbody");
        for(let item of data){
            let row = document.createElement("tr");
            row.innerHTML = `<td>${item.name}</td><td class"align-middle">${item.category}</td><td>${formatAsReal(item.price)}</td><td>${item.instock}</td>`;
            row.innerHTML += `<td><button class="btn btn-outline-dark bg-white btn-sm" onclick="decrement('${item.id}')">-</button><input class="text-center mx-2 border-1 rounded-2" id="quantity${item.id}" type="number" min="0" max="${item.instock}" value="0"><button class="btn btn-outline-dark bg-white btn-sm" onclick="increase('${item.id}', ${item.instock})">+</button></td>`;
            row.innerHTML += `<td><button class="btn ${item.instock > 0?"btn-success":"btn-secondary"}" ${item.instock === 0 ? "disabled":""} onclick="selectProduct('${item.id}', '${item.name}', ${item.price})">Selecionar</button></tdclass>`;
            table.appendChild(row);
        }
    }).catch(error => console.error("Error", error));
}

function increase(id, max) {
    let input = document.getElementById('quantity' + id);
    if(input.value < max) {
        input.value++;
    }
}

function decrement(id) {
    let input = document.getElementById('quantity' + id);
    if(input.value > 0) {
        input.value--;
    }
}

fetchProducts();

let orders = {};

function selectProduct(id, name, price) {
    let quantity = Number(document.getElementById('quantity' + id).value);
    let totalPerProduct = quantity * price;
    if(quantity > 0){
        orders[id] = {name, quantity, totalPerProduct};
        
        updateOrderTable();
    }
}

function deleteOrder(id) {
    delete orders[id];
    updateOrderTable();
}
function formatAsReal(value) {
    let numberWithTwoDecimalPlaces = value.toFixed(2);
    let valueInReals = Number(numberWithTwoDecimalPlaces).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valueInReals;
}
function updateOrderTable() {
    let orderTable = '';
    let totalOrders = 0;
    for(let id in orders) {
        let order = orders[id];
        orderTable += `<tr id="order${id}"><td>${order.name}</td><td>${order.quantity}</td><td>${formatAsReal(order.totalPerProduct)}</td>`;
        orderTable += `<td><button class="btn" onclick="deleteOrder('${id}')"><img src="../assets/svg/trash-icon.svg" width="16px" height="16px" alt="Deletar"/></button></td></tr>`;
        totalOrders += order.totalPerProduct;
    }
    document.querySelector('#orderTable tbody').innerHTML = orderTable;
    document.querySelector("#totalOrders tbody td").innerHTML = formatAsReal(totalOrders);
}
function generateOrderToken() {
    let array = new Uint8Array(6);
    window.crypto.getRandomValues(array);
    let randomToken = Array.from(array, byte => byte.toString(16).padStart(2, "0")).join("");
    return `ORDER-${randomToken}`;
}

let orderToken = generateOrderToken();
function confirmOrder() {
    const totalOrders = document.getElementById('totalOrders');
    const now = new Date();
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if(loggedUser){
        const valueCell = totalOrders.rows[0].cells[1].innerHTML;
        const parsedValue = parseFloat(valueCell.replace(/[^0-9,-]/g, '').replace(',', '.'));
        if(totalOrders && parsedValue > 0){
            let orderData = JSON.parse(localStorage.getItem("orderData")?? "[]");
            orderData.push({
                orderId: generateOrderToken(),
                customerName: loggedUser.user,
                email: loggedUser.email,
                orderDate: now,
                products: orders,
                totalOrder: parsedValue,
            });
        
            localStorage.setItem('orderData', JSON.stringify(orderData));
            alert('Pedido final confirmado!');
        }

    } else {
        alert('Usuário não logado!');  
        window.location.href = "../pages/login.html";
    }
}
window.onload = function(){
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const userName = document.getElementById("userName");

    if(loggedUser){
        userName.innerHTML = loggedUser.user;
    }    
}