function handleFileInput() {
  console.log("change event of file input triggered.");
}

function init() {

  const fileSelector = document.getElementById('file-selector');
  const textArea = document.getElementById('textArea');



  document.getElementById("file-selector").addEventListener("change", handleFileInput, true);



  //localStorage.clear();

  fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    //console.log(fileList);
    const val = null;

    const jsonFile = readFile(fileSelector, textArea);

  });

}

function filter(property) {

  $("#tb").empty();

  var local = JSON.parse(localStorage.getItem('products'));

  var json = JSON.parse(local);

  var term = document.getElementById("searchBox").value;
  //alert(term);

  const filterValue = "Pneu";
  const filteredBooks = json.filter(val => val.name.includes(term));
  console.log(filteredBooks);

  createTable(filteredBooks);



}

function clearLocalStorage() {

  localStorage.removeItem("products");

}

function cadastrarProdutos2() {

  var nome = document.getElementById("name");
  var category = document.getElementById("category");
  var price = document.getElementById("price");
  var instock = document.getElementById("instock");

  var oldItems = JSON.parse(localStorage.getItem('products')) || [];

  var oldItems2 = JSON.parse(oldItems);

  const product = {
    id: 0,
    name: document.getElementById("name").value,
    category: document.getElementById("category").value,
    price: document.getElementById("price").value,
    instock: document.getElementById("instock").value

  };

  product.id = "Product00" + oldItems2.length;

  //console.log("Product: " + JSON.stringify(product));

  //console.log(Array.isArray(oldItems));

  //oldItems += JSON.stringify(product);

  //oldItems.push(product);
  //oldItems2.push = product;

  var result = oldItems2.concat(product);

  //console.log(result);

  //save oldItems2 no localStorage

          //console.log("Stringify result: " + JSON.stringify(JSON.stringify(result)));
          
          if(name.value=="" || category.value=="" || price.value=="" || instock.value==""){
            alert("Por favor, preencha todos os campos do formulário.");
          }
          
          else{

    localStorage.setItem("products", JSON.stringify(JSON.stringify(result)));
    alert("Produto salvo com sucesso");

    limparFormulario();

    //console.log(JSON.parse(localStorage.getItem("products")));

    //var arr = [];
    //arr.push(result[result.length-1];
    var arr = [];

    arr.push(product);

    createTable(arr, false);
  }

}

function cadastrarProdutosz() {

  var nome = document.getElementById("name");
  var category = document.getElementById("category");
  var price = document.getElementById("price");
  var instock = document.getElementById("instock");

  const product = {
    id: 0,
    name: document.getElementById("name").value,
    category: document.getElementById("category").value,
    price: document.getElementById("price").value,
    instock: document.getElementById("instock").value

  };
  if (nome == "" || category == "" || price == "" || instock == "") {
    alert("Por favor, preencha todos os campos");
  }

  else {
    var arr = [];
    var json = JSON.parse(localStorage.getItem("products"));

    var i = json.length + 1;

    var id = "Product0" + i;

    product.id = id;

    arr.push(JSON.stringify(product));

    for (var k = 0; k < json.length; k++) {

      arr.push(json[k]);

    }

    Array.prototype.push.apply(product, JSON.stringify(json));

    alert("Produto cadastrado com sucesso");
    limparFormulario();
  }



}

function cadastrarProdutos() {

  var nome = document.getElementById("name");
  var category = document.getElementById("category");
  var price = document.getElementById("price");
  var instock = document.getElementById("instock");

  const product = {
    id: 0,
    name: document.getElementById("name").value,
    category: document.getElementById("category").value,
    price: document.getElementById("price").value,
    instock: document.getElementById("instock").value

  };
  //alert(product);
  console.log(product);

  var arr = [];

  json = JSON.parse(localStorage.getItem("products"));
  var json2 = JSON.parse(json);

  //arr.push(json);



  //arr.push(product, json);
  arr.push(json2, product);

  //console.log("Json 2: " + json);

  var i = json.length + 1;

  var id = "Product00" + i;

  product.id = id;




  console.log(arr);



}

function limparFormulario() {

  var cod = document.getElementById("cod");
  var name = document.getElementById("name");
  var category = document.getElementById("category");
  var price = document.getElementById("price");
  var instock = document.getElementById("instock");

  cod.value = "";
  name.value = "";
  category.value = "";
  price.value = "";
  instock.value = "";

}

function showLocalStorage(sort) {

  //alert(localStorage.key('products'));

  var local = JSON.parse(localStorage.getItem('products'));

  console.log("Local: " + local);

  var json = JSON.parse(local);

  console.log("Json: " + json);
  //console.log(json);

  if (sort == "p") {

    json.sort((a, b) => a.price - b.price)
  }
  else if (sort == "n") {
    json.sort((a, b) => a.name.localeCompare(b.name));
  }
  else if (sort == "c") {
    json.sort((a, b) => a.category.localeCompare(b.category));
  }
  else { }


  //$("#myTable  tb").empty();

  $("#tb").empty();

  var getItem = localStorage.getItem('products');

  var obj = localStorage.getItem('products');

  createTable(json, true);


}

