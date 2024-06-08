function loadPage(page, sectionTitle) {
    fetch(page)
.then(function (data) {
  return data.text();
})
.then(function (html) {
  
  if(sectionTitle== null){
     sectionTitle="Section Title";
  }

  document.getElementById('content').innerHTML = html;
  document.getElementById('sectionTitle').innerHTML = sectionTitle;
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

function fetchOrders() {
    fetch("../data/orderData.json")
    .then(response => response.json())
    .then(data => {
        let newOrders = localStorage.getItem("orderData");
        if(newOrders){
            newOrders = JSON.parse(newOrders);

            data = [...newOrders,...data];
        }
        let table = document.querySelector("#ordersTable tbody");
        for(let item of data){
            let date = new Date(item.orderDate);
            let options = {year: "numeric", month: "long", day: "numeric"};
            let formattedDate = date.toLocaleDateString("pt-BR", options);
            let row = document.createElement("tr");
            let time =  date.toLocaleTimeString();
            row.innerHTML = `<td>${item.orderId}</td><td class"align-middle">${item.customerName}</td><td>${formattedDate} - ${time}</td><td>${formatAsReal(item.totalOrder)}</td>`;
            table.appendChild(row);
        }
        showTotalOrders(data.length);
    }).catch(error => console.error("Error", error));
}
function showTotalOrders(length){
    const cardText = document.getElementById("ordersPage_totalOrders");
    cardText.innerHTML = length.toString();
}
function formatAsReal(value) {
    let numberWithTwoDecimalPlaces = value.toFixed(2);
    let valueInReals = Number(numberWithTwoDecimalPlaces).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valueInReals;
}
