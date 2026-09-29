// 01-agregar-quitar.js
// push, pop, shift, unshift, splice, slice y concat

// ----- push / pop / shift / unshift (modifican el array) -----
const compra = ['pan', 'leche'];

compra.push('huevos');     // añade al final
console.log(compra);       // ['pan', 'leche', 'huevos']

compra.unshift('café');    // añade al principio
console.log(compra);       // ['café', 'pan', 'leche', 'huevos']

const ultimo = compra.pop();     // quita el último y lo devuelve
console.log(ultimo);             // 'huevos'

const primero = compra.shift();  // quita el primero y lo devuelve
console.log(primero);            // 'café'
console.log(compra);             // ['pan', 'leche']

// ----- ¿Por qué no usar delete? -----
const frase = ['voy', 'a', 'casa'];
delete frase[1];
console.log(frase);        // ['voy', <vacío>, 'casa']
console.log(frase.length); // 3  → el hueco sigue ahí

// ----- splice(inicio, cantidadABorrar, ...elementosNuevos) -----
// Eliminar
const lenguaje = ['Yo', 'estudio', 'JavaScript'];
lenguaje.splice(1, 1);     // desde el índice 1, borra 1
console.log(lenguaje);     // ['Yo', 'JavaScript']

// Reemplazar (y guardar lo eliminado)
const oracion = ['Yo', 'estudio', 'JavaScript', 'ahora', 'mismo'];
const eliminados = oracion.splice(0, 3, 'a', 'bailar');
console.log(oracion);      // ['a', 'bailar', 'ahora', 'mismo']
console.log(eliminados);   // ['Yo', 'estudio', 'JavaScript']

// Insertar sin borrar (cantidadABorrar = 0)
const palabras = ['Yo', 'estudio', 'JavaScript'];
palabras.splice(2, 0, 'el', 'complejo', 'lenguaje');
console.log(palabras);     // ['Yo', 'estudio', 'el', 'complejo', 'lenguaje', 'JavaScript']

// Índices negativos: se cuentan desde el final
const numeros = [1, 2, 5];
numeros.splice(-1, 0, 3, 4);
console.log(numeros);      // [1, 2, 3, 4, 5]

// ----- slice(inicio, fin) → copia un trozo, NO modifica -----
const letras = ['t', 'e', 's', 't'];
console.log(letras.slice(1, 3)); // ['e', 's']  (el fin no se incluye)
console.log(letras.slice(-2));   // ['s', 't']

const copia = letras.slice();    // sin argumentos: copia completa
copia.push('!');
console.log(copia);              // ['t', 'e', 's', 't', '!']
console.log(letras);             // ['t', 'e', 's', 't']  intacto

// ----- concat → une en un array nuevo -----
const base = [1, 2];
console.log(base.concat([3, 4]));         // [1, 2, 3, 4]
console.log(base.concat([3, 4], [5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(base.concat([3, 4], 5, 6));   // [1, 2, 3, 4, 5, 6]
console.log(base);                        // [1, 2]  intacto
