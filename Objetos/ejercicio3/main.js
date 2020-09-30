/*

Crea una página con un div vacío. Al entrar en la página se le preguntará al usuario que introduzca un número. Inserta ese número en el div vacío. Si el número es menor que 100, el número tendrá color verde, si el número es entre 100 y 200 tendrá color amarillo. Si el número es mayor que 200, tendrá color rojo.
*/

let number =  parseInt(window.prompt("escribe un numero"))
document.querySelector("#div1").innerHTML= number


if (number < 100){
    document.querySelector("#div1").style.color= "green"
} else if (number > 100 && number < 200){
    document.querySelector("#div1").style.color= "yellow"
} else if (number < 201)
    document.querySelector("#div1").style.color= "red"



