/*Crear un programa que muestre el valor de sumar todos los números desde 1 hasta el número que introduzca el usuario. Por ejemplo si introduce el 8 debería mostrar 36 (1 + 2+ 3+ 4+ 5+ 6+ 7+ 8)
*/

let number = 8;//parseInt(window.prompt("dime un numero"));

let suma = 0;
for(contador = 1; contador <= number; contador++){ 
    suma = suma + contador;    
}
 
document.write(suma);
