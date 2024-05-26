class FormValidator {
  static createErrorMessage(element, message){
    let errorMessage = element.parentNode.querySelector(".invalid-feedback");
    if(!errorMessage){
      errorMessage = document.createElement("span");
      errorMessage.textContent = message;
      errorMessage.classList.add("invalid-feedback","position-absolute","text-center");
      element.parentNode.insertBefore(errorMessage, element.nextSibling);
    }
  }

  static removeErrorMessage(element){
    const errorMessage = element.parentNode.querySelector(".invalid-feedback");
    if(errorMessage){
      errorMessage.remove();
    }
  }
  static validate(element, regex, messageError){
    const value = element.value;
    const isValid = regex.test(value);
    element.classList.toggle("is-valid",isValid);
    element.classList.toggle("is-invalid",!isValid);
    element.setAttribute("validValue",isValid);
    if(!isValid){
      this.createErrorMessage(element, messageError);
    } else {
      this.removeErrorMessage(element);
    }
  }
  static validateFullName(element){
    const regexName = /^[a-zA-Z\u00C0-\u017F\s]{4,}$/;
    this.validate(element,regexName,"O campo deve conter pelos menos 4 caracteres")
  }

  static validatePassword(element) {
    const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    this.validate(element,regexPassword,"Senha deve ter no mínimo 8 caracteres, entre eles 1 letra minúscula, 1 letra maiúscula, 1 número e 1 caractere especial.")
  }

  static validateEmail(element){
    const value = element.value.trim();
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const isValid = regexEmail.test(value);
    let userList = JSON.parse(localStorage.getItem("signupData")) || [];
    const registeredEmail = userList.some((user) => user.email === value);
    const isUniqueEmail = !registeredEmail;
    const isValidEmail = isValid && isUniqueEmail;
    element.classList.toggle("is-valid", isValidEmail);
    element.classList.toggle("is-invalid", !isValidEmail);
    element.setAttribute("validValue", isValidEmail);
    if (!isValidEmail) {
      if (!isValid) {
        this.createErrorMessage(element, "Email inválido");
      } else if (!isUniqueEmail) {
        this.createErrorMessage(element, "Email já cadastrado!");
      }
    } else {
      this.removeErrorMessage(element);
    }
  }
}

function validateInput(inputElement) {
  const name = inputElement.name;

  switch (name) {
    case "fullName":
      FormValidator.validateFullName(inputElement);
      break;
    case "email":
      FormValidator.validateEmail(inputElement);
      break;
    case "new-password":
      FormValidator.validatePassword(inputElement);
      break;
    default:
      break;
  }
}
document.getElementById("toggle-password").addEventListener("click", function(){
  const passwordInput = document.getElementById("new-password");
  const eyeIcon = this.querySelector("#eye-icon");
  if(passwordInput.type === "password"){
    passwordInput.type = "text";
    eyeIcon.data = "../assets/svg/fi_eye.svg"
  } else {
    passwordInput.type = "password";
    eyeIcon.data = "../assets/svg/fi_eye-off.svg"
  }
});
document.getElementById("signupForm").addEventListener("submit", function(e){
  e.preventDefault();
  
  const fullName = this.querySelector("#fullName");
  const email = this.querySelector("#email");
  const password = this.querySelector("#new-password");
  const accessProfile = this.querySelector("#accessProfile");

  if (accessProfile.value == "null") {
    accessProfile.classList.add("is-invalid");
    accessProfile.focus();
    return;
  }
  if(fullName.getAttribute("validValue") && email.getAttribute("validValue") && password.getAttribute("validValue")){
    let signupData = JSON.parse(localStorage.getItem("signupData")?? "[]");
    
    signupData.push({
      user: fullName.value,
      email: email.value,
      accessProfile: accessProfile.value,
      password: password.value,
    });
    localStorage.setItem("signupData", JSON.stringify(signupData));
    alert("Usuário cadastrado com sucesso!");

    if(accessProfile.value === "vendedor"){
      window.location.href = "../pages/home-client.html";
    } else {
      window.location.href = "../pages/home.html";
    }
  }
});
