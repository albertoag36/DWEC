//Argumentos predefinidos
// const average = (x = 0, y = x) => (x + y) / 2 

//parámetros restantes
const average = (first = 0, ...following) => {
  let sum = first
  for (const value of following) { sum += value }
  return sum / (1 + following.length)
} 
// console.log(average())
// console.log(average(1))
// console.log(average(1, 2))
// console.log(average(1, 2, 3))
// console.log(average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
// console.log(average('1', '2', '3')) // '123' / 3 = 41

// Y si pasamos una matriz como argumento?
let numeros = [1, 2, 3, 4, 5]
console.log(average(numeros)) // NaN

// La solución es usar el operador de propagación (spread operator) ...
//El operador spread distribuye los elementos
// como si se hubieran proporcionado por separado en la llamada.
console.log(average(...numeros)) // 3
