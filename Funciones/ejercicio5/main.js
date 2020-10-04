/*Escribe una función a la que le damos dos números y que devuelva true si el primer número es más grande que el segundo número y false en el caso contrario. Pide dos números al usuario, y pasalos a la función. Muestra en consola “El primer número es más grande” o “El primer número no es más grande”.

*/


let num1 = parseInt(window.prompt("dime un numero"))
let num2 = parseInt(window.prompt("dime otro numero"))

function compareNumber(num1, num2){

    if (num1 > num2){
        return true;
    }
    
    if (num1 < num2) {
        return false;
    }
    
}

if (compareNumber(num1, num2)) {
    console.log("Num1 es mayor");
}
else {
    console.log("Num2 es mayo");
}