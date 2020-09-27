/*Escribe un programa que pida 10 valores. Al final mostrar la media de esos valores.*/

let suma = 0;

for(contador = 1; contador <= 10; contador++){ 
    let numero = parseInt(window.prompt("Dame un numero"));
    suma = suma + numero;
}
document.write(suma/10);