function compare(a, b) {
  if (a.last_nom < b.last_nom) {
    return -1;
  }
  if (a.last_nom > b.last_nom) {
    return 1;
  }
  return 0;
}


const writeToTextFile = () => {

  let text = JSON.parse(localStorage.getItem("products"));
  let fileName = "products.json";
  let textFile = null;
  const makeTextFile = (text) => {
    const data = new Blob([text], {
      type: 'text/plain',
    });
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }
    textFile = window.URL.createObjectURL(data);
    return textFile;
  };
  const link = document.createElement('a');
  link.setAttribute('download', fileName);
  link.href = makeTextFile(text);
  link.click();
};

//writeToTextFile(data, 'output.txt');


function dynamicSort(property) {
  var sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    /* next line works with strings and numbers,
     * and you may want to customize it to your needs
     */
    var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  }
}

function createTable(value, empty) {

  //console.log("Value: " + value);
  var newobj = value;

  //var newobject = JSON.parse(newobj);

  //console.log("New Object: " + newobject);



  var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

  //console.log("N. de Produtos: " + newobj.length);

  for (var i = 0; i < newobj.length; i++) {

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

    var p = parseInt(newobj[i].price);

    console.log(p);



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
           newCell.className = 'text-success';
           newCell.appendChild(newText);
          }
          else{
          newCell = newRow.insertCell();
          newText = document.createTextNode("Esgotado");
          newCell.className = 'text-danger';
          newCell.appendChild(newText);
          }
          
          //Cria a imagem para editar produto
          newCell = newRow.insertCell();
          
            if(localStorage.getItem("page")=="cadastrarProduto.html") {
          
                var pencil = "<img src='../img/pencil.png' width='25px' onClick='editarProduto()'/>";
                var img = document.createElement("img");
                
                img.src = '../img/pencil.png';
                img.width = "25";
                img.setAttribute("onClick", "editarProduto(this)"); 
                newCell.appendChild(img);
              }
              
             else{
               
                var pencil = "<img src='../img/pencil.png' width='25px' onClick='editarProduto()'/>";
                var img = document.createElement("img");
                
                img.src = '../img/pencil.png';
                img.width = "25";
                img.setAttribute("onClick", "editarProduto(this); loadPage('cadastrarProduto.html')");
                newCell.appendChild(img);

    }

    //newText = document.createTextNode(pencil);


    //Cria a imagem para deletar produtos
    newCell = newRow.insertCell();

    var trashbin = "<img src='../img/trashbin.png' width='25px' onClick='deletarProduto()'/>";
    var img2 = document.createElement("img");

    img2.src = '../img/trashbin.png';
    img2.width = "25";
    img2.setAttribute("onClick", "deletarProduto(this)");

    //newText = document.createTextNode(pencil);
    newCell.appendChild(img2);

  }


}

function deletarProduto(cod) {

  var current_row = $(cod).closest("tr");
  var column1 = current_row.find("td:eq(0)").text();

  //alert("Row: " + current_row.index);

  var p = null;

  var arr = [];

  arr = JSON.parse(JSON.parse(localStorage.getItem("products")));

  console.log("Arr: " + arr);

  console.log("Is array: " + Array.isArray(arr));

  for (var i = 0; i < arr.length; i++) {
    //console.log(arr[i].id);
    //console.log(arr[i].id + "/" + column1);

    var a = arr[i].id.trim();
    var b = column1.trim();

    if (a == b) {




      //console.log("Row: " + i);
      p = i;
    }
    else {


    }



  }
  //console.log("Product Row is: " + p);

  if (confirm('Deseja deletar o item selecionado?')) {
    // Deleta o item na linha p

    arr.splice(p, 1);

    localStorage.setItem("products", JSON.stringify(JSON.stringify(arr)));


    alert("Item deletado com sucesso");
    showLocalStorage("cod");


    console.log('Thing was saved to the database.');
  } else {
    // Do nothing!
    console.log('Thing was not saved to the database.');
  }
  return p;



}

function showInput() {

  document.getElementById("file-selector").classList.remove('invisible');
  document.getElementById("file-selector").classList.add('visible');

    document.getElementById("instrucoes").innerHTML = "Após inserir os seus arquivos no template, importe o arquivo no botão abaixo";
    
    document.getElementById("baixarTemplate").classList.remove('visible');
    document.getElementById("baixarTemplate").classList.add('invisible');


}

