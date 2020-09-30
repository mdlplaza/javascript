/*Escribe un programa que pida valores. Si introduce un valor negativo, mostrar un mensaje diciendo que se ignoran los valores negativos.Seguir pidiendo hasta que el usuario introduzca un 0, entonces mostrar la suma de los valores introducidos. */


let number 

while (number !==0) {
    number = parseInt(window.prompt("dime un numero"));
    if (number < 0) {
        console.log("Es un puto numero negativo");
       
    } else if (number > 0) {
        suma = suma + number;
    }


    number = parseInt(window.prompt("dime otro numero"));
}

console.log("La suma es:" + suma);
