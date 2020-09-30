/*
Crear un array con 11 ceros. Pedir al usuario que introduzca valores entre 0 y 10. Cada vez que introduzca un dígito, añadir uno al valor en esa posición del array. Si por ejemplo introduce un 3, sumar uno a la posición 3. Mostrar en pantalla los valores. Si introduce un número mayor que 10, decir que ese número es incorrecto. Si introduce un número negativo, mostrar en pantalla el número de cada posición y el valor que contiene. Por ejemplo, si introduce 7, 7, 7, 5, 6, 5, 9, 9, 10, -1 mostrar:
0	
1	0
2	0
3	0
4	0
5	2
6	1
7	3
9	2
10	1
*/

let array = [0,0,0,0,0,0,0,0,0,0,0,]

let num 

let interruptor

let parrafos = "";

do {
    num = parseInt(window.prompt("escibre un valor entre 0 y 11"))
    interruptor =  num
    if(num >=0 && num <= 11){
        array [num] = array[num]+1
        document.querySelector("div1").innerHTML= `<p> EL valor es: ${array}[num]
    } else
}
