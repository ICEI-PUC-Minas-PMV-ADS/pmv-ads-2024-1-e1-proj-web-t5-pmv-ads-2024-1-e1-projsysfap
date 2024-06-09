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
      userName.innerHTML = loggedUser.user;
  }    
}
