
document.getElementById("signinForm").addEventListener("submit", function(e){
    e.preventDefault();
    const email = this.querySelector("#email");
    const password = this.querySelector("#current-password");
    const formInputs = this.querySelector(".formInputs");
    const errorMessage = this.querySelector(".invalid-feedback");

    const userList = JSON.parse(localStorage.getItem("signupData"));
    const registeredUser = userList?.find((user) => {
        return user.email === email.value && user.password === password.value
    });
    if(registeredUser){
        if(errorMessage){
            formInputs.removeChild(errorMessage);
        }
        localStorage.setItem("loggedUser",JSON.stringify(registeredUser));
        window.location.href = "../pages/home.html"
    } else {
        email.classList.add("is-invalid");
        password.classList.add("is-invalid");
        if(!errorMessage){
            const newElement = document.createElement("span");
            newElement.textContent = "Usuário ou senha incorreto";
            newElement.classList.add("invalid-feedback","position-absolute","text-center","d-inline");
            formInputs.appendChild(newElement);
        }
    }
});
document.getElementById("toggle-password").addEventListener("click", function(){
    const passwordInput = document.getElementById("current-password");
    const eyeIcon = this.querySelector("#eye-icon");
    if(passwordInput.type === "password"){
      passwordInput.type = "text";
      eyeIcon.data = "../assets/svg/fi_eye.svg"
    } else {
      passwordInput.type = "password";
      eyeIcon.data = "../assets/svg/fi_eye-off.svg"
    }
});