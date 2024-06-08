function getInfo(){

   var info = JSON.parse(localStorage.getItem("loggedUser"));
   
   console.log("info: " + info);
   
   var user= document.getElementById("user");
   var accessProfile= document.getElementById("accessProfile");
   var password= document.getElementById("password");
   var email= document.getElementById("email");
   
   //{"user":"Ernane Oliveira","email":"radarufmg@gmail.com","accessProfile":"vendedor","password":"Kalixt54%"}'
   
   user.value = info.user.trim();
   email.value = info.email.trim();
   accessProfile.value = info.accessProfile.trim();
   password.value = info.password.trim();

}

function atualizarPerfil(){

   console.log("Funcionando");
   var username= document.getElementById("user").value;
   var access= document.getElementById("accessProfile").value;
   var paswrd= document.getElementById("password").value;
   var emailaddress= document.getElementById("email").value;
   
   const loggedUser = {
        user: username,
        email: emailaddress,
        accessProfile: access,
        password: paswrd
   };
   console.log("Logged User: " + loggedUser);
   
   if (username=="" || emailaddress=="" || paswrd==""){
       alert("Por favor, preencha todos os campos");

    }
    else{
      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
      atualizarSignupData(loggedUser);

      var signupData = {"user":"Ernane Oliveira","email":"radarufmg@gmail.com","accessProfile":"vendedor","password":"Kalixt54%"};

      localStorage.setItem("signupData", JSON.stringify(signupData));

      console.log("Local Storage LoggedUser: " + JSON.parse(localStorage.getItem("loggedUser")));
      console.log("Local Storage SignupData: " + JSON.parse(localStorage.getItem("signupData")));

      alert("Dados atualizados com sucesso");
      

  }

}

function atualizarSignupData(loggedUser){
  
    var json2 = JSON.parse(localStorage.getItem("signupData"));
    //var json = JSON.parse(json);

    for(var i=0; i<json2.length; i++){
      
      if(json2[i].email()==loggedUser['email']){

        json2[i].user = loggedUser['user'];
        json2[i].email = loggedUser['email'];
        json2[i].accessProfile = loggedUser['accessProfile'];
        json2[i].password = loggedUser['password'];
      
      }
    }
      
      localStorage.setItem("signupData", JSON.stringify(json2));

}