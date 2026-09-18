// al importar en html se debe usar type="module" en el script
// <script type="module" src="24.js"></script> 

import {sumar, restar, multiplicar, division} from './funciones.js'
// se pueden poner alias en las importaciones

// import {sumar as funcionSumar, restar, multiplicar, division} from './funciones.js'

const resultado1 = sumar(20, 10)
const resultado2 = restar(20, 10)
const resultado3 = multiplicar(20, 10)
const resultado4 = division(20, 10)

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)