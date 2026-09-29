// 07-mutar-o-no.js
// ¿El método modifica el array original o devuelve uno nuevo?

// ----- Estos MODIFICAN el original -----
const a = [3, 1, 2];
a.sort();
console.log(a); // [1, 2, 3]  ← ha cambiado

const b = [3, 1, 2];
b.reverse();
console.log(b); // [2, 1, 3]  ← ha cambiado

const c = [3, 1, 2];
c.splice(0, 1);
console.log(c); // [1, 2]     ← ha cambiado
// También: push, pop, shift, unshift y fill

// ----- Estos NO modifican el original (devuelven algo nuevo) -----
const d = [3, 1, 2];
const dobles = d.map((n) => n * 2);
const mayores = d.filter((n) => n > 1);
const trozo = d.slice(0, 2);
console.log(dobles, mayores, trozo); // [6, 2, 4] [3, 2] [3, 1]
console.log(d);                      // [3, 1, 2]  ← igual que antes
// También: concat, find, includes, reduce, join

// ----- Truco: ordenar sin perder el original -----
const notas = [7, 4.5, 9, 3];
const ordenadas = [...notas].sort((x, y) => x - y); // primero copiamos con spread
console.log(ordenadas); // [3, 4.5, 7, 9]
console.log(notas);     // [7, 4.5, 9, 3]  intacto
