function btnPin6Dig(){
    const pin6 = Math.floor((Math.random() * 900000) + 100000);
    document.getElementById('showPin').innerHTML= pin6;
}
function btnPin4Dig(){
    const pin4 = Math.floor((Math.random() * 9000) + 1000);
    document.getElementById('showPin').innerHTML= pin4;
}