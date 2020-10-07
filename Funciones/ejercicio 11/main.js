//Creamos la variable moneda
​
let moneda;
​
//Creamos una función a la que se le llamará cada vez que el select haga un cambio
function cambioMoneda(event) {
  //igualamos la variable moneda al valor de value, que está dentro de la propiedad target, que está dentro del objeto event
  //que hemos recibido por parametro
  moneda = event.target.value;
}
​
//Creamos una función que se llamará desde un botón
function cogerEuros() {
  //esta función recoge en la variable euros el valor que haya introducido el usuario parseado. parseFloat() permite decimales, parseInt() no
  let euros = parseFloat(document.getElementById("euros").value);
  //Llamamos a la función cambio() con los parametros, euros (que hemos cogido del input) y moneda (que hemos cogido del select)
  cambio(euros, moneda);
}
​
//Creamos la función cambio con los parametros importe y moneda
function cambio(importe, moneda) {
  //Creamos la variable divisa
  let divisa;
  //Hacemos un condicional switch que comprobará que tiene moneda como valor
  switch (moneda) {
    //En caso de que moneda contanga "libras"
    case "libras":
      //divisa pasa a ser el resultado de importe * 0.86
      divisa = importe * 0.86;
      //Hacemos un break para que salga de aqui
      break;
    //En caso de que contenga yenes
    case "yenes":
      //Divisa pasa a ser el resultado de importe * 129.852
      divisa = importe * 129.852;
      //Hacemos un break para que salga de aquí
      break;
    //En caso de que contenga dolares
    case "dolares":
      //Divisa pasa a ser el resultado de importe * 1.28611
      divisa = importe * 1.28611;
      break;
  }
  //Sacamos en consola el número de euros y su conversión
  console.log(importe + "€" + "son " + divisa + moneda);
}
Contraer

