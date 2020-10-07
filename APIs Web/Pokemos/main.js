let url = "https://pokeapi.co/api/v2/type/";

let pokemon = document.getElementById("pokemon");


// fetch(url1)
// .then(function recibirRespuesta(respuesta) {
//     return respuesta.json();
// })

// .then(function (datos) {

// console.log (datos)
// })


fetch(url)
.then(function recibirRespuesta(respuesta) {
    return respuesta.json();
})

.then(function (datos) {

console.log (datos)
})



