/*Escribe un programa que muestre todos los valores pares o impares entre 1 y 100 dependiendo de si el usuario introduce P o I . Si introduce otra cosa, decir que ese valor no es correcto y pedirle otra vez.*/

let ParImpar = window.prompt("esbribe P para numero par, y si es impar escribe I")
for (number = 1; number >=1 && number <=100; number++){
console.log(number)

if (number%2 === 0 && ParImpar === "P"){
     console.log("El " + number + " es par")
}else if (ParImpar === "I"){
    console.log("El " + number + " es impar")
}
}