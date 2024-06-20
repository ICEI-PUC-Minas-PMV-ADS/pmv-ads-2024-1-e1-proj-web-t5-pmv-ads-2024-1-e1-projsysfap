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

   var username= document.getElementById("user");
   var access= document.getElementById("accessProfile");
   var paswrd= document.getElementById("password");
   var emailaddress= document.getElementById("email");

   const loggedUser = {
        user: username,
        email: emailaddress,
        accessProfile: access,
        password: paswrd
      };
   
   const person = {
           firstName: "John",
           lastName: "Doe",
           age: 50,
           eyeColor: "blue"
       };
      
      
      if( username.value=="" || emailaddress.value=="" || paswrd.value==""){
       alert("Por favor, preencha todos os campos");

       }
       else{
     
     
      
      
      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
      
      console.log(JSON.parse(localStorage.getItem("loggedUser"));
      alert("Dados atualizados com sucesso");
  }




}
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

   var username= document.getElementById("user");
   var access= document.getElementById("accessProfile");
   var paswrd= document.getElementById("password");
   var emailaddress= document.getElementById("email");

   const loggedUser = {
        user: username,
        email: emailaddress,
        accessProfile: access,
        password: paswrd
      };
   
   const person = {
           firstName: "John",
           lastName: "Doe",
           age: 50,
           eyeColor: "blue"
       };
      
      
      if( username.value=="" || emailaddress.value=="" || paswrd.value==""){
       alert("Por favor, preencha todos os campos");

       }
       else{
     
     
      
      
      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
      
      console.log(JSON.parse(localStorage.getItem("loggedUser"));
      alert("Dados atualizados com sucesso");
  }




}