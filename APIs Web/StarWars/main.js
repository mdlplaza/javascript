let url = "https://swapi.dev/api/planets";
let personajes = document.getElementById("personajes");
let containerPersonajes = document.getElementById("container_personajes");

fetch(url)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (datos) {
        for (let i = 0; i < datos.results.length; i++) {
            console.log(datos.results[i]);
            personajes.innerHTML += `
    <option value=${datos.results[i].url}>${datos.results[i].name}</option> 
        `;
        }

    });


function alertame(select) {
    containerPersonajes.innerHTML = "";
    fetch(select.value)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (datos) {
       for(let i=0; i < datos.residents.length; i++) {
        fetch(datos.residents[i])
        .then(function (respuesta) {
            return respuesta.json();
        }).then(function (datos) {
            containerPersonajes.innerHTML += `<p>${datos.name}</p>`;
        });
       }

    });
}
