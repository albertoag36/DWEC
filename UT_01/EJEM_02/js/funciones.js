/**
 * Suma dos números.
 * @param {number} n1 - El primer número.
 * @param {number} n2 - El segundo número.
 * @returns {number} La suma de n1 y n2.
 */
export const sumar = (n1, n2) => n1 + n2

/**
 * Resta dos números.
 * @param {number} n1 - El primer número.
 * @param {number} n2 - El segundo número.
 * @returns {number} La resta de n1 y n2.
 */
export const restar = (n1, n2) => n1 - n2

/**
 * Multiplica dos números.
 * @param {number} n1 - El primer número.
 * @param {number} n2 - El segundo número.
 * @returns {number} La multiplicación de n1 y n2.
 */
export const multiplicar = (n1, n2) =>  n1 * n2

/**
 * Divide dos números.
 * @param {number} n1 - El primer número.
 * @param {number} n2 - El segundo número.
 * @returns {number} La división de n1 y n2.
 */
export const division = (n1, n2)  => n1 / n2

//se puede quitar el export de cada función y exportar al final
// export {sumar, restar, multiplicar, division}
// para evitar conflictos de nombres 


// export default function sumar(n1, n2) {
//     return n1 + n2   
// }
// para importar la función por defecto se usa:
// import sumar from './funciones.js'   
// o import cualquierNombre from './funciones.js'
// y se puede usar cualquierNombre para la función importada