function editarProduto(e) {
  //alert(e.src);

  var tr = e.parentNode.rowIndex;

  var row = $(this).closest('td');
  var col = row.parent().children().index(row);

  //alert("Main ID " + row + "Col: " + col);
  //alert(tr);

  //alert($(e).closest("tr").index());

  $('#tb').on('click', 'img', function (event) {
    var rowindex = $(this).closest('tr').index();
    console.debug('Index', rowindex);
    var column2 = $(this).find('td').eq(2).html(); // gets column 2 values
    //alert("Column 2: " + column2);
    //console.log("Column 2: " + column2);

    var current_row = $(this).closest("tr");
    var column1 = current_row.find("td:eq(0)").text();
    var column2 = current_row.find("td:eq(1)").text();
    var column3 = current_row.find("td:eq(2)").text();
    var column4 = current_row.find("td:eq(3)").text();
    var column5 = current_row.find("td:eq(4)").text();

    var data = column1 + " " + column2 + " " + column3 + " " + column4 + " " + column5;

    //console.log("Data: " + data);

    var price = column4.split(" ");

    localStorage.setItem("editProduct", column1.trim());

    document.getElementById("cod").value = column1;
    document.getElementById("name").value = column2;
    document.getElementById("category").value = column3;
    document.getElementById("price").value = price[1];
    document.getElementById("instock").value = column5;


  });



}

function editarProduto2(codProduto) {

  var json2 = JSON.parse(localStorage.getItem("products"));
  var json = JSON.parse(json2);

  console.log("Is array? " + Array.isArray(json));

  console.log("Json: " + json);

  for (var i = 0; i < json.length; i++) {
    console.log(json[i]);

    var a = json[i].id;
    var b = codProduto.trim();

    if (a.trim() == b) {



      var price = json[i].price;

      document.getElementById("cod").value = json[i].id;
      document.getElementById("name").value = json[i].name;
      document.getElementById("category").value = json[i].category;
      document.getElementById("price").value = price;
      document.getElementById("instock").value = json[i].instock;


    }

  }


  }
  
  function atualizarProduto(){
      
     var json = JSON.parse(localStorage.getItem("products"));
     var json2 = JSON.parse(json);
     //console.log("json2: " + json2);
     //console.log("json[0].id = " + json2[0].id);

     var arr = [];

     arr.push(json);

     json = arr;
     //console.log("Arr: " + arr);
     //console.log("Arr is array? " + Array.isArray(arr));
     //var json = JSON.parse(json2);
     
     //console.log("Json: " + json);
     //console.log("Is array: " + Array.isArray(json));

     var cod = document.getElementById("cod");

     cod = cod.value.trim();

     //console.log("Codigo: " + cod);
     //console.log("Json: " + json);
     
     //console.log("Arr length: " + arr.length);
     //console.log("Arr[0].id = " + arr[0].id);


     for(var i=0; i<json2.length; i++){

        if(json2[i].id.trim()==cod){

             json2[i].id = document.getElementById("cod").value;
             json2[i].name = document.getElementById("name").value;
             json2[i].category = document.getElementById("category").value;
             json2[i].price = document.getElementById("price").value;
             json2[i].instock = document.getElementById("instock").value;
        }

  }

  const product = {
    id: document.getElementById("cod").value,
    name: document.getElementById("name").value,
    category: document.getElementById("category").value,
    price: document.getElementById("price").value,
    instock: document.getElementById("instock").value

          };
          
     //console.log("Json Stringify: " + JSON.stringify(JSON.stringify(json)));
     
     var arr =

     localStorage.setItem("products", JSON.stringify(JSON.stringify(json2)));
     
     var arr = [];
     arr.push(product);
     
     limparFormulario();

  createTable(arr, false);

  alert("Item atualizado com sucesso");




}


function passValue(value) {
  const obj = JSON.parse(value);

  var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

  for (var i = 0; i < obj.length; i++) {

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

    if (d > 0) {
      newCell.className = 'blue';

          // Append a text node to the cell
          newText = document.createTextNode("Disponível");
          newCell.appendChild(newText);

    }
    else {
      newCell.className = 'red';
      newText = document.createTextNode("Esgotado");
      newCell.appendChild(newText);
    }



      }
      
      var question = ("Deseja salvar os dados na memória do navegador?");

  if (window.confirm(question)) {

    saveProducts(value);

  }

}


function saveProducts(products) {

  localStorage.clear();

  localStorage.setItem('products', JSON.stringify(products));
  alert("Dados salvos com sucesso");
  document.getElementById("verProdutos").classList.remove('invisible');
  document.getElementById("verProdutos").classList.add('visible');


  document.getElementById("baixarTemplate").classList.add('invisible');
}

function readFile(input) {
  let file = input.files[0];


  const this_ = this;
  let reader = new FileReader();

  reader.readAsText(file);

  var result;

  var that = this; //the magic happens

  const textArea = document.getElementById('textArea');

  reader.onload = function () {



    result = reader.result;

    //console.log(reader.result);
    //console.log("Result from load: " + result);

    that.val = result;

    saveProducts(result);

    return function (e) {
      reader.result;
    };
  };

  reader.onerror = function () {
    console.log(reader.error);
  };

}
