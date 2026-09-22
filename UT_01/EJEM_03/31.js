//funciones que invocan funciones, como map, filter, reduce
let numeros = [1, 2, 3, 4, 5]

function cuadrado(x) {return x * x}
function doble(x) {return x + x}

let cuadrados = numeros.map(cuadrado)
// como función flecha puede ir directamente en la llamada a map:
// let cuadrados = numeros.map(x => x * x)
let dobles = numeros.map(doble)
console.log(cuadrados)
console.log(dobles) 