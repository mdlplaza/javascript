/*Un número factorial es el resultado de multiplicar todos los números de 1 a ese mismo número (por ejemplo el factorial de 4 es 1 x 2 x 3 x 4 = 24). Haz un programa que muestre los números del 1 al 10 en una columna con el resultado de su factorial en la columna de al lado.*/





for (number = 1; number <= 10; number++) {

    let suma = 1;
    for (contador = 1; contador <= number; contador++) {
        suma = suma * contador;
    }

    document.write("Factorial de " + number + " = " + suma);
    document.write("<br />");
}
