/*
Crear un array. Pedir al usuario 3 veces que escriba un string. Guardar cada uno de esos strings en la posición 0 , 1 y 2. Mostrar en pantalla en el orden: primero posición 1, después posición 2 y por último posición 0 */


let array=[];
let parrafos = "";

for (let i = 0; i < 3; i++);
array.push(window.prompt("escribe algo)"));

// parrafos = parrafos +  '<p>' + array[1] + '</p>';
// parrafos = parrafos +  `<p>${array[2]}</p>`;
// parrafos = parrafos +  `<p>${array[0]}</p>`;

parrafos += `<p>${array[1]}</p>`;
parrafos += `<p>${array[2]}</p>`;
parrafos += `<p>${array[0]}</p>`;
​
document.getElementById("div1").innerHTML = parrafos;



   
