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
//BOTÃO GERADOR DE SENHA DE SEIS DÍGITOS
function btnSeisDig(){
    document.getElementById('printSeisDigitos').innerHTML = geraStringAleatoria(4) + geraStringAleatoria2(2);   
}
//BOTÃO GERADOR DE SENHA DE OITO DÍGITOS
function btnOitoDig(){
    document.getElementById('printOitoDigitos').innerHTML = geraStringAleatoria(5) + geraStringAleatoria2(3);   
}
//BOTÃO GERADOR DE SENHA DE QUINZE DÍGITOS
function btnQuinzeDig(){
    document.getElementById('printQuinzeDigitos').innerHTML = geraStringAleatoria(9) + geraStringAleatoria2(6) ;   
}
