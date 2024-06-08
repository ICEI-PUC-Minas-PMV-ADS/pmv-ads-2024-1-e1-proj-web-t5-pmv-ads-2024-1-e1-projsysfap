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
            if(item.totalOrder === undefined){
                console.log(item)
            }
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