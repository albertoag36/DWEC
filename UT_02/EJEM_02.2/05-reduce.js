// 05-reduce.js
// reduce y reduceRight: de un array a un único valor

const numeros = [1, 2, 3, 4, 5];

// ----- Suma: (acumulador, elementoActual) => nuevoAcumulador -----
const total = numeros.reduce((suma, actual) => suma + actual, 0);
console.log(total); // 15

// ----- La misma suma, mostrando cada paso -----
numeros.reduce((suma, actual) => {
  console.log(`suma: ${suma}  actual: ${actual}  resultado: ${suma + actual}`);
  return suma + actual;
}, 0);
// suma: 0   actual: 1  resultado: 1
// suma: 1   actual: 2  resultado: 3
// suma: 3   actual: 3  resultado: 6
// suma: 6   actual: 4  resultado: 10
// suma: 10  actual: 5  resultado: 15

// ----- Nota media de una clase -----
const notas = [7.5, 4, 9, 6];
const media = notas.reduce((suma, nota) => suma + nota, 0) / notas.length;
console.log(media); // 6.625

// ----- Sin valor inicial: usa el primer elemento -----
console.log(numeros.reduce((suma, actual) => suma + actual)); // 15

// ¡Cuidado! Con un array vacío y sin valor inicial da error:
// [].reduce((suma, actual) => suma + actual);  // TypeError
console.log([].reduce((suma, actual) => suma + actual, 0)); // 0

// ----- reduceRight: igual, pero de derecha a izquierda -----
const letras = ['a', 'b', 'c'];
console.log(letras.reduce((texto, letra) => texto + letra, ''));      // 'abc'
console.log(letras.reduceRight((texto, letra) => texto + letra, '')); // 'cba'
