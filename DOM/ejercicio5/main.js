let num1 = parseInt(window.prompt("dime un numero"));
let num2 = parseInt(window.prompt("dime otro numero"));

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;

let divsuma = document.querySelector("#suma");
    divsuma.style.color ="red";
    divsuma.style.backgroundColor ="black";
    divsuma.innerHTML = suma;

let divresta = document.querySelector("#resta");
    divresta.style.color ="black";
    divresta.style.backgroundColor ="blue";
    divresta.innerHTML = resta;


