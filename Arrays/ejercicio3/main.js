/*Crear un array. Usar un for para asignar los valores de 20 a 11 a las 10 primeras posiciones (en orden descendente). Usar un for para mostrar los 10 valores en pantalla.
Crea un array vacío.
*/

let array =[]
let parrafos = "";

for (let i = 20; i >10; i--){
    array.push(i);
}

for (let i = 0; i < array.length; i++) {
    parrafos += `<p>${array[i]}</p>`;
  }
  ​
  document.getElementById("div1").innerHTML = parrafos;