   function init(){


   const fileSelector = document.getElementById('file-selector');
   const textArea = document.getElementById('textArea');

  

  //localStorage.clear();

    fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    //console.log(fileList);
    const val = null;
    
    const jsonFile = readFile(fileSelector, textArea);

  });
    }

  function filter(property){
     
     $("#tb").empty();
  
     var local =  JSON.parse(localStorage.getItem('products'));
           
     var json = JSON.parse(local);
  
     var term = document.getElementById("searchBox").value;
     //alert(term);
     
    const filterValue = "Pneu";
    const filteredBooks = json.filter(val => val.name.includes(term));
    console.log(filteredBooks);

     createTable(filteredBooks);


  
  }
  function showLocalStorage(sort){
  
           //alert(localStorage.key('products'));
           
           var products = localStorage.getItem('products');
           
           console.log(localStorage);

           var local =  JSON.parse(products);
           console.log("Local: " + local);
           
           var json = JSON.parse(local);
           console.log("Json: " + json);
           
           if(sort=="p"){
           
              json.sort((a, b) => a.price - b.price)
           }
           else if(sort=="n"){
             json.sort((a, b) => a.name.localeCompare(b.name));
           }
           else if(sort=="c")
           {
             json.sort((a, b) => a.category.localeCompare(b.category));
           }
           else
           {}


           $("#myTable  tbody").empty();

           
           var getItem = localStorage.getItem('products');

           var obj = localStorage.getItem('products');

           createTable(json);

  
  }
  
  function compare( a, b ) {
    if ( a.last_nom < b.last_nom ){
      return -1;
    }
    if ( a.last_nom > b.last_nom ){
      return 1;
    }
    return 0;
  }
  
  function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}
  
  function createTable(value){
  
      //console.log("Value: " + value);
      var newobj = value;

      //var newobject = JSON.parse(newobj);

      //console.log("New Object: " + newobject);

      var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

      //console.log("N. de Produtos: " + newobj.length);
      
      for(var i=0; i<newobj.length; i++){

          // Insert a row at the end of table
          var newRow = tbodyRef.insertRow();

          // Insert a cell at the end of the row
          var newCell = newRow.insertCell();

          // Append a text node to the cell
          var newText = document.createTextNode(newobj[i].id);
          newCell.appendChild(newText);

          // Insert a cell at the end of the row
          var newCell = newRow.insertCell();

          // Append a text node to the cell
          var newText = document.createTextNode(newobj[i].name);
          newCell.appendChild(newText);

          // Insert a cell at the end of the row
          newCell = newRow.insertCell();

          // Append a text node to the cell
          newText = document.createTextNode(newobj[i].category);
          newCell.appendChild(newText);

          // Insert a cell at the end of the row
          newCell = newRow.insertCell();

          // Append a text node to the cell
          
          var p = newobj[i].price;
          


          newText = document.createTextNode("R$ " + p.toFixed(2));
          newCell.appendChild(newText);
          
          

          

          
          // Insert a cell at the end of the row
          newCell = newRow.insertCell();

          // Append a text node to the cell
          newText = document.createTextNode(newobj[i].instock);
          newCell.appendChild(newText);
          
          // Insert a cell at the end of the row
          // Insert a cell at the end of the row
          newCell = newRow.insertCell();

          // Append a text node to the cell
          
          var price = newobj[i].price;
          var discount = price * 0.15;

          newText = document.createTextNode("R$ " + discount.toFixed(2));
          newCell.appendChild(newText);
          
          console.log(parseInt(newobj[i].instock, 8));
           // Insert a cell at the end of the row
          newCell = newRow.insertCell();

          // Append a text node to the cell
          
          var t = p * 0.85;
          


          newText = document.createTextNode("R$ " + t.toFixed(2));
          newCell.appendChild(newText);

          var d = parseInt(newobj[i].instock);
          
          if(d>0){
          
           // Append a text node to the cell
           newCell = newRow.insertCell();
           newText = document.createTextNode("Disponível");
           newCell.className = 'blue'; 
           newCell.appendChild(newText);
          }
          else{
          newCell = newRow.insertCell();
           newCell.className = 'red';
           newText = document.createTextNode("Esgotado");
           newCell.appendChild(newText);
          }
          

      }


  }


  function passValue(value){
      const obj = JSON.parse(value);
      
      var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

      for(var i=0; i<obj.length; i++){
      
          // Insert a row at the end of table
          var newRow = tbodyRef.insertRow();

          // Insert a cell at the end of the row
          var newCell = newRow.insertCell();

          // Append a text node to the cell
          var newText = document.createTextNode(obj[i].id);
          newCell.appendChild(newText);

          // Insert a cell at the end of the row
          var newCell = newRow.insertCell();

          // Append a text node to the cell
          var newText = document.createTextNode(obj[i].name);
          newCell.appendChild(newText);

          // Insert a cell at the end of the row
          newCell = newRow.insertCell();

          // Append a text node to the cell
          newText = document.createTextNode(obj[i].category);
          newCell.appendChild(newText);
          
          // Insert a cell at the end of the row
          newCell = newRow.insertCell();

          // Append a text node to the cell
          newText = document.createTextNode(obj[i].price);
          newCell.appendChild(newText);
          
          // Insert a cell at the end of the row
          newCell = newRow.insertCell();

          // Append a text node to the cell
          newText = document.createTextNode(obj[i].instock);
          newCell.appendChild(newText);
          
          // Insert a cell at the end of the row
          newCell = newRow.insertCell();

          //console.log(parseInt(obj[i].instock));
          
          var d = parseInt(obj[i].instock);
          
          if(d > 0){
          newCell.className = 'blue';

          // Append a text node to the cell
          newText = document.createTextNode("Disponível");
          newCell.appendChild(newText);

          }
          else{
           newCell.className = 'red';
           newText = document.createTextNode("Esgotado");
           newCell.appendChild(newText);
          }



      }
      
      var question = ("Deseja salvar os dados na memória do navegador?");

      if(window.confirm(question)){
      
            saveProducts(value);

      }
     
  }


function saveProducts(products){
  
  localStorage.clear();

  localStorage.setItem('products', JSON.stringify(products));

}

function readFile(input, text) {
  let file = input.files[0];


  const this_ = this;
  let reader = new FileReader();

  reader.readAsText(file);
  
  var result;
  
  var that = this; //the magic happens

  const textArea = document.getElementById('textArea');

  reader.onload = function() {
  

  
    result = reader.result;
    
    //console.log(reader.result);
    //console.log("Result from load: " + result);
    
    that.val = result;
    
    saveProducts(result);
    myFunction();
    


    //passValue(result);

    return function (e) {
            reader.result;
      };
    };

  reader.onerror = function() {
    console.log(reader.error);
  };
  
  function myFunction() {
    const element = document.getElementById("abrirprodutos");  // Get the DIV element
    element.classList.remove("invisible"); // Remove mystyle class from DIV
    element.classList.add("visible"); // Add newone class to DIV
}

}