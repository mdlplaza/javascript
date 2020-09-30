/*Haz un programa que realice la media de los valores que contiene un array de 10 números y lo muestre por consola. No es necesario pedir los números al usuario. */

let array =[5,4,4,5,5,4,3,3,2,9]; 

let suma = 0;

for (let i = 0; i < array.length; i++) {
    suma += array[i];
}
console.log(suma);
console.log(suma/array.length);

