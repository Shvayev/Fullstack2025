let x = Number(document.querySelector("#num1").value);
let y = Number(document.querySelector("#num2").value);

let elem= document.querySelector("#results");
function divi(){elem.innerText = x / y;}
function mul(){elem.innerText = x * y;}
function sub(){elem.innerText = x - y;}
function btnHover(){elem.style.backgroundColor = "pink";}
function finish(){elem.style.backgroundColor = "white";}