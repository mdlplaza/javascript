/*

Escribe una función que devuelva el resultado de sumar los dos parámetros que le pasamos. Pide al usuario 2 números. Usa esos 2 números como parámetros de la función y después asigna el valor que devuelve la función a una tercera variable. Finalmente, muestra el valor de la variable en la consola.
*/



let numero1 = parseInt(window.prompt("Dime un numero"));
let numero2 = parseInt(window.prompt("Dime otro numero"));

function sumar (num1, num2){
    return num1 + num2;
}

let resultado = sumar(numero1, numero2);
console.log (resultado)