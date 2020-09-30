/*
Crear un array de 10 valores. Pon el valor 1 en cada una de las posiciones. Pedir al usuario que introduzca un número entre 0 y 9. Cada vez que introduzca un valor entre 0 y 9, mostrar el valor de esa posición del array, y modificarlo multiplicando por 2.*/



let array = []
for (let i =0; i < 10; i++) {
    array.push(1);
} 
let opcion = parseInt(window.prompt("escribre un numero entre el 1 y el 9"));

console.log(array);
if (opcion > 0 && opcion < 9) {
    array[opcion] = array[opcion] * 2; 
} 

console.log(array);