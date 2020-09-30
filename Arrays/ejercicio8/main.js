/*Crea un programa que a partir de un array que contiene las edades de 20 alumnos (generadas aleatoriamente entre 18 y 35), calcule y nos devuelva la media de edad de dicha clase.

*/

let array = []
let max = 36
let min = 18

for (i = 0; i < 20 ; i++){
    array.push(Math.floor(Math.random() * (max - min) + min));
}

console.log(array);


for ( var i = 0; i < array.length; i ++){
    var avg = (array[i] / array.length) * array.length
}
console.log(avg)



