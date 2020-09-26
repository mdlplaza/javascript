let operacion = window.prompt("elige= suma o resta");

let num1 = parseInt(window.prompt("dime un numero"));
let num2 = parseInt(window.prompt("dime otro numero"));

let suma = num1 + num2
let resta = num1 - num2

let button = document.createElement('button');
button.type = 'button';
button.innerText = operacion;
button.addEventListener("click", () =>  {
    /*
    if (operacion === "suma"){
        window.alert(suma);
    } else if (operacion === "resta"){
        window.alert(resta);
    }*/

    window.alert(operacion === "suma" ? suma : ( operacion === "resta" ? resta : "No es correcta la operacion"));

});

const body = document.querySelector("body");
body.appendChild(button);
