document.getElementById("signinForm").addEventListener("submit", async function(e){
    e.preventDefault();
    const email = this.querySelector("#email");
    const password = this.querySelector("#current-password");
    const formInputs = this.querySelector(".formInputs");
    const errorMessage = this.querySelector(".invalid-feedback");

    const registeredUser = await getRegisteredUser(email.value, password.value);
    if(registeredUser){
        if(errorMessage){
            formInputs.removeChild(errorMessage);
        }
        localStorage.setItem("loggedUser",JSON.stringify(registeredUser));
        if(registeredUser.accessProfile === "cliente"){
            window.location.href = "./codigo-fonte/pages/home-client.html";
        } else {
            window.location.href = "./codigo-fonte/pages/home.html";
        }
    } else {
        email.classList.add("is-invalid");
        password.classList.add("is-invalid");
        if(!errorMessage){
            const newElement = document.createElement("span");
            newElement.textContent = "Usuario ou senha incorreto";
            newElement.classList.add("invalid-feedback","position-absolute","text-center","d-inline");
            formInputs.appendChild(newElement);
        }
    }
});
async function getRegisteredUser(emailValue, passwordValue){
    const localStorageList = JSON.parse(localStorage.getItem("signupData")) || [];
    const userFromLocalStorage = localStorageList.find((user) => {
        return user.email === email.value && user.password === password.value
    });
    
    if(userFromLocalStorage){
        return userFromLocalStorage;
    } else {
        const response = await fetch("./codigo-fonte/data/users.json");
        const {users} = await response.json();
        return users.find((user)=> user.email === emailValue && user.password === passwordValue);
    } 
}
document.getElementById("toggle-password").addEventListener("click", function(){
    const passwordInput = document.getElementById("current-password");
    const eyeIcon = this.querySelector("#eye-icon");
    if(passwordInput.type === "password"){
      passwordInput.type = "text";
      eyeIcon.data = "./codigo-fonte/assets/svg/fi_eye.svg"
    } else {
      passwordInput.type = "password";
      eyeIcon.data = "./codigo-fonte/assets/svg/fi_eye-off.svg"
    }
});
