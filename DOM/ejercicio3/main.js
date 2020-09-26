let name = window.prompt("como te llamas");
let edad = parseInt(window.prompt("cuantos años tienes"));

let div = document.querySelector("div");
console.log(div);
if (edad < 18){
    div.innerHTML = `hola, ${name} eres menos de edad`;
} else if (edad >= 18){
    div.innerHTML = `hola, ${name} eres mayor de edad`;
}
