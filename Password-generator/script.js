function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


//BOTÕES DE SENHA 
function geraStringAleatoria(tamanho) {
    var stringAleatoria = '';
    var lowCase = '0123456789';
    var upperCase = 'abcdefghijklmnopqrstuvwxyz';
    const caracteres = lowCase + upperCase;
    for (var i = 0; i < tamanho; i++) {
        stringAleatoria += caracteres.charAt(   Math.floor  (   Math.random() * caracteres.length   )   );
    }
    return stringAleatoria;
}
function geraStringAleatoria2(tamanho) {
    var stringAleatoria2 = '';
    var number = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var special = '!@#$%¨&*_-?+.,';
    const caracteres2 = number + special;
    for (var i = 0; i < tamanho; i++) {
        stringAleatoria2 += caracteres2.charAt(Math.floor(Math.random() * caracteres2.length));
    }
    return stringAleatoria2;
}
//BOTÃO GERADOR DE SENHA DE SEIS CARACTERES
function btnSeisDig(){
    document.getElementById('showPassword').innerHTML = geraStringAleatoria(4) + geraStringAleatoria2(2);   
}
//BOTÃO GERADOR DE SENHA DE OITO CARACTERES
function btnOitoDig(){
    document.getElementById('showPassword').innerHTML = geraStringAleatoria(5) + geraStringAleatoria2(3);   
}
//BOTÃO GERADOR DE SENHA DE QUINZE CARACTERES
function btnQuinzeDig(){
    document.getElementById('showPassword').innerHTML = geraStringAleatoria(9) + geraStringAleatoria2(6) ;   
}

//GERADOR DE PIN
function btnPin6Dig(){
    const pin6 = Math.floor((Math.random() * 900000) + 100000);
    document.getElementById('showPin').innerHTML= pin6;
}
function btnPin4Dig(){
    const pin4 = Math.floor((Math.random() * 9000) + 1000);
    document.getElementById('showPin').innerHTML= pin4;
}

