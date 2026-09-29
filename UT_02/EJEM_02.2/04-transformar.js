// 04-transformar.js
// map, sort, reverse, split y join

// ----- map → array nuevo con cada elemento transformado -----
const personajes = ['Bilbo', 'Gandalf', 'Nazgul'];
const longitudes = personajes.map((nombre) => nombre.length);
console.log(longitudes);   // [5, 7, 6]

const precios = [10, 20, 30];
const conIva = precios.map((precio) => precio * 1.21);
console.log(conIva);       // [12.1, 24.2, 36.3]
console.log(precios);      // [10, 20, 30]  intacto

// ----- sort sin función: ¡compara como texto! -----
const numeros = [1, 2, 15];
numeros.sort();
console.log(numeros);      // [1, 15, 2]  ¿?

// ----- sort con función de comparación -----
numeros.sort((a, b) => a - b);  // de menor a mayor
console.log(numeros);           // [1, 2, 15]

numeros.sort((a, b) => b - a);  // de mayor a menor
console.log(numeros);           // [15, 2, 1]

// Textos con acentos: localeCompare
const paises = ['Österreich', 'Andorra', 'Vietnam'];
paises.sort((a, b) => a.localeCompare(b));
console.log(paises);       // ['Andorra', 'Österreich', 'Vietnam']

// ----- reverse → invierte el orden (modifica el array) -----
const cuenta = [1, 2, 3, 4, 5];
cuenta.reverse();
console.log(cuenta);       // [5, 4, 3, 2, 1]

// ----- split (texto → array) y join (array → texto) -----
const destinatarios = 'Celina, David, Federico';
const lista = destinatarios.split(', ');
console.log(lista);        // ['Celina', 'David', 'Federico']

for (const nombre of lista) {
  console.log(`Un mensaje para ${nombre}.`);
}

console.log('test'.split(''));  // ['t', 'e', 's', 't']
console.log(lista.join(';'));   // 'Celina;David;Federico'
