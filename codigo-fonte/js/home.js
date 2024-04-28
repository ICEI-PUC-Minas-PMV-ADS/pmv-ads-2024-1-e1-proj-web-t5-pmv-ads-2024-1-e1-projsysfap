function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => document.getElementById('content').innerHTML = data)
        .catch(error => console.error(error));
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