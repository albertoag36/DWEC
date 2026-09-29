// 03-buscar.js
// indexOf, lastIndexOf, includes, find, findIndex, findLastIndex y filter

// ----- indexOf / lastIndexOf / includes (comparan con ===) -----
const valores = [1, 0, false];
console.log(valores.indexOf(0));      // 1
console.log(valores.indexOf(false));  // 2
console.log(valores.indexOf(null));   // -1 → no está
console.log(valores.includes(1));     // true

const frutas = ['Manzana', 'Naranja', 'Manzana'];
console.log(frutas.indexOf('Manzana'));     // 0 (la primera)
console.log(frutas.lastIndexOf('Manzana')); // 2 (la última)

// includes funciona con NaN; indexOf no
const raros = [NaN];
console.log(raros.indexOf(NaN));  // -1
console.log(raros.includes(NaN)); // true

// ----- find / findIndex / findLastIndex -----
const usuarios = [
  { id: 1, nombre: 'Celina' },
  { id: 2, nombre: 'David' },
  { id: 3, nombre: 'Federico' },
  { id: 4, nombre: 'Celina' },
];

const usuario = usuarios.find((u) => u.id === 3);
console.log(usuario);                          // { id: 3, nombre: 'Federico' }
console.log(usuarios.find((u) => u.id === 99)); // undefined → no lo encuentra

console.log(usuarios.findIndex((u) => u.nombre === 'Celina'));     // 0
console.log(usuarios.findLastIndex((u) => u.nombre === 'Celina')); // 3
console.log(usuarios.findIndex((u) => u.nombre === 'Ana'));        // -1

// ----- filter → TODOS los que cumplen, en un array nuevo -----
const puntos = [4, 9, 12, 7, 15];
console.log(puntos.find((n) => n > 8));    // 9            (solo el primero)
console.log(puntos.filter((n) => n > 8));  // [9, 12, 15]  (todos)
console.log(puntos.filter((n) => n > 99)); // []           (ninguno)

const primerosUsuarios = usuarios.filter((u) => u.id < 3);
console.log(primerosUsuarios.length);      // 2
