// dashboard.js

updateDashboard();
if (localStorage.getItem("pedidos")) {
  // Se existirem, renderiza os pedidos
  renderizarPedidos();
} else {
  // Caso contrário, cria uma lista vazia de pedidos
  localStorage.setItem("pedidos", JSON.stringify([]));
}

document.addEventListener("DOMContentLoaded", function () {
  updateDashboard();
});

function updateDashboard() {
  // Definir valores iniciais no localStorage (se não estiverem definidos)
  if (!localStorage.getItem("volumeVendas")) {
    localStorage.setItem("volumeVendas", "R$4.000.000,00");
  }
  if (!localStorage.getItem("quantidadeVendas")) {
    localStorage.setItem("quantidadeVendas", "450");
  }
  if (!localStorage.getItem("quantidadeClientes")) {
    localStorage.setItem("quantidadeClientes", "1250");
  }
  if (!localStorage.getItem("ativos")) {
    localStorage.setItem("ativos", "1180");
  }
  if (!localStorage.getItem("numeroPedidos")) {
    localStorage.setItem("numeroPedidos", "450");
  }
  if (!localStorage.getItem("pedidosPendentes")) {
    localStorage.setItem("pedidosPendentes", "5");
  }
  if (!localStorage.getItem("pedidosCompletos")) {
    localStorage.setItem("pedidosCompletos", "445");
  }

  // Resgatar valores do localStorage
  let volumeVendas = localStorage.getItem("volumeVendas") || "0";
  let quantidadeVendas = localStorage.getItem("quantidadeVendas") || "0";
  let quantidadeClientes = localStorage.getItem("quantidadeClientes") || "0";
  let clientes = localStorage.getItem("clientes") || "0";
  let ativos = localStorage.getItem("ativos") || "0";
  let numeroPedidos = localStorage.getItem("numeroPedidos") || "0";
  let pedidosPendentes = localStorage.getItem("pedidosPendentes") || "0";
  let pedidosCompletos = localStorage.getItem("pedidosCompletos") || "0";

  // Atualizar os elementos do dashboard
  document.querySelectorAll(".card").forEach(function (card) {
    card.querySelector("#volumeVendas").innerText = volumeVendas;
    card.querySelector("#quantidadeVendas").innerText = quantidadeVendas;
  });

  document.querySelectorAll(".card2").forEach(function (card) {
    card.querySelector("#clientes").innerText = quantidadeClientes;
    card.querySelector("#ativos").innerText = ativos;
  });

  document.querySelectorAll(".card3").forEach(function (card) {
    card.querySelector("#numeroPedidos").innerText = numeroPedidos;
    card.querySelector("#pedidosPendentes").innerText = pedidosPendentes;
    card.querySelector("#pedidosCompletos").innerText = pedidosCompletos;
  });
}
