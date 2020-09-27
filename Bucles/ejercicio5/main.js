
/*Escribe un programa que muestre el resultado de sumar todos los números del 1 hasta el número introducido y que vuelva a pedirle al usuario otro número hasta que el usuario introduzca un 0.-->*/


let number = parseInt(window.prompt("dime un numero"));

while (number !==0) {
let suma = 0;

for (contador=1;contador<=number;contador++) {
    document.write("Contador:" + contador); 
    document.write("<br />");
    document.write("Suma:" + suma + " + " + contador + " = " + (suma + contador)); 
    document.write("<br />");
    suma = suma + contador;
}

number = parseInt(window.prompt("dime otro numero"));



document.write("Suma total:" + suma);
}


/*
10/9/8/7/6/5/4/3/2/1

for(ronda = 10; ronda > 0; ronda --) {
    Deadlift (Peso muerto) 1/2 peso corporal
    Press Banca con peso corporal
    Clean 3/4 del peso coporal
}

*/