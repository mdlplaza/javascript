

function fotoDelDia() {
  let dia = document.getElementById("dia").value;
  let mes = document.getElementById("mes").value;
  let anyo = document.getElementById("año").value;
  
  let url = `https://api.nasa.gov/planetary/apod?api_key=91GqBox1TzcJ5ndgp8lUgBOITXGhOAUL17vryh1F&date=${anyo}-${mes}-${dia}`;
  
  
  fetch(url)
    .then(function (respuesta) {
      console.log("primera respuesta");
      return respuesta.json();
    })
    .then(function (datos) {
      let image = document.getElementById("container");
      image.innerHTML = `<img src="${datos.url}" />`
    
    });
  
}