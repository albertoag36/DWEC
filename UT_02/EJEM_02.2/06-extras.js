// 06-extras.js
// Array.isArray, some, every, fill y flat

// ----- Array.isArray: typeof no distingue los arrays -----
console.log(typeof {});          // 'object'
console.log(typeof []);          // 'object'  (¡igual!)
console.log(Array.isArray({}));  // false
console.log(Array.isArray([]));  // true

// ----- some (¿alguno cumple?) y every (¿todos cumplen?) -----
const edades = [12, 17, 25];
console.log(edades.some((edad) => edad >= 18));  // true
console.log(edades.every((edad) => edad >= 18)); // false

// every para comparar dos arrays
const sonIguales = (a, b) =>
  a.length === b.length && a.every((valor, i) => valor === b[i]);

console.log(sonIguales([1, 2], [1, 2])); // true
console.log(sonIguales([1, 2], [2, 1])); // false

// ----- fill(valor, inicio, fin) → rellena (modifica el array) -----
console.log(new Array(3).fill(0));       // [0, 0, 0]
console.log([1, 2, 3, 4].fill(9, 1, 3)); // [1, 9, 9, 4]

// ----- flat → aplana arrays anidados -----
const anidado = [1, [2, [3, [4]]]];
console.log(anidado.flat());         // [1, 2, [3, [4]]]  (un nivel)
console.log(anidado.flat(Infinity)); // [1, 2, 3, 4]      (todos)
