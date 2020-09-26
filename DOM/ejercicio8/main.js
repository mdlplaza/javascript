let age = parseInt(window.prompt("cuantos años tienes"));

let div = document.querySelector("div");
if (age < 18) {
    div.innerHTML = "no puedes alqilar coche";
} else if (age >= 18) {
    let carnetConducir = window.prompt("¿tienes carnet de conducir?");
    if (carnetConducir === "si") {
        let name = window.prompt("nombre");
        let ciudad = window.prompt("ciudad");
        let dias = parseInt(window.prompt("¿cuantos dias vas a alquilar el coche"));
        if (dias < 7) {
            div.innerHTML = name + ciudad + dias * 25;
        } else if (dias === 7) {
            div.innerHTML = name + ciudad + "150euros"
        }


    }

} else {
    div.innerHTML = "no puedes alqilar coche";
}