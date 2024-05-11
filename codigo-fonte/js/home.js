function loadPage(page) {
    fetch(page)
.then(function (data) {
  return data.text();
})
.then(function (html) {
  document.getElementById('content').innerHTML = html;
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