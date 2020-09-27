/*Escribe un programa que pida valores. Si introduce un valor negativo, mostrar un mensaje diciendo que se ignoran los valores negativos.Seguir pidiendo hasta que el usuario introduzca un 0, entonces mostrar la suma de los valores introducidos. */

/*
    Escribe un programa que pida valores hasta que introduzcas un 0. Si el valor introducido es negativo mostrar un mensaje de que se ignorara, si no es negativo se añadira a la suma. Mostrar al final la suma
*/

let number = parseInt(window.prompt("dime un numero"));
let suma = 0;

while (number !==0) {

    if (number < 0) {
        console.log("Es un puto numero negativo");
    } else if (number > 0) {
        suma = suma + number;
    }


    number = parseInt(window.prompt("dime otro numero"));
}

console.log("La suma es:" + suma);
