//Creamos 2 Arrays vacios. Uno será de nombres y el otro de notas
​
let nombres = [];
let notas = [];
​
//Con un bucle donde i irá de 0 al número de alumnos que tenga la clase
//le pedimos los nombres de los alumnos al usuario. Y hacemos push() del nombre al array nombres[]
​
for (let i = 0; i < 5; i++) {
  let nombre = window.prompt("Escribe tu nombre");
  nombres.push(nombre);
  //También creamos una nota aleatoria entre 0 y 10 por cada vuelta al bucle
  //y le hacemos pusb al array notas[]
  let nota = Math.floor(Math.random() * (11 - 0) + 0);
  notas.push(nota);
}
​
//Para sacar la media de las notas creamos la variable suma y la igualamos a 0
let suma = 0;
//con un bucle que recorra el array de notas igualamos el valor de suma
//al que ya tiene mas la nota con el indice i dentro del array notas[]
for (let i = 0; i < notas.length; i++) {
  suma += notas[i];
}
//una vez tenemos la suma de todas las notas la dividimos entre la longitud del array
//y guardamos el valor en la variable media
let media = suma / notas.length;
​
//Sacamos la variable media en consola
console.log(media);
​
//Para sacar a los alumnos con las notas mas altas que la media
//necesitamos recorrer el array notas[]
for (let i = 0; i < notas.length; i++) {
  //si la nota del indice i del array notas[] es mayor a la media
  if (notas[i] > media) {
    //sacamos en consola el nombre del alumno en la posicion i del array nombres[] y la nota i del array notas[]
    console.log(
      `El alumno ${nombres[i]} tiene la nota: ${notas[i]}. La media es ${media}`
    );
  }
}
​
//Para saber cual es la nota más alta creamos una variable y le damos el valor de la nota más baja posible
let alta = 0;
//Para saber que personas han sacado la nota mas alta creamos un array vacio
let personasAlta = [];
​
//Recorremos el array notas[] en busca de la nota mas alta
for (let i = 0; i < notas.length; i++) {
  //si la posicion i del array notas[] es mayor que la variable alta
  if (notas[i] > alta) {
    //igualamos la variable alta a la nota con el indice i en el array notas[]
    //Así si la siguiente nota es más baja, la variable alta no cambiará
    //pero si la siguiente nota es más alta, la variable alta cambiará su valor por el de esta nota
    alta = notas[i];
  }
}
​
//recorremos el array notas para buscar quienes han sido los que tienen la nota más alta
for (let i = 0; i < notas.length; i++) {
  //si el indice i de notas[] es igual a la nota más alta
  if (notas[i] === alta) {
    //Hacemos un push del indice i del array nombres[] al array personasAlta[]
    personasAlta.push(nombres[i]);
  }
}
​
//Para saber cual es la nota más baja creamos una variable y le damos el valor de la nota más alta posible
let minima = 10;
//Para saber que personas han sacado la nota mas baja creamos un array vacio
let personasMinima = [];
​
//Recorremos el array notas[] en busca de la nota mas baja
for (let i = 0; i < notas.length; i++) {
  //si la nota en el indice i del array notas[] es más baja que la variable minima
​
  if (notas[i] < minima) {
    //le damos el valor del indice i de notas[] a la variable minima
    //Así si la siguiente nota es más alta, la variable minima no cambiará
    //pero si la siguiente nota es más baja, la variable minima cambiará su valor por el de esta nota
    minima = notas[i];
  }
}
​
//recorremos el array notas para buscar quienes han sido los que tienen la nota más baja
​
for (let i = 0; i < notas.length; i++) {
  //si el indice i de notas[] es igual a la nota más baja (variable minima)
  if (notas[i] === minima) {
    //Hacemos un push del indice i del array nombres[] al array personasMinima[]
    personasMinima.push(nombres[i]);
  }
}
​
//Recorremos el array notas[]
for (let i = 0; i < notas.length; i++) {
  //Sacamos por cada vuelta el indice i de nombres y el indice i de notas.
  console.log(`El alumno ${nombres[i]} ha sacado la nota ${notas[i]}`);
}
​
//Sacamos en consola el array personasMinima con todas las personas con la peor nota
​
console.log(personasMinima);
//Sacamos en consola la nota más baja
console.log(minima);
//Sacamos en consola el array peronasAlta con todas las personas con la nota mas alta
console.log(personasAlta);
//Sacamos en consola la nota mas alta
console.log(alta);